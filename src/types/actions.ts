import { CDEntity } from "./entity";
import { FTFBadge } from "./FirstToFly/Badge";
import { FTFCostingItem } from "./FirstToFly/CostingItem";
import { FTFCostingTemplate } from "./FirstToFly/CostingTemplate";
import { FTFDepartment } from "./FirstToFly/Department";
import { FTFDesignation } from "./FirstToFly/Designation";
import { FTFDocument } from "./FirstToFly/Document";
import { FTFInsuranceDiscount } from "./FirstToFly/InsuranceDiscount";
import { FTFLocation } from "./FirstToFly/Location";
import { FTFMeal } from "./FirstToFly/Meal";
import { FTFPOI } from "./FirstToFly/POI";
import { FTFPrivacyPolicy } from "./FirstToFly/PrivacyPolicy";
import { FTFProductType } from "./FirstToFly/ProductType";
import { FTFReferenceCodeList } from "./FirstToFly/ReferenceCodeList";
import { FTFReferenceCodeTemplate } from "./FirstToFly/ReferenceCodeTemplate";
import { FTFReferenceCodeTree } from "./FirstToFly/ReferenceCodeTree";
import { FTFSector } from "./FirstToFly/Sector";
import { FTFSectorGroup } from "./FirstToFly/SectorGroup";
import { FTFStationCode } from "./FirstToFly/StationCode";
import { FTFTenant } from "./FirstToFly/Tenant";
import { FTFTerm } from "./FirstToFly/Term";
import { FTFUser } from "./FirstToFly/User";
import { FTFUserTenant } from "./FirstToFly/UserTenant";
import { OID } from "./generic";


export type AllEntityField =
  | keyof CDEntity
  | keyof FTFBadge
  | keyof FTFCostingItem
  | keyof FTFCostingTemplate
  | keyof FTFDepartment
  | keyof FTFDesignation
  | keyof FTFDocument
  | keyof FTFLocation
  | keyof FTFMeal
  | keyof FTFPOI
  | keyof FTFPrivacyPolicy
  | keyof FTFProductType
  | keyof FTFSector
  | keyof FTFSectorGroup
  | keyof FTFStationCode
  | keyof FTFTenant
  | keyof FTFTerm
  | keyof FTFInsuranceDiscount
  | keyof FTFUserTenant
  | keyof FTFUser
  | keyof FTFReferenceCodeTree
  | keyof FTFReferenceCodeList
  | keyof FTFReferenceCodeTemplate;

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
