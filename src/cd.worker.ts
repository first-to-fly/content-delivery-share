import { getCDState } from "./store/cd.store";
import { AllEntityField, CDRequestBody } from "./types/actions";
import { CDEntity, CDEntityType } from "./types/entity";
import { OID } from "./types/generic";


type getUserTokenFn = () => Promise<string>;
let getUserTokenCallback: getUserTokenFn | undefined;
let cdWorker: Worker;
const showLog = true;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapTaskResolve: Map<string, (value: any | PromiseLike<any>) => void> = new Map();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapTaskReject: Map<string, (reason?: any) => void> = new Map();


async function runWorkerAction<T>(
  workerAction: string,
  payload: Record<string, unknown>,
  transfer?: Transferable[],
): Promise<T | null> {

  if (!cdWorker) {
    return null;
  }

  let result: T | null = null;

  // console.log("runWorkerAction start");
  result = await new Promise<T>((resolve, reject) => {
    const taskID = `${performance.now()}-${Math.random()}`;
    mapTaskResolve.set(taskID, resolve);
    mapTaskReject.set(taskID, reject);
    const message = {
      taskID: taskID,
      workerAction: workerAction,
      payload: payload,
    };
    // console.log("runWorkerAction post", message);
    cdWorker.postMessage(message, transfer || []);
  });
  // console.log("runWorkerAction end");

  return result;
}


export async function initWorker(cdAPIEndpoint: string, getUserTokenCb?: getUserTokenFn) {
  getUserTokenCallback = getUserTokenCb;

  // eslint-disable-next-line no-async-promise-executor
  await new Promise<void>(async (resolve) => {

    // 'import.meta' only allowed when '--module' is 'esnext' - already set in outside projects
    cdWorker = new Worker(new URL("./workers/cd-worker/cd.worker.ts", import.meta.url));

    let currentIDToken = "";
    if (getUserTokenCallback) {
      currentIDToken = await getUserTokenCallback();
    }

    cdWorker.postMessage({
      workerAction: "setup",
      payload: {
        cdAPIEndpoint: cdAPIEndpoint,
        idToken: currentIDToken,
      },
      taskID: "setup",
    });

    cdWorker.onmessage = (e) => {
      const message = e.data;
      switch (message.type) {

        case "ready":
          if (showLog) {
            // eslint-disable-next-line no-console
            console.info("[cdWorker] new worker is ready ", message);
          }
          resolve();
          break;
        case "stdout":
          if (showLog) {
            // eslint-disable-next-line no-console
            console.info(`[cdWorker] ${message.data}`);
          }
          break;

        case "start":
          // console.info("Start worker...");
          break;

        case "updateCDEntities":
          getCDState().updateCDEntities(message.cdMap);
          break;

        case "invalidateCDEntities":
          getCDState().invalidateCDEntities(message.cdMap);
          break;

        case "getIDToken":
          if (getUserTokenCallback) {
            getUserTokenCallback().then((token) => {
              runWorkerAction("setIDToken", { idToken: token || "" });
            });
          } else {
            runWorkerAction("setIDToken", { idToken: "" });
          }
          break;

        case "done": {
          const { taskID } = message;
          const res = mapTaskResolve.get(taskID);
          if (res) {
            res(message.data);
            mapTaskResolve.delete(taskID);
            mapTaskReject.delete(taskID);
          }
          break;
        }
        case "error": {
          const { taskID } = message;
          const rej = mapTaskReject.get(taskID);
          if (rej) {
            rej(message.data);
            mapTaskResolve.delete(taskID);
            mapTaskReject.delete(taskID);
          }
          break;
        }
        default:
          break;

      }
    };


  });
}
export const fetchCDDataBatch = async <S extends CDEntity>(reqBody: CDRequestBody<S>): Promise<void> => {
  if (cdWorker) {
    const idToken = getUserTokenCallback ? await getUserTokenCallback() : "";
    // console.log("fetchCDDataBatch", {
    //   reqBody: reqBody,
    //   idToken: idToken,
    // });
    await runWorkerAction("fetchCDDataBatch", {
      reqBody: reqBody,
      idToken: idToken,
    });
  }
};

export async function queueFetchItems<T>(items: Map<string, T[]>) {
  if (cdWorker) {
    await runWorkerAction("queueFetchItems", {
      items: items,
    });
  }
}

export const fetchCDData = async <S extends CDEntity>(
  reqBody: CDRequestBody<S>,
  operation = "", // for debug only, recognize the request for which operation
): Promise<void> => {
  if (cdWorker) {
    const idToken = getUserTokenCallback ? await getUserTokenCallback() : "";
    await runWorkerAction("fetchCDData", {
      reqBody: reqBody,
      idToken: idToken,
      operation: operation,
    });
  }
};

export const updateCDObjectAsync = (oids: OID[]) => {
  setTimeout(() => { // run at separate thread
    if (cdWorker) {
      const objectForDBUpdating: CDEntity[] = [];
      const state = getCDState();
      for (let index = 0; index < oids.length; index++) {
        const oid = oids[index];
        const object = state.cd.get(oid);
        if (object) {
          objectForDBUpdating.push(object);
        }
      }
      runWorkerAction("updateCDObject", {
        objects: objectForDBUpdating,
      });
    }
  }, 1);
};

export const updateCDObject = async (objects: CDEntity[]) => {
  if (cdWorker) {
    await runWorkerAction("updateCDObject", {
      objects: objects,
    });
  }
};

export const warmupCDEntities = async (oids: string[], fields: AllEntityField[]) => {
  if (cdWorker) {
    await runWorkerAction("warmupCDEntities", {
      oids: oids,
      fields: fields,
    });
  }
};

export const getCDObjectsFromLocalDB = (oids: string[], fields: AllEntityField[]) => {
  if (cdWorker) {
    return runWorkerAction<Map<string, CDEntity>>("getCDObjectsFromLocalDB", {
      oids: oids,
      fields: fields,
    });
  }
  return null;
};

export const getAllOIDsOfEntityTypeFromLocalDB = (entityType: CDEntityType) => {
  if (cdWorker) {
    return runWorkerAction<string[]>("getAllOIDsOfEntityTypeFromLocalDB", {
      entityType: entityType,
    });
  }
  return [];
};
