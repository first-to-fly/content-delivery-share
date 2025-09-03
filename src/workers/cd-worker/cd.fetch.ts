import { CD_MODULE_NOT_INIT } from "../../constants";
import type { CDRequestBody } from "../../types/actions";
import type { CDEntity } from "../../types/entity";
// import { getCDState } from "./store/cd.store";
// import { CDRequestBody } from "./types/actions";
// import { CDEntity } from "./types/entity";
import { checkIcdResponseHandler, mergeCDObject } from "../../utils";
// import { checkIcdResponseHandler, mergeCDObject } from "./utils";


// ===========================================================================
// TYPES
// ===========================================================================

let cdAPIEndpoint = "";

const BATCH_TIMEOUT = 100;
let currentIDToken = "";
let batchTimeout: NodeJS.Timeout | null;
interface CDBatchRequest<T extends CDEntity> {
  reqBody: CDRequestBody<T>;
  idToken: string;
  promiseResolve?: (value: void | PromiseLike<void>) => void;
  promiseReject?: (reason?: unknown) => void;
}

let initPromiseResolve: (value: void | PromiseLike<void>) => void;

const initPromise: Promise<void> = new Promise((resolve) => {
  initPromiseResolve = resolve;
});


let cdBatchRequests: CDBatchRequest<CDEntity>[] = [];
let listenOnFetchDone: (result: Map<string, CDEntity>) => void | undefined;
// ===========================================================================
// Fetch CD data
// ===========================================================================

export const setCurrentIDToken = (idToken: string) => {
  currentIDToken = idToken;
};


/**
 * Do calling CD API to fetch data, this is a low level function, use it carefully.
 */
export const fetchCDData = async <S extends CDEntity>(
  reqBody: CDRequestBody<S>,
  idToken: string,
  operation = "", // for debug only, recognize the request for which operation
): Promise<void> => {

  await initPromise;

  if (!cdAPIEndpoint) {
    throw CD_MODULE_NOT_INIT;
  }

  if (!reqBody || !reqBody.oids || reqBody.oids.length <= 0 || reqBody.oids.every((oid) => !oid)) {
    return;
  }

  // never request oid field
  if (reqBody.fields.includes("oid")) {
    reqBody.fields = reqBody.fields.filter((field) => field !== "oid");
  }

  try {
    let url = `${cdAPIEndpoint}/v1/content_json`;
    if (operation !== "") {
      url += `?operation=${operation}`;
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (idToken) {
      headers.Authorization = idToken;
    } else if (currentIDToken) {
      headers.Authorization = currentIDToken;
    }

    const res = await fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(reqBody),
    });

    const resJson = await res.json();

    checkIcdResponseHandler<S>(resJson);

    const cdMap: Map<string, CDEntity> = new Map();

    const fieldLen = reqBody.fields.length;
    const sampleObj: Record<string, unknown> = {};
    for (let i = 0; i < fieldLen; i++) {
      sampleObj[reqBody.fields[i] as string] = null;
    }

    for (let i = 0, len = reqBody.oids.length; i < len; i++) {
      const oid = reqBody.oids[i];
      const entity = {
        ...sampleObj,
        oid: oid,
      };
      cdMap.set(oid, entity);
    }

    for (const [oid, resultEntity] of Object.entries(resJson.data)) {
      if (cdMap.has(oid)) {
        mergeCDObject(cdMap.get(oid) as S, resultEntity as S);
      } else {
        cdMap.set(oid, resultEntity as S);
      }
    }
    postMessage({
      type: "updateCDEntities",
      cdMap: cdMap,
    });
    // getCDState().updateCDEntities(cdMap);
    if (listenOnFetchDone) {
      listenOnFetchDone(cdMap);
    }
  } catch (e) {
    // captureExceptionBySentry(e, "fetchCDData");

    console.error("Fail to fetch CD. ", e);
  }
};

export const setListenOnFetchDone = (callback: (result: Map<string, CDEntity>) => void): void => {
  listenOnFetchDone = callback;
};

/**
 * Do calling CD API to fetch data, this is a low level function, use it carefully.
 */
export const fetchCDBatchData = async <S extends CDEntity>(
  requests: CDRequestBody<S>[],
  idToken: string,
  operation = "", // for debug only, recognize the request for which operation
): Promise<void> => {
  await initPromise;
  if (!cdAPIEndpoint) {
    throw CD_MODULE_NOT_INIT;
  }

  const requestBodies: CDRequestBody<S>[] = [];
  for (let i = 0, len = requests.length; i < len; i++) {
    const req = requests[i];
    if (!req || !req.oids || req.oids.length <= 0 || req.oids.every((oid) => !oid)) {
      continue;
    }
    // never request oid field
    if (req.fields.includes("oid")) {
      req.fields = req.fields.filter((field) => field !== "oid");
    }
    requestBodies.push(req);
  }

  if (!requestBodies.length) {
    return;
  }

  try {
    let url = `${cdAPIEndpoint}/v1/content_json/batch`;
    if (operation !== "") {
      url += `?operation=${operation}`;
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (idToken) {
      headers.Authorization = idToken;
    } else if (currentIDToken) {
      headers.Authorization = currentIDToken;
    }


    const res = await fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(requestBodies),
    });

    const resJson = await res.json();

    checkIcdResponseHandler<S>(resJson);

    const cdMap: Map<string, CDEntity> = new Map();
    for (let i = 0, len1 = requestBodies.length; i < len1; i++) {
      const req = requestBodies[i];

      const fieldLen = req.fields.length;
      const sampleObj: Record<string, unknown> = {};
      for (let j = 0; j < fieldLen; j++) {
        sampleObj[req.fields[j] as string] = null;
      }

      for (let j = 0, len = req.oids.length; j < len; j++) {
        const oid = req.oids[j];
        if (!cdMap.has(oid)) {
          const entity = {
            ...sampleObj,
            oid: oid,
          };
          cdMap.set(oid, entity);
        } else {
          mergeCDObject(cdMap.get(oid) as CDEntity, sampleObj as unknown as CDEntity);
        }
      }
    }


    for (const [oid, data] of Object.entries(resJson.data)) {

      if (!cdMap.has(oid)) {
        const entity = {
          ...(data as CDEntity),
          oid: oid,
        };
        cdMap.set(oid, entity);
      } else {
        mergeCDObject(cdMap.get(oid) as CDEntity, data as CDEntity);
      }
    }

    postMessage({
      type: "updateCDEntities",
      cdMap: cdMap,
    });
    if (listenOnFetchDone) {
      listenOnFetchDone(cdMap);
    }

  } catch (e) {
    // captureExceptionBySentry(e, "fetchCDData");

    console.error("Fail to fetch CD Batch. ", e);
  }
};

// ---------------------------------------------------------------------------


// ===========================================================================
// HELPERS
// ===========================================================================

const runBatchRequest = async () => {
  const requests = cdBatchRequests;
  cdBatchRequests = [];
  batchTimeout = null;
  if (requests.length === 0) {
    return;
  }

  let token = "";

  const groups = new Map<string, CDBatchRequest<CDEntity>[]>();
  for (let i = 0, len = requests.length; i < len; i++) {
    const req = requests[i];
    const { reqBody, idToken } = req;
    if (idToken) {
      token = idToken;
    }

    const groupKey = [...reqBody.fields].sort().join("|") + (reqBody.includes ? JSON.stringify(reqBody.includes) : "");
    let g = groups.get(groupKey);
    if (!g) {
      g = [];
      groups.set(groupKey, g);
    }
    g.push(req);
  }
  // console.log("debug groups ", Date.now(), groups);
  const requestBodies: CDRequestBody<CDEntity>[] = [];
  for (const batchRequests of groups.values()) {
    if (batchRequests.length === 0) {
      continue;
    }

    const reqBody: CDRequestBody<CDEntity> = {
      ...batchRequests[0].reqBody,
      oids: [],
    };
    for (const req of batchRequests) {
      reqBody.oids.push(...req.reqBody.oids);
    }
    reqBody.oids = [...new Set(reqBody.oids)];
    requestBodies.push(reqBody);
  }
  await fetchCDBatchData(requestBodies, token, "batchFetch");

  for (const batchRequests of groups.values()) {
    for (const req of batchRequests) {
      if (req.promiseResolve) {
        req.promiseResolve();
      }
    }
  }

};

// ---------------------------------------------------------------------------

export const fetchCDDataBatch = async <S extends CDEntity>(
  reqBody: CDRequestBody<S>,
  idToken: string,
): Promise<void> => {
  const batchRequest: CDBatchRequest<S> = {
    reqBody: reqBody,
    idToken: idToken,
  };
  const fetchPromise = new Promise<void>((res, rej) => {
    batchRequest.promiseResolve = res;
    batchRequest.promiseReject = rej;
  });
  if (batchTimeout) {
    clearTimeout(batchTimeout);
  }
  batchTimeout = setTimeout(runBatchRequest, BATCH_TIMEOUT);
  cdBatchRequests.push(batchRequest as unknown as CDBatchRequest<CDEntity>);
  await fetchPromise;
};

// ---------------------------------------------------------------------------

// export const isFetchingCDData = () => numFetchingReq > 0;

export const setCDApiEndpoint = (endpoint: string) => {
  cdAPIEndpoint = endpoint;
  initPromiseResolve();
};

// ---------------------------------------------------------------------------


export const invalidateCDEntityData = (oids: string[]) => {
  const cdMap: Map<string, CDEntity> = new Map();
  oids.forEach((oid) => {
    cdMap.set(oid, {
      oid: oid,
    });
  });
  postMessage({
    type: "invalidateCDEntities",
    cdMap: cdMap,
  });
};

// export const silentRefetchCDEntityData = async (oids: string[]) => {
//   if (oids.length <= 0) {
//     return;
//   }

//   const state = getCDState().cd;
//   const fields: Set<string> = new Set();

//   for (let i = 0, len = oids.length; i < len; i++) {
//     const oid = oids[i];
//     const entity = state.get(oid);
//     if (entity) {
//       for (const field of Object.keys(entity)) {
//         if (!fields.has(field)) {
//           fields.add(field);
//         }
//       }
//     }
//   }

//   if (fields.size <= 0) {
//     return;
//   }

//   await fetchCDData({
//     oids: oids,
//     fields: Array.from(fields) as (keyof CDEntity)[],
//   });
// };
