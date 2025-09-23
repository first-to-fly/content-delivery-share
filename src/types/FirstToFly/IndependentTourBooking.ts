import type { CDEntity } from "../entity";
import type { BookingDiscountType, BookingPaxPersonalDetails, BookingPaxType, BookingPaymentStatus, BookingRoomStatus, BookingStatus } from "../enums/bookingTypes";
import type { BaseBookingCustomerMetadata, ITBTransferMetadata } from "./BookingMetadata";
import type { DiscountMode } from "./Discount";


// --- Snapshot Data Structure Interface (as per requirements lines 392-423) ---

export interface IndependentTourProductSnapshot {
  oid: string;
  name: string;
  code?: string;
  description?: string;
  duration?: number;
  startLocation?: string;
  endLocation?: string;
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  additionalInfo?: Record<string, unknown>;
}

export interface IndependentTourAccommodationSnapshot {
  oid: string;
  name: string;
  type?: string;
  location?: string;
  checkInDate?: string;
  checkOutDate?: string;
  nights?: number;
  roomType?: string;
  mealPlan?: string;
  costValue: number | { amount: number; currency: string };
  priceValue: number | { amount: number; currency: string };
  additionalInfo?: Record<string, unknown>;
}

export interface IndependentTourBookingRoomSnapshot {
  oid: string;
  roomNumber: string | null;
  status: BookingRoomStatus;
  notes?: string;
  paxes: IndependentTourBookingPaxSnapshot[];
  snapshotCreatedAt: string;
}

export interface IndependentTourBookingPaxSnapshot {
  oid: string;
  type: BookingPaxType;
  personalDetails?: BookingPaxPersonalDetails;
  mealPreference?: string;
  documentIds?: string[];
  snapshotCreatedAt: string;
}

export interface IndependentTourBookingAddonSnapshot {
  oid: string;
  type: string; // 'optional_service' | 'manual'
  name: string;
  serviceDate: string;
  unitPrice: number;
  tax?: number;
  quantity: number;
  totalPrice: number;
  supplierOID?: string;
  notes?: string;
  snapshotCreatedAt: string;
}

export interface IndependentTourMiscellaneousSnapshot {
  oid: string;
  name: string;
  priceValue: { amount: number; currency?: string; tax?: number };
  snapshotCreatedAt: string;
}

export interface IndependentTourBookingAppliedDiscountSnapshot {
  oid: string;
  discountType: BookingDiscountType;
  discountId?: string;
  appliedDiscountCode?: string;
  description: string;
  appliedAmount: number;
  discountMode: DiscountMode;
  metadata?: Record<string, unknown>;
  snapshotCreatedAt: string;
}

export interface IndependentTourBookingTenantCurrencySnapshot {
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

export interface IndependentTourBookingSnapshotData {
  productSnapshot?: IndependentTourProductSnapshot;
  selectedAccommodationSnapshot?: IndependentTourAccommodationSnapshot;
  roomsSnapshot: IndependentTourBookingRoomSnapshot[];
  /** Product-level miscellaneous items included in the booking at snapshot time */
  miscellaneousSnapshot?: IndependentTourMiscellaneousSnapshot[];
  addonsSnapshot: IndependentTourBookingAddonSnapshot[];
  appliedDiscountsSnapshot: IndependentTourBookingAppliedDiscountSnapshot[];
  paxSnapshot: IndependentTourBookingPaxSnapshot[];
  tenantCurrencySnapshot: IndependentTourBookingTenantCurrencySnapshot;
  snapshotTimestamp: string;
  snapshotVersion: string;
}

/**
 * Base metadata for IndependentTourBooking
 * Contains primary customer/contact information
 */
/**
 * Base metadata for Independent Tour Booking
 * Delegates customer/contact fields to BaseBookingCustomerMetadata
 */
export interface BaseIndependentTourBookingMetadata extends BaseBookingCustomerMetadata {}

/**
 * Complete IndependentTourBooking metadata
 * Extends base metadata and allows additional fields
 */
/**
 * Complete Independent Tour Booking metadata
 * Combines base customer info with ITB-specific transfer metadata fields
 */
export interface IndependentTourBookingMetadata
  extends BaseIndependentTourBookingMetadata,
  Partial<ITBTransferMetadata> {}

// --- Main CD Entity (as per requirements lines 340-378) ---

export interface FTFIndependentTourBooking extends CDEntity {
  tenantOID: string;
  independentTourProductOID: string;
  independentTourAccommodationOID: string | null;
  departmentOID: string | null;
  stationCodeOID: string | null;
  tcpBookingOID: string | null;

  bookingReference: string;
  paymentStatus: BookingPaymentStatus;
  bookingStatus: BookingStatus;
  totalAmount: number;
  receivedAmount: number;
  fullPaymentDueDate: string | null;

  travelStartDate: string | null;
  travelEndDate: string | null;
  platform: string;

  snapshot: IndependentTourBookingSnapshotData | null;
  metadata: IndependentTourBookingMetadata | null;
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

  transactionOIDs: string[] | null;
  paymentOrderOID: string | null;

  liveRoomCount: number;
  livePaxCount: number;
  liveAddonCount: number;

  latestApprovalRequestOID: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

  ownerOIDs: string[];
}
