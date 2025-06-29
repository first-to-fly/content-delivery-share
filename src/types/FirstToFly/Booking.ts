import type { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";
import { CalculationBasis, CostingItemCategory, OccupancyType, PackageType } from "./CostingItem";
import { DiscountMode } from "./Discount";
import { MealType } from "./GroupTourItineraryMeal";
import { FTFGroupTourPricingEntry } from "./GroupTourPricing";
import { GeoPoint } from "./POI";
import { RoomType, RuleOccupancy, RulePricingArrangement } from "./RoomConfigurationRule";
import { BookingAddonType } from "./BookingAddon";
import { BookingDiscountMetadata, BookingDiscountType } from "./BookingDiscount";
import { BookingPaxPersonalDetails, BookingPaxType } from "./BookingPax";
import { BookingRoomStatus } from "./BookingRoom";
import { TransportType } from "./TransportGroup";
import { FTFTransportSegmentDetails } from "./TransportSegment";

// --- Snapshot Data Structure Interface ---
export interface BookingRoomConfigurationRuleSnapshot {
  oid: string;
  roomType: RoomType;
  occupancy: RuleOccupancy;
  pricingArrangement: RulePricingArrangement;
  isBackendOnly: boolean;
  isTcp: boolean;
}

export interface BookingBookedRoomSnapshot {
  oid: string;
  roomConfigurationRuleDetail?: BookingRoomConfigurationRuleSnapshot;
  paxes: BookingPaxSnapshot[];
  roomNumber?: string;
  isDbl?: boolean;
  status: BookingRoomStatus;
  notes?: string;
}

export interface BookingPaxSnapshot {
  oid: string;
  type: BookingPaxType;
  isLandTourOnly: boolean;
  mealPreference?: string;
  transportRecordOID?: string;
}

export interface BookingAppliedDiscountSnapshot {
  oid: string;
  discountType: BookingDiscountType;
  appliedDiscountCode?: string;
  description?: string;
  appliedAmount: number;
  discountMode: DiscountMode;
  metadata?: BookingDiscountMetadata;
  snapshotCreatedAt: string;
}

export interface BookingAppliedAddonSnapshot {
  oid: string;
  type: BookingAddonType;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  notes?: string;
  snapshotCreatedAt: string;
}

export interface BookingCostingSnapshot {
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

export interface BookingPricingSnapshot {
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

export interface BookingItineraryDaySnapshot {
  oid: string;
  dayNumber: number;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;

  meals: BookingItineraryMealSnapshot[];
  events: BookingItineraryEventSnapshot[];
}

export interface BookingItineraryMealSnapshot {
  oid: string;
  type: MealType;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;
  provided: boolean;
  onBoard: boolean;
  poi?: BookingPOISnapshot;
}

export interface BookingItineraryEventSnapshot {
  oid: string;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;
  poi?: BookingPOISnapshot;
}

export interface BookingPOISnapshot {
  oid: string;
  name: string;
  address: string;
  type: string;
  country: string;
  position: GeoPoint;
  additionalInfo?: Record<string, unknown>;
}

export interface BookingItinerarySnapshot {
  oid: string;
  name: string;
  groupTourItineraryDays?: BookingItineraryDaySnapshot[];
}

export interface BookingTransportSegmentSnapshot {
  oid: string;
  originLocation: string;
  destinationLocation: string;
  departureDateTime: string;
  arrivalDateTime: string;
  type: TransportType;
  details: FTFTransportSegmentDetails;
}

export interface BookingTenantCurrencySnapshot {
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

export interface BookingSnapshotData {
  productCostingSnapshot?: BookingCostingSnapshot;
  productPricingSnapshot?: BookingPricingSnapshot;
  itinerarySnapshot?: BookingItinerarySnapshot;
  transportSnapshot?: BookingTransportSegmentSnapshot[];
  bookedRoomsSnapshot: BookingBookedRoomSnapshot[];
  appliedDiscountsSnapshot: BookingAppliedDiscountSnapshot[];
  appliedAddonsSnapshot: BookingAppliedAddonSnapshot[];
  tenantCurrencySnapshot: BookingTenantCurrencySnapshot;
  snapshotTimestamp: string;
  snapshotVersion: string;
}

// Enums redefined for content-delivery-share, or should be imported if a shared enum strategy exists
export enum BookingPaymentStatus {
  UNPAID = "unpaid",
  PARTIAL_DEPOSIT = "partial_deposit",
  DEPOSIT_PAID = "deposit_paid",
  FULLY_PAID = "fully_paid",
}

export enum BookingBookingStatus {
  IN_PROGRESS = "in_progress",
  UNPAID = "unpaid",
  DEPOSIT_PAID = "deposit_paid",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  VOIDED = "voided",
  TRANSFERRED = "transferred",
}

/**
 * Base metadata structure for Booking
 * This provides a foundation that can be extended for specific use cases
 */
export interface BaseBookingMetadata {
  /**
   * Primary customer/contact information
   * This is required for all tour transactions
   */
  customer: BookingPaxPersonalDetails;

}

/**
 * Transfer-specific metadata fields
 * Used when a booking is involved in a transfer process
 */
export interface TransferMetadata {
  // === Original Booking (being transferred FROM) ===
  /** Array of new Booking OIDs that this booking was transferred to */
  transferredTo?: string[];
  /** Array of Booking OIDs currently being transferred (in-progress) */
  transferringOIDs?: string[];
  /** Date when the transfer process started */
  transferStartDate?: string;
  /** User OID who initiated the transfer */
  transferredBy?: string;
  /** Passengers being transferred with their target destinations */
  transferPassengers?: Array<{
    oid?: string;
    name: string;
    targetTourDepartureOID: string;
  }>;

  // === New Booking (created FROM transfer) ===
  /** Original Booking OID that this booking was transferred from */
  transferredFrom?: string;
  /** Booking reference of the original booking */
  transferredFromBookingNumber?: string;
  /** Date when the transfer was completed */
  transferDate?: string;
  /** Name/identifier of the person who approved the transfer */
  transferApprovedBy?: string;
  /** Mapping of original passenger OIDs to new passenger OIDs */
  passengerMapping?: {
    [originalPaxOID: string]: string; // Maps to new pax OID
  };

  // NOTE: Payment transfer data is stored in BookingTransfer entities
  // and can be queried by bookingOID - no need to duplicate references here
}

/**
 * Complete Booking metadata structure
 * Combines base metadata with optional transfer metadata
 */
export interface BookingMetadata extends BaseBookingMetadata, Partial<TransferMetadata> {
  // This interface combines both base and transfer metadata
  // Transfer fields are optional since not all bookings involve transfers
}


export interface FTFBooking extends CDEntity {

  tenantOID: string;

  tourDepartureOID: string;
  groupTourPricingOID: string;
  groupTourProductOID: string;
  itineraryOID: string;
  sectorOIDs: string[];

  bookingReference: string;
  paymentStatus: BookingPaymentStatus;
  bookingStatus: BookingBookingStatus;
  totalAmount: number;
  receivedAmount: number;
  snapshot: BookingSnapshotData | null;
  metadata: BookingMetadata | null;
  specialInstructions: string[] | null;
  overwriteTax: {
    scheme: string;
    rate: number;
  } | null;

  liveRoomCount: number;
  livePaxCount: number;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
