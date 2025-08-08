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
  // Add other fields as needed when implementing product snapshots
  [key: string]: unknown;
}

export interface IndependentTourAccommodationSnapshot {
  oid: string;
  name: string;
  costValue: number | { amount: number; currency: string };
  priceValue: number | { amount: number; currency: string };
}

export interface IndependentTourBookingRoomSnapshot {
  oid: string;
  roomNumber: string | null;
  status: string;
  paxes: IndependentTourBookingPaxSnapshot[];
}

export interface IndependentTourBookingPaxSnapshot {
  oid: string;
  type: string; // BookingPaxType as string
  personalDetails?: BookingPaxPersonalDetails;
  mealPreference?: string;
}

export interface IndependentTourBookingAddonSnapshot {
  oid: string;
  name: string;
  serviceDate: string;
  totalPrice: number;
  // Add other fields as needed when implementing addon snapshots
  [key: string]: unknown;
}

export interface IndependentTourBookingAppliedDiscountSnapshot {
  oid: string;
  discountName: string;
  appliedAmount: number;
  // Add other fields as needed when implementing discount snapshots
  [key: string]: unknown;
}

export interface TenantCurrencySnapshot {
  currency: string;
  // Add other fields as needed when implementing currency snapshots
  [key: string]: unknown;
}

export interface IndependentTourBookingSnapshotData {
  productSnapshot?: IndependentTourProductSnapshot;
  selectedAccommodationSnapshot?: IndependentTourAccommodationSnapshot;
  roomsSnapshot: IndependentTourBookingRoomSnapshot[];
  addonsSnapshot: IndependentTourBookingAddonSnapshot[];
  appliedDiscountsSnapshot: IndependentTourBookingAppliedDiscountSnapshot[];
  paxSnapshot: IndependentTourBookingPaxSnapshot[];
  tenantCurrencySnapshot: TenantCurrencySnapshot;
  snapshotTimestamp: string;
  snapshotVersion: string;
}

export interface IndependentTourBookingMetadata {
  // Flexible metadata - use unknown instead of any for type safety
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
