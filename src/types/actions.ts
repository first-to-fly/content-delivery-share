import { CDEntity } from "./entity";
import { FTFDepartment } from "./FirstToFly/Department";
import { FTFLocation } from "./FirstToFly/Location";
import { FTFUser } from "./FirstToFly/User";
import { OID } from "./generic";


export type AllEntityField =
  | keyof CDEntity
  | keyof FTFLocation
  | keyof FTFDepartment
  | keyof FTFUser;


export interface RequestIncludeOptions {
  includeKey?: string;
  fields: Readonly<AllEntityField[]>;
  includes?: Partial<Record<AllEntityField, RequestIncludeOptions>>;
}

export interface CDRequestBody<T extends CDEntity, F extends Readonly<(keyof T)[]> = Readonly<(keyof T)[]>> {
  oids: OID[];
  fields: F;
  includes?: Partial<Record<keyof T, RequestIncludeOptions>>;
}

export interface IcdResponse<S extends CDEntity> {
  code: number;
  data: Record<OID, S>;
}

export interface CheckResponseHandlerOptions {
  message?: string;
  callback?: (res: Response) => void;
}
