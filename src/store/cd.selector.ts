import { StoreApi } from "zustand";

import { queueFetchItems } from "../cd.worker";
import { CDEntity } from "../types/entity";
import { cacheUpdatedStringToNumber } from "./cd.action";
import { CDReducerState, SelectCDEntitiesResult, SelectCDEntityResult } from "./cd.types";


const isBrowser = typeof window !== "undefined";

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

const extractCDEntityResult = <T extends CDEntity>(
  entity: T | undefined,
  fields: (keyof T)[],
): [result: T | undefined, needFetch: boolean] => {
  if (!entity) {
    return [undefined, true];
  }

  const result: T = {
    oid: entity.oid,
  } as T;

  let needFetch = false;
  for (const field of fields) {
    if (!(field in entity)) {
      // console.log("Missing data", field, entity[field]);
      // do something here
      needFetch = true;
    } else {
      result[field] = entity[field];
    }
  }

  return [result, needFetch];
};

export const createCDSelectors = (
  _set: StoreApi<CDReducerState>["setState"],
  get: StoreApi<CDReducerState>["getState"],
) => {

  const selectCDEntities = <T extends CDEntity, F extends Readonly<(keyof T)[]> = Readonly<(keyof T)[]>>(
    _oids: string[],
    _fields: F,
    autoFetchData = true,
  ): SelectCDEntitiesResult<T, F> => {

    if (!_oids || _oids.length === 0 || !_fields || _fields.length === 0) {
      return EMPTY_RESULTS;
    }

    // Fix crashes due to oids containing empty strings or null
    const oids = _oids.filter(Boolean);
    if (oids.length <= 0) {
      return EMPTY_RESULTS;
    }

    // Fix crashes due to fields containing empty strings or null
    const fields = _fields.filter(Boolean);
    if (fields.length <= 0) {
      return EMPTY_RESULTS;
    }

    const { cd, entityUpdatedTime } = get();
    const results: Record<string, T | undefined> = {};
    const resultUpdatedTime = new Map<string, number>();

    const queueItems: Map<string, (keyof T)[]> = new Map();
    let totalUpdatedTime = 0;

    for (const oid of oids) {

      // console.log("cd.has(oid)", cd.has(oid));

      if (!cd.has(oid)) {
        queueItems.set(oid, fields);
        continue;
      }

      const entity = cd.get(oid) as T;

      const [result, needFetch] = extractCDEntityResult(entity, fields);
      if (needFetch) {
        // console.log("[selectCDEntity] needFetch", oid);
        queueItems.set(oid, fields);
      }
      results[oid] = result;
      const _entityUpdatedTime = entityUpdatedTime.get(oid);
      if (_entityUpdatedTime) {
        const prefix = `${cacheUpdatedStringToNumber.get(oid) || oid}.`;
        // use native method for the best perfomance
        for (const field in result) {
          if (field === "oid") continue;

          const fieldNum = cacheUpdatedStringToNumber.get(field);
          if (fieldNum) {
            const fieldUpdatedTime = _entityUpdatedTime.get(fieldNum);
            if (fieldUpdatedTime) {
              resultUpdatedTime.set(prefix + fieldNum.toString(), fieldUpdatedTime);
              totalUpdatedTime += fieldUpdatedTime;
            }
          }
        }
      }
    }

    if (autoFetchData && isBrowser && queueItems.size > 0) {
      queueFetchItems(queueItems);
    }

    return {
      results: results,
      isFulfilled: queueItems.size === 0,
      updatedTime: resultUpdatedTime,
      totalUpdatedTime: totalUpdatedTime,
    };
  };

  const selectCDEntity = <T extends CDEntity, F extends Readonly<(keyof T)[]> = Readonly<(keyof T)[]>>(
    oid: string | undefined,
    fields: F,
    autoFetchData = true,
  ): SelectCDEntityResult<T, F> => {
    if (!oid) {
      return EMPTY_RESULT;
    }
    const results = selectCDEntities<T, F>([oid], fields, autoFetchData);
    return {
      result: results.results[oid] || undefined,
      isFulfilled: results.isFulfilled,
      updatedTime: results.updatedTime,
      totalUpdatedTime: results.totalUpdatedTime,
    };
  };

  return {
    selectCDEntities: selectCDEntities,
    selectCDEntity: selectCDEntity,
  };
};
