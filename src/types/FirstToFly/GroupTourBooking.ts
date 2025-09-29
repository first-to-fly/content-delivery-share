import type { CDEntity } from "../entity";
import type { BookingDiscountType, BookingPaxType, BookingPaymentStatus, BookingRoomStatus, BookingStatus } from "../enums/bookingTypes";
import type { MultiLangRecord } from "../multipleLanguage";
import type { BaseBookingCustomerMetadata, GTBTransferMetadata } from "./BookingMetadata";
import type { CalculationBasis, CostingItemCategory, OccupancyType, PackageType } from "./CostingItem";
import type { DiscountMode } from "./Discount";
import type { GroupTourBookingAddonType } from "./GroupTourBookingAddon";
import type { GroupTourBookingDiscountMetadata } from "./GroupTourBookingDiscount";
import type { MealType } from "./GroupTourItineraryMeal";
import type { FTFGroupTourPricingEntry } from "./GroupTourPricing";
import type { GeoPoint } from "./POI";
import type { RoomOccupancy, RoomType, RulePricingArrangement } from "./RoomConfigurationRule";
import type { TransportType } from "./TransportGroup";
import type { FTFTransportSegmentDetails } from "./TransportSegment";

// --- Snapshot Data Structure Interface ---
export interface GroupTourBookingRoomConfigurationRuleSnapshot {
  oid: string;
  roomType: RoomType;
  occupancy: RoomOccupancy;
  pricingArrangement: RulePricingArrangement;
  isBackendOnly: boolean;
  isTcp: boolean;
}

export interface GroupTourBookingBookedRoomSnapshot {
  oid: string;
  roomConfigurationRuleDetail?: GroupTourBookingRoomConfigurationRuleSnapshot;
  paxes: GroupTourBookingPaxSnapshot[];
  roomNumber?: string;
  isDbl?: boolean;
  status: BookingRoomStatus;
  notes?: string;
}

export interface GroupTourBookingPaxSnapshot {
  oid: string;
  type: BookingPaxType;
  isLandTourOnly: boolean;
  mealPreference?: string;
  transportRecordOID?: string;
  isLocked?: boolean;
}

export interface GroupTourBookingAppliedDiscountSnapshot {
  oid: string;
  discountType: BookingDiscountType;
  appliedDiscountCode?: string;
  description?: string;
  appliedAmount: number;
  discountMode: DiscountMode;
  metadata?: GroupTourBookingDiscountMetadata;
  snapshotCreatedAt: string;
}

export interface GroupTourBookingAppliedAddonSnapshot {
  oid: string;
  type: GroupTourBookingAddonType;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  notes?: string;
  snapshotCreatedAt: string;
}

export interface GroupTourBookingCostingSnapshot {
  oid: string;
  name: string;
  code: string;
  remarks?: string;
  validityStartDate?: string;
  validityEndDate?: string;

  landTourGroupSizeTiers: {
    from: number;
    to: number;
  }[];

  freeOfChargeTiers: {
    pax: number;
    freePax: number;
  }[];

  leadManagerCountTiers: {
    pax: number;
    leadCount: number;
    managerCount: number;
  }[];

  groupTourCostingEntries: {
    oid: string;
    name: string;
    category: CostingItemCategory;
    calculationBasis: CalculationBasis;
    applyToPackageType: PackageType;
    applyToOccupancyType: OccupancyType;
    remarks?: string;
    quantity: number;
    isTieredPrice: boolean;
    currency: string;
    prices: {
      tierIndex?: number;
      amount: number;
      tax: number;
    }[];
  }[];
}

export interface GroupTourBookingPricingSnapshot {
  oid: string;
  name: string;
  code: string;
  remarks?: string;
  targetYieldPercentage: number;
  fullFare: {
    twin: number;
    single: number;
    triple: number;
    quad: number;
    childTwin: number;
    childWithBed: number;
    childNoBed: number;
    infant: number;
  };
  landFare: {
    twin: number;
    single: number;
    triple: number;
    quad: number;
    childTwin: number;
    childWithBed: number;
    childNoBed: number;
    infant: number;
  };
  airportTax: {
    adult: number;
    child: number;
  };
  groupTourPricingEntries: FTFGroupTourPricingEntry[];
}

export interface GroupTourBookingItineraryDaySnapshot {
  oid: string;
  dayNumber: number;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;

  meals: GroupTourBookingItineraryMealSnapshot[];
  events: GroupTourBookingItineraryEventSnapshot[];
}

export interface GroupTourBookingItineraryMealSnapshot {
  oid: string;
  type: MealType;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;
  provided: boolean;
  onBoard: boolean;
  poi?: GroupTourBookingPOISnapshot;
}

export interface GroupTourBookingItineraryEventSnapshot {
  oid: string;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;
  poi?: GroupTourBookingPOISnapshot;
}

export interface GroupTourBookingPOISnapshot {
  oid: string;
  name: string;
  address: string;
  type: string;
  country: string;
  position: GeoPoint;
  additionalInfo?: Record<string, unknown>;
}

export interface GroupTourBookingItinerarySnapshot {
  oid: string;
  name: string;
  groupTourItineraryDays?: GroupTourBookingItineraryDaySnapshot[];
}

export interface GroupTourBookingTransportSegmentSnapshot {
  oid: string;
  originLocation: string;
  destinationLocation: string;
  departureDateTime: string;
  arrivalDateTime: string;
  type: TransportType;
  details: FTFTransportSegmentDetails;
}

export interface GroupTourBookingTenantCurrencySnapshot {
  homeCurrency: string;
  supportedCurrencies: {
    currency: string;
    rate: number;
  }[];
  defaultTaxConfig: {
    scheme: string;
    rate: number;
  } | null;
  overwriteTaxConfig: {
    scheme: string;
    rate: number;
  } | null;
}

export interface GroupTourBookingSnapshotData {
  productCostingSnapshot?: GroupTourBookingCostingSnapshot;
  productPricingSnapshot?: GroupTourBookingPricingSnapshot;
  itinerarySnapshot?: GroupTourBookingItinerarySnapshot;
  transportSnapshot?: GroupTourBookingTransportSegmentSnapshot[];
  bookedRoomsSnapshot: GroupTourBookingBookedRoomSnapshot[];
  appliedDiscountsSnapshot: GroupTourBookingAppliedDiscountSnapshot[];
  appliedAddonsSnapshot: GroupTourBookingAppliedAddonSnapshot[];
  tenantCurrencySnapshot: GroupTourBookingTenantCurrencySnapshot;
  snapshotTimestamp: string;
  snapshotVersion: string;
}

/**
 * Base metadata structure for GroupTourBooking
 * This provides a foundation that can be extended for specific use cases
 */
/**
 * Base metadata structure for Group Tour Booking
 * Delegates customer/contact fields to BaseBookingCustomerMetadata
 */
export interface BaseGroupTourBookingMetadata extends BaseBookingCustomerMetadata {}

/**
 * Complete Group Tour Booking metadata
 * Combines base customer info with GTB-specific transfer metadata fields
 */
export interface GroupTourBookingMetadata
  extends BaseGroupTourBookingMetadata,
  Partial<GTBTransferMetadata> {}


/**
 * @export
 * @interface FTFGroupTourBooking
 * @extends {CDEntity}
 */
export interface FTFGroupTourBooking extends CDEntity {

  tenantOID: string;

  tourDepartureOID: string;
  groupTourPricingOID: string;
  groupTourProductOID: string;
  itineraryOID: string;
  sectorOIDs: string[];
  stationCodeOID: string | null;
  tcpBookingOID: string | null;

  bookingReference: string;
  paymentStatus: BookingPaymentStatus;
  bookingStatus: BookingStatus;
  totalAmount: number;
  receivedAmount: number;
  fullPaymentDueDate: string | null;
  expectedCancelTime: string | null;
  platform: string;
  isCustomerConfirmed: boolean;
  finalConfirmed: boolean;
  snapshot: GroupTourBookingSnapshotData | null;
  metadata: GroupTourBookingMetadata | null;
  specialInstructions: string[] | null;
  overwriteTax: {
    scheme: string;
    rate: number;
  } | null;
  overwriteDeposit: number | null;
  saleStaffOID: string | null;
  saleReferrerOID: string | null;

  // Cancellation/Void remarks
  remarks: string | null;
  insuranceDeclaration: string | null;

  transactionOIDs: string[] | null;
  paymentOrderOID: string | null;

  liveRoomCount: number;
  livePaxCount: number;
  liveAddonCount: number;

  travelStartDate: string | null;
  travelEndDate: string | null;
  customerConfirmedAt: string | null;

  latestApprovalRequestOID: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

  ownerOIDs: string[];
}
