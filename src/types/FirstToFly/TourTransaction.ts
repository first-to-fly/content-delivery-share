import type { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";
import { CalculationBasis, CostingItemCategory, OccupancyType, PackageType } from "./CostingItem";
import { DiscountMode } from "./Discount";
import { MealType } from "./GroupTourItineraryMeal";
import { FTFGroupTourPricingEntry } from "./GroupTourPricing";
import { GeoPoint } from "./POI";
import { RoomType, RuleOccupancy, RulePricingArrangement } from "./RoomConfigurationRule";
import { TourTransactionAddonType } from "./TourTransactionAddon";
import { TourTransactionDiscountMetadata, TourTransactionDiscountType } from "./TourTransactionDiscount";
import { TourTransactionPaxPersonalDetails, TourTransactionPaxType } from "./TourTransactionPax";
import { TourTransactionRoomStatus } from "./TourTransactionRoom";
import { TransportType } from "./TransportGroup";
import { FTFTransportSegmentDetails } from "./TransportSegment";

// --- Snapshot Data Structure Interface ---
export interface TourTransactionRoomConfigurationRuleSnapshot {
  oid: string;
  roomType: RoomType;
  occupancy: RuleOccupancy;
  pricingArrangement: RulePricingArrangement;
  isBackendOnly: boolean;
  isTcp: boolean;
}

export interface TourTransactionBookedRoomSnapshot {
  oid: string;
  roomConfigurationRuleDetail?: TourTransactionRoomConfigurationRuleSnapshot;
  paxes: TourTransactionPaxSnapshot[];
  roomNumber?: string;
  isDbl?: boolean;
  status: TourTransactionRoomStatus;
  notes?: string;
}

export interface TourTransactionPaxSnapshot {
  oid: string;
  type: TourTransactionPaxType;
  isLandTourOnly: boolean;
  mealPreference?: string;
  transportRecordOID?: string;
}

export interface TourTransactionAppliedDiscountSnapshot {
  oid: string;
  discountType: TourTransactionDiscountType;
  appliedDiscountCode?: string;
  description?: string;
  appliedAmount: number;
  discountMode: DiscountMode;
  metadata?: TourTransactionDiscountMetadata;
  snapshotCreatedAt: string;
}

export interface TourTransactionAppliedAddonSnapshot {
  oid: string;
  type: TourTransactionAddonType;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  notes?: string;
  snapshotCreatedAt: string;
}

export interface TourTransactionCostingSnapshot {
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

export interface TourTransactionPricingSnapshot {
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

export interface TourTransactionItineraryDaySnapshot {
  oid: string;
  dayNumber: number;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;

  meals: TourTransactionItineraryMealSnapshot[];
  events: TourTransactionItineraryEventSnapshot[];
}

export interface TourTransactionItineraryMealSnapshot {
  oid: string;
  type: MealType;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;
  provided: boolean;
  onBoard: boolean;
  poi?: TourTransactionPOISnapshot;
}

export interface TourTransactionItineraryEventSnapshot {
  oid: string;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;
  poi?: TourTransactionPOISnapshot;
}

export interface TourTransactionPOISnapshot {
  oid: string;
  name: string;
  address: string;
  type: string;
  country: string;
  position: GeoPoint;
  additionalInfo?: Record<string, unknown>;
}

export interface TourTransactionItinerarySnapshot {
  oid: string;
  name: string;
  groupTourItineraryDays?: TourTransactionItineraryDaySnapshot[];
}

export interface TourTransactionTransportSegmentSnapshot {
  oid: string;
  originLocation: string;
  destinationLocation: string;
  departureDateTime: string;
  arrivalDateTime: string;
  type: TransportType;
  details: FTFTransportSegmentDetails;
}

export interface TourTransactionTenantCurrencySnapshot {
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

export interface TourTransactionSnapshotData {
  productCostingSnapshot?: TourTransactionCostingSnapshot;
  productPricingSnapshot?: TourTransactionPricingSnapshot;
  itinerarySnapshot?: TourTransactionItinerarySnapshot;
  transportSnapshot?: TourTransactionTransportSegmentSnapshot[];
  bookedRoomsSnapshot: TourTransactionBookedRoomSnapshot[];
  appliedDiscountsSnapshot: TourTransactionAppliedDiscountSnapshot[];
  appliedAddonsSnapshot: TourTransactionAppliedAddonSnapshot[];
  tenantCurrencySnapshot: TourTransactionTenantCurrencySnapshot;
  snapshotTimestamp: string;
  snapshotVersion: string;
}

// Enums redefined for content-delivery-share, or should be imported if a shared enum strategy exists
export enum TourTransactionPaymentStatus {
  UNPAID = "unpaid",
  PARTIAL_DEPOSIT = "partial_deposit",
  DEPOSIT_PAID = "deposit_paid",
  FULLY_PAID = "fully_paid",
}

export enum TourTransactionBookingStatus {
  IN_PROGRESS = "in_progress",
  UNPAID = "unpaid",
  DEPOSIT_PAID = "deposit_paid",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  VOIDED = "voided",
  TRANSFERRED = "transferred",
}

/**
 * Base metadata structure for TourTransaction
 * This provides a foundation that can be extended for specific use cases
 */
export interface BaseTourTransactionMetadata {
  /**
   * Primary customer/contact information
   * This is required for all tour transactions
   */
  customer: TourTransactionPaxPersonalDetails;

}

/**
 * Transfer-specific metadata fields
 * Used when a tour transaction is involved in a transfer process
 */
export interface TransferMetadata {
  // === Original Transaction (being transferred FROM) ===
  /** Array of new TourTransaction OIDs that this booking was transferred to */
  transferredTo?: string[];
  /** Array of TourTransaction OIDs currently being transferred (in-progress) */
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

  // === New Transaction (created FROM transfer) ===
  /** Original TourTransaction OID that this booking was transferred from */
  transferredFrom?: string;
  /** Booking reference of the original transaction */
  transferredFromBookingNumber?: string;
  /** Date when the transfer was completed */
  transferDate?: string;
  /** Name/identifier of the person who approved the transfer */
  transferApprovedBy?: string;
  /** Mapping of original passenger OIDs to new passenger OIDs */
  passengerMapping?: {
    [originalPaxOID: string]: string; // Maps to new pax OID
  };

  // NOTE: Payment transfer data is stored in TourTransactionTransfer entities
  // and can be queried by tourTransactionOID - no need to duplicate references here
}

/**
 * Complete TourTransaction metadata structure
 * Combines base metadata with optional transfer metadata
 */
export interface TourTransactionMetadata extends BaseTourTransactionMetadata, Partial<TransferMetadata> {
  // This interface combines both base and transfer metadata
  // Transfer fields are optional since not all transactions involve transfers
}


export interface FTFTourTransaction extends CDEntity {

  tenantOID: string;

  tourDepartureOID: string;
  groupTourPricingOID: string;
  groupTourProductOID: string;
  itineraryOID: string;
  sectorOIDs: string[];

  bookingReference: string;
  paymentStatus: TourTransactionPaymentStatus;
  bookingStatus: TourTransactionBookingStatus;
  totalAmount: number;
  receivedAmount: number;
  snapshot: TourTransactionSnapshotData | null;
  metadata: TourTransactionMetadata | null;
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
