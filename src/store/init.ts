import { StoreApi } from "zustand";

import { CDEntity } from "../types/entity";
import { createCDActions } from "./cd.action";
import { createCDSelectors } from "./cd.selector";
import { createCDStore } from "./cd.store";
import { CDStore } from "./cd.types";


export function initCDStore(initData?: Map<string, CDEntity | undefined>, isDebug?: boolean) {
  createCDStore(
    (set: StoreApi<CDStore>["setState"], get: StoreApi<CDStore>["getState"]) => ({
      cd: initData || new Map(),
      entityUpdatedTime: new Map(),
      ...createCDSelectors(set, get),
      ...createCDActions(set),
    }),
    isDebug,
  );
}
