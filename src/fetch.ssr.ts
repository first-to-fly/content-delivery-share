/* eslint-disable no-restricted-syntax */
import { CD_MODULE_NOT_INIT } from "./constants";
import { CDRequestBody } from "./types/actions";
import { CDEntity } from "./types/entity";
import { checkIcdResponseHandler, mergeCDObject } from "./utils";


let cdAPIEndpoint = "";
export const setCDApiEndpoint = (endpoint: string) => {
  cdAPIEndpoint = endpoint;
};


/**
 * Do calling CD API to fetch data, this is a low level function using for SSR.
 */
export const fetchCDDataSSR = async <S extends CDEntity, F extends Readonly<(keyof S)[]> = Readonly<(keyof S)[]>>(
  reqBody: CDRequestBody<S, F>,
  operation = "", // for debug only, recognize the request for which operation

): Promise<Map<string, Pick<S, "oid" | F[number]> | undefined>> => {
  if (typeof window !== "undefined") {
    throw new Error("fetchCDDataSSR should only be called in Server Process");
  }

  if (!cdAPIEndpoint) {
    throw CD_MODULE_NOT_INIT;
  }

  if (!reqBody || !reqBody.oids || reqBody.oids.length <= 0 || reqBody.oids.every((oid) => !oid)) {
    return new Map();
  }
  // never request oid field
  if (reqBody.fields.includes("oid")) {
    (reqBody.fields as unknown as (keyof S)[]).splice(reqBody.fields.indexOf("oid"), 1);
  }

  // console.log("fetchCDDataSSR - ", reqBody);

  try {

    let url = `${cdAPIEndpoint}/v1/content_json`;
    if (operation !== "") {
      url += `?operation=${operation}`;
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const res = await fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(reqBody),
    });

    const resJson = await res.json();

    checkIcdResponseHandler<S>(resJson);

    const cdMap: Map<string, CDEntity | undefined> = new Map();

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
        mergeCDObject(cdMap.get(oid) as S, resultEntity as CDEntity);
      } else {
        cdMap.set(oid, resultEntity as S);
      }
    }

    return cdMap as Map<string, Pick<S, "oid" | F[number]> | undefined>;

  } catch (e) {

    // captureExceptionBySentry(e, "fetchCDDataSSR");
    // eslint-disable-next-line no-console
    console.error("Fail to fetch CD. ", e);
  }
  return new Map();
};

/**
 * Do calling CD API to fetch data, this is a low level function using for SSR.
 */
export const fetchCDBatchDataSSR = async <
  S extends CDEntity,
  F extends Readonly<(keyof S)[]
  > = Readonly<(keyof S)[]>>(
  requests: CDRequestBody<S, F>[],
  operation = "", // for debug only, recognize the request for which operation

): Promise<Map<string, Pick<S, "oid" | F[number]> | undefined>> => {
  if (typeof window !== "undefined") {
    throw new Error("fetchCDDataSSR should only be called in Server Process");
  }

  if (!cdAPIEndpoint) {
    throw CD_MODULE_NOT_INIT;
  }

  const requestBodies: CDRequestBody<S, F>[] = [];
  for (let i = 0, len = requests.length; i < len; i++) {
    const req = requests[i];
    if (!req || !req.oids || req.oids.length <= 0 || req.oids.every((oid) => !oid)) {
      continue;
    }
    // never request oid field
    if (req.fields.includes("oid")) {
      (req.fields as unknown as (keyof S)[]).splice(req.fields.indexOf("oid"), 1);
    }

    requestBodies.push(req);
  }

  if (!requestBodies.length) {
    return new Map();
  }

  // console.log("fetchCDDataSSR - ", reqBody);

  try {

    let url = `${cdAPIEndpoint}/v1/content_json/batch`;
    if (operation !== "") {
      url += `?operation=${operation}`;
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const res = await fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(requestBodies),
    });

    const resJson = await res.json();

    checkIcdResponseHandler<S>(resJson);

    const cdMap = new Map<string, CDEntity | undefined>();
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
          mergeCDObject(cdMap.get(oid) as CDEntity, sampleObj as S);
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

    return cdMap as Map<string, Pick<S, "oid" | F[number]> | undefined>;

  } catch (e) {

    // captureExceptionBySentry(e, "fetchCDDataSSR");
    // eslint-disable-next-line no-console
    console.error("Fail to fetch CD. ", e);
  }
  return new Map();
};
