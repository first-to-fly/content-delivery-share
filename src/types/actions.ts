import { CDEntity } from "./entity";
import { FTFBadge } from "./FirstToFly/Badge";
import { FTFDepartment } from "./FirstToFly/Department";
import { FTFDesignation } from "./FirstToFly/Designation";
import { FTFDocument } from "./FirstToFly/Document";
import { FTFInsuranceDiscount } from "./FirstToFly/InsuranceDiscount";
import { FTFLocation } from "./FirstToFly/Location";
import { FTFMeal } from "./FirstToFly/Meal";
import { FTFPrivacyPolicy } from "./FirstToFly/PrivacyPolicy";
import { FTFProductType } from "./FirstToFly/ProductType";
import { FTFSector } from "./FirstToFly/Sector";
import { FTFSectorGroup } from "./FirstToFly/SectorGroup";
import { FTFStationCode } from "./FirstToFly/StationCode";
import { FTFTerm } from "./FirstToFly/Term";
import { FTFUser } from "./FirstToFly/User";
import { FTFUserTenant } from "./FirstToFly/UserTenant";
import { OID } from "./generic";


export type AllEntityField =
  | keyof CDEntity
  | keyof FTFBadge
  | keyof FTFDepartment
  | keyof FTFDesignation
  | keyof FTFDocument
  | keyof FTFLocation
  | keyof FTFMeal
  | keyof FTFPrivacyPolicy
  | keyof FTFProductType
  | keyof FTFSector
  | keyof FTFSectorGroup
  | keyof FTFStationCode
  | keyof FTFTerm
  | keyof FTFInsuranceDiscount
  | keyof FTFUserTenant
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
