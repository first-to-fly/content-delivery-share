import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import isEqual from "react-fast-compare";

import { fetchCDDataBatch } from "./cd.worker";
import { CD_MODULE_NOT_INIT } from "./constants";
import { getCDState, useCDStoreShallow } from "./store/cd.store";
import { CDReducerState, SelectCDEntitiesResult, SelectCDEntityResult } from "./store/cd.types";
import { AllEntityField, CDRequestBody, RequestIncludeOptions } from "./types/actions";
import { CDEntity } from "./types/entity";
import { OID } from "./types/generic";
import { checkIsOID } from "./utils";


// ===========================================================================
// EMPTY VALUES
// ===========================================================================

const EMPTY_RESULTS = {
  results: {},
  isFulfilled: true,
  updatedTime: new Map(),
  totalUpdatedTime: 0,
} as const;

const EMPTY_RESULT = {
  result: undefined,
  isFulfilled: true,
  updatedTime: undefined,
  totalUpdatedTime: 0,
} as const;


// ===========================================================================
// CONSTANTS
// ===========================================================================

const isServer = typeof window === "undefined";

let isVerbose = false;

export function setVerbose(val: boolean) { isVerbose = val; }


// ===========================================================================
// TYPES
// ===========================================================================

interface State {
  isLoading: boolean;
  error: Error | undefined;
  lastFetched: number;
}

type Action = {
  type: "fetching" | "fetched" | "error";
  error?: Error | undefined;
};

const initialState: State = {
  isLoading: false,
  error: undefined,
  lastFetched: 0,
};


// ===========================================================================
// HOOKS
// ===========================================================================

function compareUsingUpdatedTime(
  a: SelectCDEntitiesResult<CDEntity, readonly["oid"]> | SelectCDEntityResult<CDEntity, readonly["oid"]>,
  b: SelectCDEntitiesResult<CDEntity, readonly["oid"]> | SelectCDEntityResult<CDEntity, readonly["oid"]>,
): boolean {

  const aUpdated = a.updatedTime;
  const bUpdated = b.updatedTime;

  if (
    a.isFulfilled !== b.isFulfilled ||
    // quick compare, if totalUpdatedTime is different, then the results are different, but not vice versa
    a.totalUpdatedTime !== b.totalUpdatedTime ||
    !aUpdated ||
    !bUpdated ||
    aUpdated.size !== bUpdated.size
  ) {
    return false;
  }

  // User changes OID (single)
  if (
    "result" in a &&
    "result" in b &&
    a.result?.oid !== b.result?.oid
  ) {
    return false;
  }

  // User changes OIDs (multiple)
  if (
    "results" in a &&
    "results" in b &&
    !isEqual(Object.keys(a.results).sort(), Object.keys(b.results).sort())
  ) {
    return false;
  }

  if (aUpdated.size === 0) return true;

  for (const entry of bUpdated) {
    if (aUpdated.get(entry[0]) !== entry[1]) {
      return false;
    }
  }

  return true;
}


/**
 * This hook is used for retrieving CD data. It can auto fetch data if any fields are missed.
 */
export function useCDSelectorV2<T extends CDEntity, F extends Readonly<(
  keyof T)[]> = Readonly<(keyof T)[]>>(
  oids: string[] | null | undefined,
  fields: F,
  {
    ignoredServerMissingFields,
  }: {
    ignoredServerMissingFields?: F[number][],
  } = {
  },
): SelectCDEntitiesResult<T, F> {

  const results = useCDStoreShallow<SelectCDEntitiesResult<T, F>>(
    useCallback((state) => {
      if (!oids || oids.length <= 0) {
        return EMPTY_RESULTS;
      }
      return state.selectCDEntities<T, F>(oids, fields);
    }, [fields, oids]),
    compareUsingUpdatedTime,
  );

  if (isServer && isVerbose && !results?.isFulfilled) {
    const missingResults = (oids || []).map((oid) => {
      let missingFields = fields.filter((field) => (
        !Object.keys(results?.results?.[oid] || {}).includes(field as string)
      ));
      missingFields = (
        ignoredServerMissingFields && ignoredServerMissingFields.length > 0 ?
          missingFields.filter((field) => !ignoredServerMissingFields.includes(field)) :
          missingFields
      );
      return {
        oid: oid,
        fields: missingFields,
      };
    }).filter((item) => item.fields.length > 0);
    if (missingResults.length > 0) {
      console.trace(
        "[CD]",
        "ERROR: These fields are missing in cdData prepared through SSR methods like getStaticProps(). Please check the stack trace to find the querying React component.",
        JSON.stringify(missingResults, null, 2),
      );
    }
  }

  if (!results) {
    return EMPTY_RESULTS;
  }

  return results;
}


/**
 * This hook is used for retrieving CD data. It can auto fetch data if any fields are missed.
 * @deprecated Use useCDSelectorV2 instead
 */
export function useCDSelector<T extends CDEntity, F extends Readonly<(
  keyof T)[]> = Readonly<(keyof T)[]>>(
  oids: string[] | null | undefined,
  fields: F,
): Readonly<Record<string, Pick<T, F[number]> | undefined>> {
  const result = useCDSelectorV2<T, F>(oids, fields);
  return result.results;
}


/**
 * This hook is used for retrieving CD data for a single entity. It can auto fetch data if any fields are missed.
 * @deprecated Use useCDSelectorSingleV2 instead
 */
export function useCDSelectorSingle<T extends CDEntity, F extends Readonly<(
  keyof T
)[]> = Readonly<(keyof T)[]>>(
  oid: string | undefined,
  fields: F,
): Pick<T, F[number]> | undefined {
  const result = useCDSelectorSingleV2<T, F>(oid, fields);
  return result.result;
}


/**
 * This hook is used for retrieving CD data for a single entity. It can auto fetch data if any fields are missed.
 */
export function useCDSelectorSingleV2<T extends CDEntity, F extends Readonly<(
  keyof T
)[]> = Readonly<(keyof T)[]>>(
  oid: string | undefined,
  fields: F,
  {
    ignoredServerMissingFields,
  }: {
    ignoredServerMissingFields?: F[number][],
  } = {
  },
): SelectCDEntityResult<T, F> {

  const result = useCDStoreShallow<SelectCDEntityResult<T, F>>(
    useCallback((state) => {
      if (!oid) {
        return EMPTY_RESULT;
      }
      const selectResult = state.selectCDEntities<T, F>([oid], fields);
      return {
        result: selectResult.results[oid] || {} as T,
        isFulfilled: selectResult.isFulfilled,
        updatedTime: selectResult.updatedTime,
        totalUpdatedTime: selectResult.totalUpdatedTime,
      };
    }, [fields, oid]),
    compareUsingUpdatedTime,
  );

  if (isServer && isVerbose && !result?.isFulfilled) {
    let missingFields = fields.filter((field) => (
      !Object.keys(result?.result || {}).includes(field as string)
    ));
    missingFields = (
      ignoredServerMissingFields && ignoredServerMissingFields.length > 0 ?
        missingFields.filter((field) => !ignoredServerMissingFields.includes(field)) :
        missingFields
    );
    if (missingFields.length > 0) {
      console.trace(
        "[CD]",
        "ERROR: These fields are missing in cdData prepared through SSR methods like getStaticProps(). Please check the stack trace to find the querying React component.",
        JSON.stringify({
          oid: oid,
          fields: missingFields,
        }, null, 2),
      );
    }
  }

  if (result) {
    return result;
  }

  return EMPTY_RESULT;
}


/**
 * This hook is used for prepare CD data. Only use it for preparing, it won't return any CD data.
 * You can use it when you need to query many CD Entities with many types & fields,
 * and some entities need to include more data.
 */
export const useCDFetchData = <S extends CDEntity = CDEntity>(
  reqBody: CDRequestBody<S>,
  options?: {
    // used for logging CD req for easier to debug
    operation?: string;
    forceRefresh?: boolean;
    shouldFetch?: boolean;
  },
) => {

  const {
    operation = "",
    shouldFetch = true,
    forceRefresh = false,
  } = options || {
    shouldFetch: true,
  };

  const reqRef = useRef<typeof reqBody | undefined>(undefined);

  const [state, dispatchState] = useReducer(reducer, initialState);

  const [retryCount, setRetryCount] = useState<number>(0);

  const currentReq = useMemo(() => {
    const _reqBody: CDRequestBody<S> = sortRequest(reqBody);
    if (!reqRef.current || !isEqual(reqRef.current, _reqBody)) {
      reqRef.current = _reqBody;
    }
    return reqRef.current;
  }, [reqBody]);

  // ---------------------------------------------------------------------------
  useEffect(() => {

    if (!currentReq || !currentReq.oids.length) return;

    if (!shouldFetch) return;

    let req: CDRequestBody<S>;

    if (forceRefresh) {
      req = currentReq;
    } else {
      const [isHavingFull, newReq] = isHavingFullExistedData<S>(currentReq);
      if (isHavingFull) {
        // console.log("useCDFetchData already having full data, ignore");
        dispatchState({ type: "fetched" });
        return;
      }
      req = newReq;
    }

    dispatchState({ type: "fetching" });

    fetchCDDataBatch(req).then(
      () => {
        dispatchState({ type: "fetched" });
      },
      (err) => {
        dispatchState({
          type: "error",
          error: err,
        });
      },
    );

  }, [currentReq, forceRefresh, operation, retryCount, shouldFetch]);

  const retry = useCallback(() => {
    setRetryCount((prevRetry) => prevRetry + 1);
  }, []);

  return useMemo(() => ({
    isLoading: state.isLoading,
    error: state.error,
    lastFetched: state.lastFetched,
    retry: retry,
  }), [retry, state.error, state.isLoading, state.lastFetched]);
};


// ===========================================================================
// HELPER FUNCTIONS
// ===========================================================================

const sortRequest = <
  S extends CDEntity = CDEntity,
  F extends Readonly<(keyof S)[]> = Readonly<(keyof S)[]>,
>(reqBody: CDRequestBody<S>) => {

  const _reqBody: CDRequestBody<S, F> = {
    oids: [...reqBody.oids].sort(),
    fields: [...reqBody.fields].sort() as unknown as F,
    includes: reqBody.includes,
  };

  const { includes } = _reqBody;
  if (includes) {
    for (const fieldStr of Object.keys(includes)) {
      const field = fieldStr as unknown as keyof S;
      const includeSettings = includes[field] as RequestIncludeOptions;
      if (_reqBody.includes) {
        _reqBody.includes[field] = sortIncludeRequest(includeSettings);
      }
    }
  }

  return _reqBody;
};

// ---------------------------------------------------------------------------

const isHavingFullExistedData = <S extends CDEntity>(
  reqBody: CDRequestBody<S>,
): [boolean, CDRequestBody<S>] => {

  if (reqBody.oids.length === 0 || reqBody.fields.length === 0) {
    return [true, reqBody];
  }

  const { cd } = getCDState();

  const newReqBody = {
    ...reqBody,
  };

  newReqBody.oids = [];
  for (let i = 0, len = reqBody.oids.length; i < len; i++) {
    const oid = reqBody.oids[i];
    if (!isObjectHavingFullExistedData(cd, oid, reqBody.fields, reqBody.includes)) {
      newReqBody.oids.push(oid);
      continue;
    }
  }

  return [newReqBody.oids.length === 0, newReqBody];
};

// ---------------------------------------------------------------------------

const sortIncludeRequest = (includeSettings: RequestIncludeOptions) => {

  const _includeSettings: RequestIncludeOptions = {
    includeKey: includeSettings.includeKey,
    fields: [...includeSettings.fields].sort(),
    includes: includeSettings.includes,
  };

  const { includes } = _includeSettings;
  if (includes) {
    for (const fieldStr of Object.keys(includes)) {
      const field = fieldStr as unknown as AllEntityField;
      const subSettings = includes[field] as RequestIncludeOptions;
      if (_includeSettings.includes) {
        _includeSettings.includes[field] = sortIncludeRequest(subSettings);
      }
    }
  }

  return _includeSettings;
};

// ---------------------------------------------------------------------------

const isObjectHavingFullExistedData = <S extends CDEntity>(
  cd: CDReducerState["cd"],
  oid: OID,
  fields: Readonly<(keyof S)[]>,
  includes?: Partial<Record<keyof S, RequestIncludeOptions>>,
): boolean => {

  if (!cd.has(oid)) {
    return false;
  }

  const object = cd.get(oid) as S;

  for (let i = 0, len = fields.length; i < len; i++) {
    if (fields[i] !== "CDEntityType" && fields[i] !== "oid" && !(fields[i] in object)) {
      // console.log("Missed ", fields[i], oid);
      return false;
    }
  }

  if (includes) {

    for (const [objKey, includeSettings] of Object.entries(includes)) {

      const fieldValue = object[objKey as unknown as keyof S];
      if (typeof fieldValue === "undefined") {
        // console.log("Missed 3");
        return false;
      }

      if (includeSettings.fields.length === 0) {
        continue;
      }

      const includeOIDMap: Map<string, boolean> = new Map();
      if (includeSettings.includeKey) {
        if (Array.isArray(fieldValue)) {
          for (const item of (fieldValue as Array<Record<string, unknown>>)) {
            if (typeof item === "undefined") {
              return false;
            }
            const itemValue = item[includeSettings.includeKey];
            if (typeof itemValue === "undefined") {
              return false;
            }
            if (checkIsOID(itemValue)) {
              includeOIDMap.set(itemValue as string, true);
            }
          }
        } else if (fieldValue && typeof fieldValue === "object" && includeSettings.includeKey in fieldValue) {
          const itemValue = (fieldValue as unknown as Record<string, unknown>)[includeSettings.includeKey];
          if (checkIsOID(itemValue)) {
            includeOIDMap.set(itemValue as string, true);
          }
        }
      } else if (checkIsOID(fieldValue)) {
        includeOIDMap.set(fieldValue as unknown as string, true);
      } else if (Array.isArray(fieldValue)) {
        const arr = fieldValue as Array<unknown>;
        for (let k = 0, len2 = arr.length; k < len2; k++) {
          const itemValue = arr[k];
          if (checkIsOID(itemValue)) {
            includeOIDMap.set(itemValue as string, true);
          }
        }
      }

      if (includeOIDMap.size > 0) {
        for (const includeOID of includeOIDMap.keys()) {
          if (!isObjectHavingFullExistedData(cd, includeOID, includeSettings.fields, includeSettings.includes)) {
            return false;
          }
        }
      }
    }
  }

  return true;
};

// ---------------------------------------------------------------------------

const reducer = (state: State, action: Action): State => {

  switch (action.type) {

    case "fetching":
      return {
        ...state,
        isLoading: true,
      };

    case "fetched":
      return {
        ...state,
        isLoading: false,
        lastFetched: Date.now(),
      };

    case "error":
      return {
        ...state,
        isLoading: false,
        error: action.error !== CD_MODULE_NOT_INIT ? action.error : undefined,
      };

    default:
      return state;

  }
};
