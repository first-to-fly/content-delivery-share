import type { CDEntity } from "../entity";
import type { BookingPaxPersonalDetails } from "./IndependentTourBookingPax";

// Import shared types
export type { BookingDiscountType, DiscountMode } from "./IndependentTourBookingDiscount";
export type { BookingPaxPersonalDetails, BookingPaxType } from "./IndependentTourBookingPax";
export type { BookingRoomStatus } from "./IndependentTourBookingRoom";

// Define payment and booking statuses as per requirements
export enum BookingPaymentStatus {
  UNPAID = "unpaid",
  PARTIAL_DEPOSIT = "partial_deposit",
  DEPOSIT_PAID = "deposit_paid",
  FULLY_PAID = "fully_paid",
}

export enum BookingStatus {
  IN_PROGRESS = "in_progress",
  UNPAID = "unpaid",
  DEPOSIT_PAID = "deposit_paid",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  VOIDED = "voided",
  TRANSFERRED = "transferred",
}

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
  status: string; // BookingRoomStatus as string
  notes?: string;
  paxes: IndependentTourBookingPaxSnapshot[];
  snapshotCreatedAt: string;
}

export interface IndependentTourBookingPaxSnapshot {
  oid: string;
  type: string; // BookingPaxType as string
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

export interface IndependentTourBookingAppliedDiscountSnapshot {
  oid: string;
  discountType: string; // BookingDiscountType as string
  discountId?: string;
  appliedDiscountCode?: string;
  description: string;
  appliedAmount: number;
  discountMode: string; // DiscountMode as string
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
export interface BaseIndependentTourBookingMetadata {
  /**
   * Primary customer/contact information
   * This is required for all bookings
   */
  customer: BookingPaxPersonalDetails;
}

/**
 * Complete IndependentTourBooking metadata
 * Extends base metadata and allows additional fields
 */
export interface IndependentTourBookingMetadata extends BaseIndependentTourBookingMetadata {
  // Additional fields can be added as needed
  [key: string]: unknown;
}

// --- Main CD Entity (as per requirements lines 340-378) ---

export interface FTFIndependentTourBooking extends CDEntity {
  tenantOID: string;
  independentTourProductOID: string;
  independentTourAccommodationOID: string | null;
  departmentOID: string | null;

  bookingReference: string;
  paymentStatus: string; // BookingPaymentStatus as string
  bookingStatus: string; // BookingStatus as string
  totalAmount: number;
  receivedAmount: number;

  travelStartDate: string;
  travelEndDate: string;

  snapshot: IndependentTourBookingSnapshotData | null;
  metadata: IndependentTourBookingMetadata | null;
  specialInstructions: string[] | null;
  overwriteTax: {
    scheme: string;
    rate: number;
  } | null;

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
