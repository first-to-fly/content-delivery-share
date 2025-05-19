import { CDEntity } from "./entity";
import { FTFAssembleLocationAirlines } from "./FirstToFly/AssembleLocationAirlines";
import { FTFBadge } from "./FirstToFly/Badge";
import { FTFBudget } from "./FirstToFly/Budget";
import { FTFCostingItem } from "./FirstToFly/CostingItem";
import { FTFCostingTemplate } from "./FirstToFly/CostingTemplate";
import { FTFDepartment } from "./FirstToFly/Department";
import { FTFDesignation } from "./FirstToFly/Designation";
import { FTFDiscount } from "./FirstToFly/Discount";
import { FTFDiscountTemplate } from "./FirstToFly/DiscountTemplate";
import { FTFDocument } from "./FirstToFly/Document";
import { FTFGroupTourCosting } from "./FirstToFly/GroupTourCosting";
import { FTFGroupTourCostingEntry } from "./FirstToFly/GroupTourCostingEntry";
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
import { FTFReferenceCode } from "./FirstToFly/ReferenceCode";
import { FTFRoomConfiguration } from "./FirstToFly/RoomConfiguration";
import { FTFRoomConfigurationRule } from "./FirstToFly/RoomConfigurationRule";
import { FTFSector } from "./FirstToFly/Sector";
import { FTFSectorGroup } from "./FirstToFly/SectorGroup";
import { FTFSpecialInstruction } from "./FirstToFly/SpecialInstruction";
import { FTFStationCode } from "./FirstToFly/StationCode";
import { FTFSupplierContract } from "./FirstToFly/SupplierContract";
import { FTFSupplierProfile } from "./FirstToFly/SupplierProfile";
import { FTFTenant } from "./FirstToFly/Tenant";
import { FTFTerm } from "./FirstToFly/Term";
import { FTFTermCondition } from "./FirstToFly/TermCondition";
import { FTFTourDeparture } from "./FirstToFly/TourDeparture";
import { TourTransaction as FTFTourTransaction } from "./FirstToFly/TourTransaction";
import { TourTransactionPax as FTFTourTransactionPax } from "./FirstToFly/TourTransactionPax";
import { TourTransactionRoom as FTFTourTransactionRoom } from "./FirstToFly/TourTransactionRoom";
import { FTFTransportGroup } from "./FirstToFly/TransportGroup";
import { FTFTransportSegment } from "./FirstToFly/TransportSegment";
import { FTFUsefulInfo } from "./FirstToFly/UsefulInfo";
import { FTFUser } from "./FirstToFly/User";
import { FTFUserTenant } from "./FirstToFly/UserTenant";
import { OID } from "./generic";


export type AllEntityField =
  | keyof CDEntity
  | keyof FTFBadge
  | keyof FTFBudget
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
  | keyof FTFGroupTourCostingEntry
  | keyof FTFGroupTourItinerary
  | keyof FTFGroupTourItineraryDay
  | keyof FTFGroupTourItineraryMeal
  | keyof FTFGroupTourItineraryEvent
  | keyof FTFGroupTourProduct
  | keyof FTFGroupTourPricing
  | keyof FTFGroupTourPNLSimulation
  | keyof FTFTransportGroup
  | keyof FTFTransportSegment
  | keyof FTFProductType
  | keyof FTFReferenceCode
  | keyof FTFRoomConfiguration
  | keyof FTFRoomConfigurationRule
  | keyof FTFSector
  | keyof FTFSectorGroup
  | keyof FTFSpecialInstruction
  | keyof FTFStationCode
  | keyof FTFTenant
  | keyof FTFTerm
  | keyof FTFTermCondition
  | keyof FTFInsuranceDiscount
  | keyof FTFUserTenant
  | keyof FTFUser
  | keyof FTFAssembleLocationAirlines
  | keyof FTFUsefulInfo
  | keyof FTFSupplierProfile
  | keyof FTFSupplierContract
  | keyof FTFTourDeparture
  | keyof FTFTourTransaction
  | keyof FTFTourTransactionRoom
  | keyof FTFTourTransactionPax;

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
