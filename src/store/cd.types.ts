import { AllEntityField } from "../types/actions";
import { CDEntity } from "../types/entity";
import { OID } from "../types/generic";


export interface CDReducerState {
  cd: Map<OID, CDEntity | undefined>;
  entityUpdatedTime: Map<OID, Map<number, number>>;
}
export interface SelectCDEntitiesResult <T extends CDEntity, F extends Readonly<(keyof T)[]>> {
  results: Readonly<Record<string, Pick<T, F[number]> | undefined>>,
  updatedTime: Readonly<Map<string, number>>, // for private use only, using for quick compare
  /**
   * For private use only, using for quick compare.
   * If totalUpdatedTime is changed, it means some of the entities is updated
   */
  totalUpdatedTime: number,
  isFulfilled: boolean,
}

export interface SelectCDEntityResult <T extends CDEntity, F extends Readonly<(keyof T)[]>>{
  result: Readonly<Pick<T, F[number]>> | undefined,
  isFulfilled: boolean,
  /**
   * For private use only, using for quick compare.
   * If totalUpdatedTime is changed, it means some of the entities is updated
   */
  totalUpdatedTime: number,
  updatedTime: Map<string, number> | undefined, // for private use only, using for quick compare
}

export type CDStore = CDReducerState & {

  selectCDEntities: <T extends CDEntity, F extends Readonly<(keyof T)[]> = Readonly<(keyof T)[]>>(
    _oids: string[],
    _fields: F,
    autoFetchData?: boolean,
  ) => SelectCDEntitiesResult<T, F>;

  selectCDEntity: <T extends CDEntity, F extends Readonly<(keyof T)[]> = Readonly<(keyof T)[]>>(
    oid: string | undefined,
    fields: F,
    autoFetchData?: boolean,
  ) => SelectCDEntityResult<T, F>;

  invalidateCDEntities: (payload: Map<string, Partial<Record<AllEntityField, unknown>> | undefined>) => void;

  updateCDEntities: (payload: (
    Map<string, Partial<Record<AllEntityField, unknown>> | undefined> |
    Record<string, Partial<Record<AllEntityField, unknown>> | undefined>
  )) => void;

  optimisticUpdateCDEntities: (payload: Record<string, Partial<Record<AllEntityField, unknown>> | undefined>) => void;

  updateCDEntitiesFromCache: (payload: Map<string, Partial<Record<AllEntityField, unknown>> | undefined>) => void;

  hydrateCDData: (
    payload: Map<string, Partial<Record<AllEntityField, unknown>> | undefined>,
    refetchCDData?: boolean,
  ) => void;

  invalidateCDEntitiesByFields: (payload: Map<string, AllEntityField[]>) => void;
  invalidateCDEntityFields: (oids: string[], fields: AllEntityField[]) => void;
};
