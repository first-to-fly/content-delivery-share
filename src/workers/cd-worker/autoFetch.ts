/* eslint-disable no-restricted-syntax */
import { CDRequestBody } from "../../types/actions";
import { CDEntity } from "../../types/entity";
import { OID } from "../../types/generic";
import { checkIsOID } from "../../utils";
import { fetchCDBatchData, setListenOnFetchDone } from "./cd.fetch";
import { getCDObjectsFromLocalDB } from "./cd.indexedDB";


let entityFetchingQueue: Map<OID, Set<string>> = new Map();
let isFetching = false;
// const isBrowser = typeof window !== "undefined";

let lastQueueTime = 0;

const MAX_IDLE_QUEUE_TIME = 100;

// ---------------------------------------------------------------------------

export function queueFetchItems<T>(items: Map<string, T[]>) {
  if (items.size === 0) {
    return;
  }

  for (const [oid, fields] of items) {
    if (!checkIsOID(oid)) {
      continue;
    }
    const fieldSet = entityFetchingQueue.get(oid);
    if (!fieldSet) {
      entityFetchingQueue.set(oid, new Set(fields as unknown as string[]));
    } else {
      for (const field of fields) {
        fieldSet.add(field as unknown as string);
      }
    }
  }

  lastQueueTime = Date.now();
}

// ---------------------------------------------------------------------------

const fetchEntityContents = async () => {
  if (isFetching ||
    Date.now() - lastQueueTime < MAX_IDLE_QUEUE_TIME ||
    entityFetchingQueue.size === 0) {
    return;
  }

  isFetching = true;
  let fetchDone = false;
  try {
    const queueItems = entityFetchingQueue;
    entityFetchingQueue = new Map();

    const queueOIDByFields = new Map<string, string[]>();

    for (const [oid, fieldSet] of queueItems) {
      if (fieldSet.size === 0) {
        continue;
      }
      const missedFields = Array.from(fieldSet);

      const key = missedFields.sort().join("|");
      let queue = queueOIDByFields.get(key);
      if (!queue) {
        queue = [];
        queueOIDByFields.set(key, queue);
      }
      queue.push(oid);
    }

    if (queueOIDByFields.size === 0) {
      return;
    }

    const requestBodies: CDRequestBody<CDEntity>[] = [];

    for (const [queueKey, oids] of queueOIDByFields) {
      const fields = queueKey.split("|") as unknown as (keyof CDEntity)[];
      requestBodies.push({
        oids: oids,
        fields: fields,
      });
      // eslint-disable-next-line no-loop-func
      getCDObjectsFromLocalDB(oids, fields).then((cachedData) => {
        if (!fetchDone && cachedData) {
          postMessage({
            type: "updateCDEntitiesFromCache",
            cdMap: cachedData,
          });
        }
      });
    }
    await fetchCDBatchData(requestBodies, "", "autoFetchCD");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  } finally {
    isFetching = false;
    fetchDone = true;
  }

};


setInterval(fetchEntityContents, 100);
setListenOnFetchDone((fetchedData) => {
  if (fetchedData) {
    for (const [oid, entity] of fetchedData) {
      const queue = entityFetchingQueue.get(oid);
      if (queue) {
        for (const field of Object.keys(entity)) {
          queue.delete(field);
        }
      }
    }
  }
});
