import { queueFetchItems } from "./autoFetch";
import {
  fetchCDData,
  fetchCDDataBatch,
  setCDApiEndpoint,
  setCurrentIDToken,
} from "./cd.fetch";
import {
  getAllOIDsOfEntityTypeFromLocalDB,
  getCDObjectsFromLocalDB,
  initContentDeliveryDB,
  updateCDObject,
} from "./cd.indexedDB";


const printLog = false;

export default class ImageWorker {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionCallback = (payload: any) => Promise<unknown> | unknown;

const callbackMap: Map<string, ActionCallback> = new Map();

const registerCallback = (action: string, callback: ActionCallback) => {
  callbackMap.set(action, callback);
};

function postReadyMessage() {
  postMessage({ type: "ready" });
}

function print(text: string, taskID: string) {
  if (!printLog) {
    return;
  }
  postMessage({
    type: "stdout",
    data: `[${taskID}]: ${text}`,
    taskID: taskID,
  });
}
async function warmupCDEntities(oids: string[], fields: string[]) {
  const cachedData = await getCDObjectsFromLocalDB(oids, fields);
  if (cachedData) {
    postMessage({
      type: "updateCDEntitiesFromCache",
      cdMap: cachedData,
    });
  }
}

function setup(message: { cdAPIEndpoint: string, idToken?: string; }) {
  setCDApiEndpoint(message.cdAPIEndpoint);
  initContentDeliveryDB();
  if (message.idToken) {
    setCurrentIDToken(message.idToken);
  }
  setInterval(() => {
    postMessage({ type: "getIDToken" });
  }, 1000);
  postReadyMessage();
}

(() => {
  registerCallback("setup", setup);
  registerCallback("fetchCDDataBatch", (message) => fetchCDDataBatch(message.reqBody, message.idToken || ""));

  registerCallback("queueFetchItems", (message) => {
    const items = message.items as Map<string, string[]>;
    // print(`queueFetchItems${items.size}`, "queueFetchItems");
    queueFetchItems(items);
  });

  registerCallback("fetchCDData", (message) => fetchCDData(message.reqBody, message.idToken || "", message.operation));

  registerCallback("updateCDObject", (message) => updateCDObject(message.objects));
  registerCallback("setIDToken", (message) => {
    setCurrentIDToken(message.idToken);
  });
  registerCallback("warmupCDEntities", (message) => warmupCDEntities(message.oids, message.fields));
  registerCallback("getAllOIDsOfEntityTypeFromLocalDB", (message) => getAllOIDsOfEntityTypeFromLocalDB(message.entityType));
  registerCallback("getCDObjectsFromLocalDB", (message) => getCDObjectsFromLocalDB(message.oids, message.fields));

  // eslint-disable-next-line no-restricted-globals
  addEventListener("message", async (event) => {
    const message = event.data;

    // var args = message.arguments;
    const { taskID, type } = message;


    if (type === "check-ready") {
      postReadyMessage();
      return;
    }

    try {
      postMessage({
        type: "start",
        taskID: taskID,
        // data: JSON.stringify(args),
      });

      print(`Start ${message.workerAction}`, taskID);

      const time = performance.now();

      let result;
      const callback = callbackMap.get(message.workerAction);
      if (callback) {
        result = callback(message.payload);
        if (result && typeof (result as Promise<unknown>).then === "function") {
          result = await callback(message.payload);
        }
      } else {
        print(`Unknown workerAction ${message.workerAction}`, taskID);
      }

      const totalTime = performance.now() - time;

      print(`Finished processing (took ${totalTime.toFixed(0)}ms)`, taskID);

      postMessage({
        type: "done",
        data: result,
        taskID: taskID,
        time: totalTime,
      });
    } catch (error) {
      // captureExceptionBySentry(error, "decryptImage");

      console.error(error);

      postMessage({
        type: "error",
        data: error,
        taskID: taskID,
      });
    }
  });
  // postReadyMessage();
})();
