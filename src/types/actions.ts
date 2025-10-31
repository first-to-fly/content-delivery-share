import type { CDEntity } from "./entity";
import type { FTFAccountCode } from "./FirstToFly/AccountCode";
import type { FTFApproval } from "./FirstToFly/Approval";
import type { FTFApprovalRequest } from "./FirstToFly/ApprovalRequest";
import type { FTFAssembleLocationAirlines } from "./FirstToFly/AssembleLocationAirlines";
import type { FTFBadge } from "./FirstToFly/Badge";
import type { FTFBill } from "./FirstToFly/Bill";
import type { FTFBudget } from "./FirstToFly/Budget";
import type { FTFBudgetEntry } from "./FirstToFly/BudgetEntry";
import type { FTFCostingItem } from "./FirstToFly/CostingItem";
import type { FTFCostingTemplate } from "./FirstToFly/CostingTemplate";
import type { FTFCustomerBookingLink } from "./FirstToFly/CustomerBookingLink";
import type { FTFDepartment } from "./FirstToFly/Department";
import type { FTFDeposit } from "./FirstToFly/Deposit";
import type { FTFDesignation } from "./FirstToFly/Designation";
import type { FTFDiscount } from "./FirstToFly/Discount";
import type { FTFDiscountTemplate } from "./FirstToFly/DiscountTemplate";
import type { FTFDocument } from "./FirstToFly/Document";
import type { FTFEmailTemplate } from "./FirstToFly/EmailTemplate";
import type { FTFEnquiry } from "./FirstToFly/Enquiry";
import type { FTFExchangeOrder } from "./FirstToFly/ExchangeOrder";
import type { FTFGroupTourBooking } from "./FirstToFly/GroupTourBooking";
import type { FTFGroupTourBookingAddon } from "./FirstToFly/GroupTourBookingAddon";
import type { FTFGroupTourBookingDiscount } from "./FirstToFly/GroupTourBookingDiscount";
import type { FTFGroupTourBookingPax } from "./FirstToFly/GroupTourBookingPax";
import type { FTFGroupTourBookingRoom } from "./FirstToFly/GroupTourBookingRoom";
import type { FTFGroupTourCosting } from "./FirstToFly/GroupTourCosting";
import type { FTFGroupTourCostingEntry } from "./FirstToFly/GroupTourCostingEntry";
import type { FTFGroupTourItinerary } from "./FirstToFly/GroupTourItinerary";
import type { FTFGroupTourItineraryDay } from "./FirstToFly/GroupTourItineraryDay";
import type { FTFGroupTourItineraryEvent } from "./FirstToFly/GroupTourItineraryEvent";
import type { FTFGroupTourItineraryMeal } from "./FirstToFly/GroupTourItineraryMeal";
import type { FTFGroupTourPNLSimulation } from "./FirstToFly/GroupTourPNLSimulation";
import type { FTFGroupTourPricing } from "./FirstToFly/GroupTourPricing";
import type { FTFGroupTourProduct } from "./FirstToFly/GroupTourProduct";
import type { FTFIndependentTourAccommodation } from "./FirstToFly/IndependentTourAccommodation";
import type { FTFIndependentTourMiscellaneous } from "./FirstToFly/IndependentTourMiscellaneous";
import type { FTFIndependentTourOptionalService } from "./FirstToFly/IndependentTourOptionalService";
import type { FTFIndependentTourProduct } from "./FirstToFly/IndependentTourProduct";
import type { FTFInsuranceDiscount } from "./FirstToFly/InsuranceDiscount";
import type { FTFJournal } from "./FirstToFly/Journal";
import type { FTFLocation } from "./FirstToFly/Location";
import type { FTFMatchDoc } from "./FirstToFly/MatchDoc";
import type { FTFMedia } from "./FirstToFly/Media";
import type { FTFPaymentOrder } from "./FirstToFly/PaymentOrder";
import type { FTFPaymentWay } from "./FirstToFly/PaymentWay";
import type { FTFPdfTemplate } from "./FirstToFly/PdfTemplate";
import type { FTFPOI } from "./FirstToFly/POI";
import type { FTFPrivacyPolicy } from "./FirstToFly/PrivacyPolicy";
import type { FTFReferenceCode } from "./FirstToFly/ReferenceCode";
import type { FTFRoomConfiguration } from "./FirstToFly/RoomConfiguration";
import type { FTFRoomConfigurationRule } from "./FirstToFly/RoomConfigurationRule";
import type { FTFSector } from "./FirstToFly/Sector";
import type { FTFSectorGroup } from "./FirstToFly/SectorGroup";
import type { FTFSpecialInstruction } from "./FirstToFly/SpecialInstruction";
import type { FTFStationCode } from "./FirstToFly/StationCode";
import type { FTFSupplier } from "./FirstToFly/Supplier";
import type { FTFSupplierAddress } from "./FirstToFly/SupplierAddress";
import type { FTFSupplierPayment } from "./FirstToFly/SupplierPayment";
import type { FTFSupplierPerson } from "./FirstToFly/SupplierPerson";
import type { FTFTaxType } from "./FirstToFly/TaxType";
import type { FTFTenant } from "./FirstToFly/Tenant";
import type { FTFTerm } from "./FirstToFly/Term";
import type { FTFTermCondition } from "./FirstToFly/TermCondition";
import type { FTFTourDeparture } from "./FirstToFly/TourDeparture";
import type { FTFTransaction } from "./FirstToFly/Transaction";
import type { FTFTransportGroup } from "./FirstToFly/TransportGroup";
import type { FTFTransportPlan } from "./FirstToFly/TransportPlan";
import type { FTFTransportSegment } from "./FirstToFly/TransportSegment";
import type { FTFUsefulInfo } from "./FirstToFly/UsefulInfo";
import type { FTFUser } from "./FirstToFly/User";
import type { FTFUserTenant } from "./FirstToFly/UserTenant";
import type { OID } from "./generic";


export type AllEntityField =
  | keyof CDEntity
  | keyof FTFApproval
  | keyof FTFAccountCode
  | keyof FTFApprovalRequest
  | keyof FTFBadge
  | keyof FTFBill
  | keyof FTFBudget
  | keyof FTFBudgetEntry
  | keyof FTFCostingItem
  | keyof FTFCostingTemplate
  | keyof FTFCustomerBookingLink
  | keyof FTFDepartment
  | keyof FTFDeposit
  | keyof FTFDesignation
  | keyof FTFDocument
  | keyof FTFEmailTemplate
  | keyof FTFJournal
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
  | keyof FTFPaymentWay
  | keyof FTFPdfTemplate
  | keyof FTFTaxType

  | keyof FTFTourDeparture
  | keyof FTFGroupTourBooking
  | keyof FTFGroupTourBookingRoom
  | keyof FTFGroupTourBookingPax
  | keyof FTFGroupTourBookingAddon
  | keyof FTFGroupTourBookingDiscount
  | keyof FTFPaymentOrder
  | keyof FTFEnquiry
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
