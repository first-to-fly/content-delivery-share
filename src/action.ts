import { fetchCDData, fetchCDDataBatch } from "./cd.worker";
import { getCDState } from "./store/cd.store";
import type { CDEntity } from "./types/entity";


export const silentRefetchCDEntityData = async (oids: string[]) => {
  if (oids.length <= 0) {
    return;
  }

  const state = getCDState().cd;
  const fields: Set<string> = new Set();

  for (let i = 0, len = oids.length; i < len; i++) {
    const oid = oids[i];
    const entity = state.get(oid);
    if (entity) {
      Object.keys(entity).forEach((field) => {
        if (!fields.has(field)) {
          fields.add(field);
        }
      });
    }
  }

  if (fields.size <= 0) {
    return;
  }

  await fetchCDData({
    oids: oids,
    fields: [...fields.values()] as (keyof CDEntity)[],
  });
};


export const fetchAndSelectCDEntities = async <
  T extends CDEntity,
  F extends Readonly<(keyof T)[]
  > = Readonly<(keyof T)[]>>(
  oids: string[],
  fields: F,
  forceRefetch = false,
) => {
  if (forceRefetch) {
    await fetchCDDataBatch<T>({
      oids: oids,
      fields: [...fields],
    });
  }

  let cdResults = getCDState().selectCDEntities<T, F>(oids, fields, false);
  if (!cdResults.isFulfilled) {
    await fetchCDDataBatch<T>({
      oids: oids,
      fields: [...fields],
    });
    cdResults = getCDState().selectCDEntities<T, F>(oids, fields);
  }

  return cdResults.results;
};


export const fetchAndSelectCDEntity = async <
  T extends CDEntity,
  F extends Readonly<(keyof T)[]
  > = Readonly<(keyof T)[]>>(
  oid: string,
  fields: F,
  forceRefetch = false,
) => {
  if (forceRefetch) {
    await fetchCDDataBatch<T>({
      oids: [oid],
      fields: [...fields],
    });
  }

  let cdResult = getCDState().selectCDEntity<T, F>(oid, fields, false);
  if (!cdResult.isFulfilled) {
    await fetchCDDataBatch<T>({
      oids: [oid],
      fields: [...fields],
    });
    cdResult = getCDState().selectCDEntity<T, F>(oid, fields);
  }

  return cdResult.result;
};
