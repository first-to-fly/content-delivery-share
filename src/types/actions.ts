import { CDEntity } from "./entity";
import { FTFApproval } from "./FirstToFly/Approval";
import { FTFApprovalRequest } from "./FirstToFly/ApprovalRequest";
import { FTFAssembleLocationAirlines } from "./FirstToFly/AssembleLocationAirlines";
import { FTFBadge } from "./FirstToFly/Badge";
import { FTFBill } from "./FirstToFly/Bill";
import { FTFBudget } from "./FirstToFly/Budget";
import { FTFBudgetEntry } from "./FirstToFly/BudgetEntry";
import { FTFCostingItem } from "./FirstToFly/CostingItem";
import { FTFCostingTemplate } from "./FirstToFly/CostingTemplate";
import { FTFDepartment } from "./FirstToFly/Department";
import { FTFDeposit } from "./FirstToFly/Deposit";
import { FTFDesignation } from "./FirstToFly/Designation";
import { FTFDiscount } from "./FirstToFly/Discount";
import { FTFDiscountTemplate } from "./FirstToFly/DiscountTemplate";
import { FTFDocument } from "./FirstToFly/Document";
import { FTFExchangeOrder } from "./FirstToFly/ExchangeOrder";
import { FTFGroupTourBooking } from "./FirstToFly/GroupTourBooking";
import { FTFGroupTourBookingAddon } from "./FirstToFly/GroupTourBookingAddon";
import { FTFGroupTourBookingDiscount } from "./FirstToFly/GroupTourBookingDiscount";
import { FTFGroupTourBookingPax } from "./FirstToFly/GroupTourBookingPax";
import { FTFGroupTourBookingRoom } from "./FirstToFly/GroupTourBookingRoom";
import { FTFGroupTourCosting } from "./FirstToFly/GroupTourCosting";
import { FTFGroupTourCostingEntry } from "./FirstToFly/GroupTourCostingEntry";
import { FTFGroupTourItinerary } from "./FirstToFly/GroupTourItinerary";
import { FTFGroupTourItineraryDay } from "./FirstToFly/GroupTourItineraryDay";
import { FTFGroupTourItineraryEvent } from "./FirstToFly/GroupTourItineraryEvent";
import { FTFGroupTourItineraryMeal } from "./FirstToFly/GroupTourItineraryMeal";
import { FTFGroupTourPNLSimulation } from "./FirstToFly/GroupTourPNLSimulation";
import { FTFGroupTourPricing } from "./FirstToFly/GroupTourPricing";
import { FTFGroupTourProduct } from "./FirstToFly/GroupTourProduct";
import { FTFIndependentTourAccommodation } from "./FirstToFly/IndependentTourAccommodation";
import { FTFIndependentTourMiscellaneous } from "./FirstToFly/IndependentTourMiscellaneous";
import { FTFIndependentTourOptionalService } from "./FirstToFly/IndependentTourOptionalService";
import { FTFIndependentTourProduct } from "./FirstToFly/IndependentTourProduct";
import { FTFInsuranceDiscount } from "./FirstToFly/InsuranceDiscount";
import { FTFLocation } from "./FirstToFly/Location";
import { FTFMatchDoc } from "./FirstToFly/MatchDoc";
import { FTFMeal } from "./FirstToFly/Meal";
import { FTFMedia } from "./FirstToFly/Media";
import { FTFPaymentOrder } from "./FirstToFly/PaymentOrder";
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
import { FTFSupplier } from "./FirstToFly/Supplier";
import { FTFSupplierAddress } from "./FirstToFly/SupplierAddress";
import { FTFSupplierPayment } from "./FirstToFly/SupplierPayment";
import { FTFSupplierPerson } from "./FirstToFly/SupplierPerson";
import { FTFTenant } from "./FirstToFly/Tenant";
import { FTFTerm } from "./FirstToFly/Term";
import { FTFTermCondition } from "./FirstToFly/TermCondition";
import { FTFTourDeparture } from "./FirstToFly/TourDeparture";
import { FTFTransaction } from "./FirstToFly/Transaction";
import { FTFTransportGroup } from "./FirstToFly/TransportGroup";
import { FTFTransportPlan } from "./FirstToFly/TransportPlan";
import { FTFTransportSegment } from "./FirstToFly/TransportSegment";
import { FTFUsefulInfo } from "./FirstToFly/UsefulInfo";
import { FTFUser } from "./FirstToFly/User";
import { FTFUserTenant } from "./FirstToFly/UserTenant";
import { OID } from "./generic";


export type AllEntityField =
  | keyof CDEntity
  | keyof FTFApproval
  | keyof FTFApprovalRequest
  | keyof FTFBadge
  | keyof FTFBill
  | keyof FTFBudget
  | keyof FTFBudgetEntry
  | keyof FTFCostingItem
  | keyof FTFCostingTemplate
  | keyof FTFDepartment
  | keyof FTFDeposit
  | keyof FTFDesignation
  | keyof FTFDocument
  | keyof FTFMeal
  | keyof FTFLocation
  | keyof FTFMatchDoc
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
  | keyof FTFIndependentTourProduct
  | keyof FTFIndependentTourAccommodation
  | keyof FTFIndependentTourMiscellaneous
  | keyof FTFIndependentTourOptionalService
  | keyof FTFTransportGroup
  | keyof FTFTransportSegment
  | keyof FTFTransportPlan
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
  | keyof FTFMedia
  | keyof FTFSupplier
  | keyof FTFSupplierAddress
  | keyof FTFSupplierPayment
  | keyof FTFSupplierPerson

  | keyof FTFTourDeparture
  | keyof FTFGroupTourBooking
  | keyof FTFGroupTourBookingRoom
  | keyof FTFGroupTourBookingPax
  | keyof FTFGroupTourBookingAddon
  | keyof FTFGroupTourBookingDiscount
  | keyof FTFPaymentOrder
  | keyof FTFExchangeOrder
  | keyof FTFTransaction;

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
