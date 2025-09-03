import isEqual from "react-fast-compare";
import type { StoreApi } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { UseBoundStoreWithEqualityFn } from "zustand/traditional";
import { createWithEqualityFn } from "zustand/traditional";

import type { CDStore } from "./cd.types";


let cdStore: UseBoundStoreWithEqualityFn<StoreApi<CDStore>>;


export function createCDStore(
  cb: (set: StoreApi<CDStore>["setState"], get: StoreApi<CDStore>["getState"]) => CDStore,
  isDebug?: boolean,
) {
  if (isDebug || process.env.NODE_ENV === "development") {
    cdStore = createWithEqualityFn(devtools(immer(cb)));
  } else {
    cdStore = createWithEqualityFn(immer(cb));
  }
}


export function useCDStoreShallow<U>(
  selector: (state: CDStore) => U,
  equals: (a: U, b: U) => boolean = isEqual,
): U | undefined {
  if (!cdStore) {
    return undefined;
  }
  return cdStore(selector, equals);
}


export function getCDState() {
  return cdStore.getState();
}


export function subscribeCDStateChanges(listener: (state: CDStore, prevState: CDStore) => void) {
  return cdStore.subscribe(listener);
}
