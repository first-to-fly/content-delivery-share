import { enableMapSet } from "immer";

import { initWorker } from "./cd.worker";
import { setCDApiEndpoint as setCDApiEndpointForSSR } from "./fetch.ssr";
import { setVerbose as setHookVerbose } from "./hook";
import { initCDStore } from "./store/init";
import { CDEntity } from "./types/entity";


interface InitOptions {
  cdAPIEndpoint: string;
  loadWorker?: boolean;
  getUserToken: () => Promise<string>;
  isDebug?: boolean;
}

enableMapSet();


export const initCDModule = async (
  options: InitOptions,
  initData?: Map<string, CDEntity | undefined>,
) => {
  const { loadWorker = true, isDebug, cdAPIEndpoint } = options;
  setCDApiEndpointForSSR(cdAPIEndpoint);
  initCDStore(initData, isDebug);
  // setCDApiEndpoint(cdAPIEndpoint);
  if (typeof window !== "undefined" && loadWorker) {
    await initWorker(cdAPIEndpoint, options.getUserToken);
  }
  if (isDebug) {
    setHookVerbose(true);
  }
};
