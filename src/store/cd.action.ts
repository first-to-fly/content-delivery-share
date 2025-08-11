import cloneDeep from "lodash.clonedeep";
import { StoreApi } from "zustand";

import { queueFetchItems, updateCDObject, updateCDObjectAsync } from "../cd.worker";
import { AllEntityField } from "../types/actions";
import { CDEntity } from "../types/entity";
import { OID } from "../types/generic";
import { mergeCDObject } from "../utils";
import { CDReducerState } from "./cd.types";

// trick to reduce memory footprint
export const cacheUpdatedStringToNumber = new Map<string, number>();
const updateEntityUpdatedTime = (entityUpdatedTime: CDReducerState["entityUpdatedTime"], entityOID: string, fields: string[]) => {
  let updatedTimeMap = entityUpdatedTime.get(entityOID);
  if (!updatedTimeMap) {
    updatedTimeMap = new Map();
    entityUpdatedTime.set(entityOID, updatedTimeMap);
  }
  if (!cacheUpdatedStringToNumber.has(entityOID)) {
    cacheUpdatedStringToNumber.set(entityOID, cacheUpdatedStringToNumber.size + 1);
  }
  const ts = performance.now();
  for (const field of fields) {
    if (field === "oid") { // value of oid is forever not updated
      continue;
    }
    let fieldNum = cacheUpdatedStringToNumber.get(field);
    if (!fieldNum) {
      fieldNum = cacheUpdatedStringToNumber.size + 1;
      cacheUpdatedStringToNumber.set(field, fieldNum);
    }

    updatedTimeMap.set(fieldNum, ts);
  }
};

export const createCDActions = (set: StoreApi<CDReducerState>["setState"]) => {

  const updateCDEntitiesToState = (
    payload: (
      Map<string, Partial<Record<AllEntityField, unknown>> | undefined> |
      Record<string, Partial<Record<AllEntityField, unknown>> | undefined>
    ),
    opt: {
      updateToLocalDB?: boolean,
      invalidate?: boolean,
      fromLocalDB?: boolean,
    },
  ) => {
    // console.log("updateCDEntitiesToState");
    // const t0 = performance.now();
    set((state) => {
      const {
        updateToLocalDB = false,
        invalidate = false,
        fromLocalDB = false,
      } = opt;
      const { cd, entityUpdatedTime } = state;
      const objectForDBUpdating: OID[] = [];
      const _payload = (typeof payload.entries === "function" ? payload : new Map(Object.entries(payload))) as Map<string, CDEntity | undefined>;

      for (const [oid, entity] of _payload) {
        const hasEntity = cd.has(oid);
        if (!hasEntity) {
          if (entity && !entity.oid) {
            entity.oid = oid;
          }
          cd.set(oid, entity);
          updateEntityUpdatedTime(entityUpdatedTime, oid, Object.keys(entity || {}));
        } else if (invalidate) {
          cd.set(oid, entity);
          updateEntityUpdatedTime(entityUpdatedTime, oid, Object.keys(entity || {}));
        } else if (hasEntity) {
          if (fromLocalDB) {
            const [
              newEntity,
              updatedFields,
            ] = mergeCDObject({ ...entity } as CDEntity, cd.get(oid) as CDEntity);
            if (updatedFields.length > 0) {
              cd.set(oid, newEntity);
              updateEntityUpdatedTime(entityUpdatedTime, oid, updatedFields);
            }
          } else {
            const [, updatedFields] = mergeCDObject(cd.get(oid) as CDEntity, entity as CDEntity);
            if (updatedFields.length > 0) {
              updateEntityUpdatedTime(entityUpdatedTime, oid, updatedFields);
            }
          }
        }

        if (updateToLocalDB) objectForDBUpdating.push(oid);
      }
      if (updateToLocalDB && objectForDBUpdating.length > 0) updateCDObjectAsync(objectForDBUpdating);
      return state;
    });
    // console.log("updateCDEntitiesToState done ", performance.now() - t0, "ms");
  };

  return {

    invalidateCDEntitiesByFields: (payload: Map<string, AllEntityField[]>) => {
      set((state) => {
        const { cd } = state;
        const objectForDBUpdating: CDEntity[] = [];
        for (const [oid, fields] of payload) {
          if (!cd.has(oid)) continue;
          const entity = cd.get(oid) as CDEntity;
          if (fields && entity) {
            for (const field of fields) {
              // @ts-expect-error delete field
              delete entity[field];
            }
          }
          objectForDBUpdating.push(entity);
        }
        updateCDObject(cloneDeep(objectForDBUpdating));
        return state;
      });
    },

    invalidateCDEntities: (payload: Map<string, Partial<Record<AllEntityField, unknown>> | undefined>) => {
      updateCDEntitiesToState(payload, {
        updateToLocalDB: true,
        invalidate: true,
      });
    },

    invalidateCDEntityFields: (oids: string[], fields: AllEntityField[]) => {
      if (!oids || oids.length === 0) return;
      if (!fields || fields.length === 0) return;

      set((state) => {
        const { cd, entityUpdatedTime } = state;
        for (const oid of oids) {
          const entity = cd.get(oid) as CDEntity;
          if (!entity) continue;
          if (entity) {
            for (const field of fields) {
              // @ts-expect-error delete field
              delete entity[field];
            }
            updateEntityUpdatedTime(entityUpdatedTime, oid, fields);
          }
        }
        return state;
      });
    },

    updateCDEntities: (payload: (
      Map<string, Partial<Record<AllEntityField, unknown>> | undefined> |
      Record<string, Partial<Record<AllEntityField, unknown>> | undefined>
    )) => {
      updateCDEntitiesToState(payload, { updateToLocalDB: true });
    },

    optimisticUpdateCDEntities: (payload: Record<string, Partial<Record<AllEntityField, unknown>> | undefined>) => {
      updateCDEntitiesToState(payload, { updateToLocalDB: false });
      const queueItems: Map<string, string[]> = new Map();
      for (const [oid, entity] of Object.entries(payload)) {
        if (!entity) continue;
        const fields = Object.keys(entity).filter((field) => field && field !== "oid");
        if (fields.length === 0) continue;
        queueItems.set(oid, fields);
      }
      if (queueItems.size > 0) {
        queueFetchItems(queueItems);
      }
    },

    updateCDEntitiesFromCache: (payload: Map<string, Partial<Record<AllEntityField, unknown>> | undefined>) => {
      updateCDEntitiesToState(payload, {
        updateToLocalDB: false,
        fromLocalDB: true,
      });
    },

    hydrateCDData: (
      dehydrated: Map<string, Partial<Record<AllEntityField, unknown>> | undefined>,
      refetchCDData = false,
    ) => {
      set((state) => {
        const payload = dehydrated;
        const { cd, entityUpdatedTime } = state;
        if (typeof window === "undefined") {
          // because on server, they share a store, so we should clear before using
          cd.clear();
          entityUpdatedTime.clear();
        }
        // console.log("hydrateCDData ", cd.size, payload.size);

        for (const [oid, payloadEntity] of payload) {
          if (!payloadEntity) continue;
          if (!cd.has(oid)) {
            const entity = {
              ...payloadEntity,
              oid: oid,
            };
            cd.set(oid, entity);
            updateEntityUpdatedTime(entityUpdatedTime, oid, Object.keys(entity));
            continue;
          }
          const entity = cd.get(oid) as CDEntity;

          // eslint-disable-next-line guard-for-in
          for (const key in payloadEntity) {
            const updatedFields: string[] = [];
            if (!(key in entity)) {
              // @ts-expect-error please ignore
              entity[key] = payloadEntity[key];
              updatedFields.push(key);
            }
            updateEntityUpdatedTime(entityUpdatedTime, oid, updatedFields);
          }
        }
        return state;
      });

      if (refetchCDData && typeof window !== "undefined") {
        const queueItems: Map<string, string[]> = new Map();
        for (const [oid, entity] of dehydrated) {
          if (!entity) continue;
          const fields = Object.keys(entity).filter((field) => field && field !== "oid");
          if (fields.length === 0) continue;
          queueItems.set(oid, fields);
        }
        if (queueItems.size > 0) {
          queueFetchItems(queueItems);
        }
      }
    },
  };
};
