import type { CDEntity } from "../entity";

// Import shared types
export type { BookingPaxType, BookingPaxPersonalDetails } from "./IndependentTourBookingPax";
export type { BookingRoomStatus } from "./IndependentTourBookingRoom";
export type { BookingDiscountType, DiscountMode } from "./IndependentTourBookingDiscount";

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
  // Minimal product snapshot - extend as needed
  oid: string;
  name: string;
  [key: string]: any;
}

export interface IndependentTourAccommodationSnapshot {
  oid: string;
  name: string;
  costValue: any;
  priceValue: any;
}

export interface IndependentTourBookingRoomSnapshot {
  oid: string;
  roomNumber: string | null;
  status: string;
  paxes: IndependentTourBookingPaxSnapshot[];
}

export interface IndependentTourBookingPaxSnapshot {
  oid: string;
  type: string; // BookingPaxType
  personalDetails?: any; // BookingPaxPersonalDetails
  mealPreference?: string;
}

export interface IndependentTourBookingAddonSnapshot {
  // Minimal addon snapshot - extend as needed
  oid: string;
  name: string;
  serviceDate: string;
  totalPrice: number;
  [key: string]: any;
}

export interface IndependentTourBookingAppliedDiscountSnapshot {
  // Minimal discount snapshot - extend as needed
  oid: string;
  discountName: string;
  appliedAmount: number;
  [key: string]: any;
}

export interface TenantCurrencySnapshot {
  // Minimal currency snapshot - extend as needed
  currency: string;
  [key: string]: any;
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
  // Flexible metadata - can contain any fields
  [key: string]: any;
}

// --- Main CD Entity (as per requirements lines 340-378) ---

export interface FTFIndependentTourBooking extends CDEntity {
  tenantOID: string;
  independentTourProductOID: string;
  independentTourAccommodationOID: string | null;
  departmentOID: string | null;

  bookingReference: string;
  paymentStatus: string; // BookingPaymentStatus
  bookingStatus: string; // BookingStatus
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