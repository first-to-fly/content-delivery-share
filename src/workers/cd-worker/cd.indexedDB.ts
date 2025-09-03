import isEqual from "react-fast-compare";

import type { CDEntity } from "../../types/entity";
import { CDEntityType } from "../../types/entity";
import type { OID } from "../../types/generic";
import { getCDTypeFromOID } from "../../utils";


export const MAX_THREAD = 10;

const CD_DB_VERSION = Object.values(CDEntityType).length;

// ===========================================================================
// TYPES
// ===========================================================================
// const isBrowser = typeof window !== "undefined";
// Backward compatible
// const { indexedDB } = self;

let initPromiseResolve: (value: void | PromiseLike<void>) => void;
let initialized = false;
let cdDB: IDBDatabase;

const cdTables = new Set(Object.values(CDEntityType));

const initPromise: Promise<void> = new Promise((resolve) => {
  initPromiseResolve = resolve;
});

// ===========================================================================
// UTILS
// ===========================================================================
async function runConcurrent(getCallback: () => (Promise<unknown>|null)): Promise<void> {
  const promises = new Array<Promise<unknown>>(MAX_THREAD);
  const genPromise = (): Promise<unknown> => {
    const cb = getCallback();
    if (cb) {
      return cb.then(genPromise);
    }
    return Promise.resolve();

  };

  for (let i = 0; i < MAX_THREAD; i++) {
    promises[i] = genPromise();
  }
  await Promise.all(promises);
}


export const updateCDObject = async (objects: CDEntity[]) => {
  await initContentDeliveryDB();
  if (!cdDB) {
    return;
  }
  const tables = new Set<string>();
  for (let i = 0, len = objects.length; i < len; i++) {
    const obj = objects[i];
    const cdEntityType = getCDTypeFromOID(obj.oid);
    if (cdTables.has(cdEntityType)) {
      tables.add(cdEntityType);
    }
  }

  if (!tables.size) {
    return;
  }


  // eslint-disable-next-line no-async-promise-executor
  await new Promise(async (resolve) => {

    const tx = cdDB.transaction(tables, "readwrite");
    tx.oncomplete = resolve;

    const cacheStore = new Map<CDEntityType, IDBObjectStore>();

    const processFn = async (_idx: number) => {

      const obj = objects[_idx];
      if (!obj) return;

      const { oid } = obj;
      if (!oid) return;

      const cdEntityType = getCDTypeFromOID(oid);
      if (!cdTables.has(cdEntityType)) return;

      let store: IDBObjectStore = cacheStore.get(cdEntityType) as IDBObjectStore;
      if (!store) {
        store = tx.objectStore(cdEntityType);
        cacheStore.set(cdEntityType, store);
      }

      const existedObj = await getStoreObject(store, oid);
      if (!isEqual(existedObj, obj)) {
        store.put(Object.assign(existedObj || {}, obj), oid);
      }
    };

    let idx = -1;
    await runConcurrent(() => {
      idx += 1;
      if (idx >= (objects.length || 0)) {
        return null;
      }
      return processFn(idx);
    });

    tx.commit();
  });
};

// ---------------------------------------------------------------------------

export const deleteCDObject = async (oids: OID[]) => {
  await initContentDeliveryDB();
  if (!cdDB) {
    return;
  }
  const tables = new Set<string>();
  for (let i = 0, len = oids.length; i < len; i++) {
    const oid = oids[i];
    tables.add(getCDTypeFromOID(oid));
  }

  await new Promise((resolve) => {
    const tx = cdDB.transaction(tables, "readwrite");
    tx.oncomplete = resolve;
    for (let i = 0, len = oids.length; i < len; i++) {
      const oid = oids[i];
      tx.objectStore(getCDTypeFromOID(oid)).delete(oid);
    }
    tx.commit();
  });
};

const getStoreObject = (store: IDBObjectStore, key: string): Promise<CDEntity> => (
  new Promise<CDEntity>((getResolve) => {
    const getReq = store.get(key);
    getReq.onsuccess = () => getResolve(getReq.result);
  })
);

// ---------------------------------------------------------------------------

export const getCDObjectsFromLocalDB = async <S extends CDEntity>(
  oids: OID[], fields: string[],
): Promise<Map<OID, S> | undefined> => {
  await initContentDeliveryDB();
  if (!cdDB) {
    return undefined;
  }
  const tableEntityTypeMap = new Map<CDEntityType, OID[]>();
  for (let i = 0, len = oids.length; i < len; i++) {
    const oid = oids[i];
    const type = getCDTypeFromOID(oid);
    let table = tableEntityTypeMap.get(type);
    if (!table) {
      if (!cdTables.has(type)) continue;
      table = [];
      tableEntityTypeMap.set(type, table);
    }
    table.push(oid);
  }

  if (!tableEntityTypeMap.size) {
    return undefined;
  }

  const results: Map<OID, S> = new Map();
  // eslint-disable-next-line no-async-promise-executor
  await new Promise(async (resolve) => {
    const tx = cdDB.transaction(tableEntityTypeMap.keys(), "readonly");
    tx.oncomplete = resolve;

    const fieldsOfS = fields as unknown as (keyof S)[];
    const processFn = async (store: IDBObjectStore, oid: string) => {
      const dbObj = await getStoreObject(store, oid);

      if (dbObj) {
        const item: S = {
          oid: oid,
        } as S;

        for (const field of fieldsOfS) {
          if (field in dbObj) item[field] = (dbObj as S)[field];
        }
        results.set(oid, item);
      }
    };


    const tableTypes = Array.from(tableEntityTypeMap.keys());
    let tableIdx = 0;
    let currentTable = tableTypes[tableIdx];
    let currentTableStore = tx.objectStore(currentTable);
    let currentTableOIDs = tableEntityTypeMap.get(currentTable) || [];
    let currentTableIdx = -1;

    await runConcurrent(() => {
      currentTableIdx += 1;
      if (currentTableIdx >= currentTableOIDs.length) {
        tableIdx += 1;
        if (tableIdx >= tableTypes.length) return null;
        currentTable = tableTypes[tableIdx];
        currentTableOIDs = tableEntityTypeMap.get(currentTable) || [];
        currentTableIdx = -1;
        currentTableStore = tx.objectStore(currentTable);
      }
      const currentTableOID = currentTableOIDs[currentTableIdx];
      if (!currentTableOID) return null;
      return processFn(currentTableStore, currentTableOID);
    });

    tx.commit();
  });

  return results;
};

// ---------------------------------------------------------------------------

export const clearContentDeliveryDB = async () => {
  await initContentDeliveryDB();
  if (!cdDB) {
    return;
  }

  const objStores = cdDB.objectStoreNames;
  await new Promise((resolve) => {
    const tx = cdDB.transaction(objStores, "readwrite");
    tx.oncomplete = resolve;
    for (let i = 0, len = objStores.length; i < len; i++) {
      const tableName = objStores.item(i);
      if (!tableName) {
        continue;
      }
      const store = tx.objectStore(tableName);
      store.clear();
    }
    tx.commit();
  });
};


export const getAllOIDsOfEntityTypeFromLocalDB = async (entityType: CDEntityType): Promise<OID[]> => {
  if (!cdTables.has(entityType)) {
    return [];
  }
  let keys: string[] = [];
  // eslint-disable-next-line no-async-promise-executor
  await new Promise(async (resolve) => {
    const tx = cdDB.transaction(entityType, "readonly");
    tx.oncomplete = resolve;
    const store = tx.objectStore(entityType);
    keys = await new Promise<string[]>((resolve1) => {
      const r = store.getAllKeys();
      r.onsuccess = () => resolve1(r.result as string[]);
    });
    tx.commit();
  });
  return keys || [];
};

// ===========================================================================
// INIT
// ===========================================================================


export const initContentDeliveryDB = async () => {
  if (!indexedDB) {
    return Promise.resolve();
  }

  if (initialized) {
    return initPromise;
  }

  initialized = true;
  if (Object.values(CDEntityType).length > CD_DB_VERSION) {
    console.error("Current number of CD types ", Object.values(CDEntityType).length);
    throw new Error("New CD Entity Type detected, please update CD_DB_VERSION");
  }

  await new Promise<void>((resolve, reject) => {
    const openReq = indexedDB.open("cd", CD_DB_VERSION);
    if (!openReq) {
      reject(new Error("Cannot init CD DB"));
      return;
    }

    openReq.onerror = (e) => {

      console.error("Cannot init CD DB ", e);
      reject(e);
    };

    openReq.onsuccess = () => {
      cdDB = openReq.result;
      resolve();
    };
    openReq.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      if (!event || !event.target) {
        return;
      }
      const db = (event.target as IDBOpenDBRequest).result;
      const objStores = db.objectStoreNames;
      Object.values(CDEntityType).forEach((entityType) => {
        if (!objStores.contains(entityType)) {
          db.createObjectStore(entityType);
        }
      });
    };

  });

  initPromiseResolve();
  return Promise.resolve();
};
