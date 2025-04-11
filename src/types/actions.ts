import { CDEntity } from "./entity";
import { FTFAssembleLocationAirlines } from "./FirstToFly/AssembleLocationAirlines";
import { FTFBadge } from "./FirstToFly/Badge";
import { FTFCostingItem } from "./FirstToFly/CostingItem";
import { FTFCostingTemplate } from "./FirstToFly/CostingTemplate";
import { FTFDepartment } from "./FirstToFly/Department";
import { FTFDesignation } from "./FirstToFly/Designation";
import { FTFDiscount } from "./FirstToFly/Discount";
import { FTFDiscountTemplate } from "./FirstToFly/DiscountTemplate";
import { FTFDocument } from "./FirstToFly/Document";
import { FTFGroupTourCosting } from "./FirstToFly/GroupTourCosting";
import { FTFGroupTourItinerary } from "./FirstToFly/GroupTourItinerary";
import { FTFGroupTourItineraryDay } from "./FirstToFly/GroupTourItineraryDay";
import { FTFGroupTourItineraryEvent } from "./FirstToFly/GroupTourItineraryEvent";
import { FTFGroupTourItineraryMeal } from "./FirstToFly/GroupTourItineraryMeal";
import { FTFGroupTourPNLSimulation } from "./FirstToFly/GroupTourPNLSimulation";
import { FTFGroupTourPricing } from "./FirstToFly/GroupTourPricing";
import { FTFGroupTourProduct } from "./FirstToFly/GroupTourProduct";
import { FTFInsuranceDiscount } from "./FirstToFly/InsuranceDiscount";
import { FTFLocation } from "./FirstToFly/Location";
import { FTFMeal } from "./FirstToFly/Meal";
import { FTFPOI } from "./FirstToFly/POI";
import { FTFPrivacyPolicy } from "./FirstToFly/PrivacyPolicy";
import { FTFProductType } from "./FirstToFly/ProductType";
import { FTFReferenceCodeComponent } from "./FirstToFly/ReferenceCodeComponent";
import { FTFReferenceCodeTemplate } from "./FirstToFly/ReferenceCodeTemplate";
import { FTFReferenceCodeTree } from "./FirstToFly/ReferenceCodeTree";
import { FTFRoomConfiguration } from "./FirstToFly/RoomConfiguration";
import { FTFSector } from "./FirstToFly/Sector";
import { FTFSectorGroup } from "./FirstToFly/SectorGroup";
import { FTFSpecialInstruction } from "./FirstToFly/SpecialInstruction";
import { FTFStationCode } from "./FirstToFly/StationCode";
import { FTFTenant } from "./FirstToFly/Tenant";
import { FTFTerm } from "./FirstToFly/Term";
import { FTFTermCondition } from "./FirstToFly/TermCondition";
import { FTFTermConditionCoverage } from "./FirstToFly/TermConditionCoverage";
import { FTFTermConditionProductTypes } from "./FirstToFly/TermConditionProductTypes";
import { FTFUsefulInfo, FTFUsefulInfoProductType, FTFUsefulInfoRef } from "./FirstToFly/UsefulInfo";
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
  | keyof FTFDiscount
  | keyof FTFDiscountTemplate
  | keyof FTFGroupTourCosting
  | keyof FTFGroupTourItinerary
  | keyof FTFGroupTourItineraryDay
  | keyof FTFGroupTourItineraryMeal
  | keyof FTFGroupTourItineraryEvent
  | keyof FTFGroupTourProduct
  | keyof FTFGroupTourPricing
  | keyof FTFGroupTourPNLSimulation
  | keyof FTFProductType
  | keyof FTFReferenceCodeComponent
  | keyof FTFReferenceCodeTemplate
  | keyof FTFReferenceCodeTree
  | keyof FTFRoomConfiguration
  | keyof FTFSector
  | keyof FTFSectorGroup
  | keyof FTFSpecialInstruction
  | keyof FTFStationCode
  | keyof FTFTenant
  | keyof FTFTerm
  | keyof FTFTermCondition
  | keyof FTFTermConditionCoverage
  | keyof FTFTermConditionProductTypes
  | keyof FTFInsuranceDiscount
  | keyof FTFUserTenant
  | keyof FTFUser
  | keyof FTFAssembleLocationAirlines
  | keyof FTFUsefulInfo
  | keyof FTFUsefulInfoRef
  | keyof FTFUsefulInfoProductType;

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
