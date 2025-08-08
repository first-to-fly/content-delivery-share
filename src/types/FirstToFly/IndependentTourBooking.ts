import type { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";

// Import from related entities
export type { BookingPaxType, BookingPaxPersonalDetails } from "./IndependentTourBookingPax";
export type { BookingRoomStatus } from "./IndependentTourBookingRoom";
export type { IndependentTourBookingAddonType } from "./IndependentTourBookingAddon";
export type { BookingDiscountType, DiscountMode } from "./IndependentTourBookingDiscount";

// --- Snapshot Data Structure Interface ---

export interface IndependentTourBookingAccommodationSnapshot {
  oid: string;
  name: MultiLangRecord<string>;
  description: MultiLangRecord<string>;
  roomType: string;
  maxOccupancy: number;
  pricePerNight: number;
  currency: string;
  supplierOID?: string;
  supplierName?: string;
  location?: string;
  amenities?: string[];
}

export interface IndependentTourBookingRoomSnapshot {
  oid: string;
  roomName?: string;
  roomType: string;
  roomStatus: string;
  adultsCount: number;
  childrenCount: number;
  infantsCount: number;
  bedPreference?: string;
  specialRequests?: string[];
  roomPrice?: number;
  confirmationNumber?: string;
  paxes: IndependentTourBookingPaxSnapshot[];
}

export interface IndependentTourBookingPaxSnapshot {
  oid: string;
  paxType: string;
  personalDetails: any; // BookingPaxPersonalDetails
  ageAtTravel?: number;
  documentOIDs?: string[];
  insurancePolicyNumber?: string;
  transportRecordOID?: string;
}

export interface IndependentTourBookingAddonSnapshot {
  oid: string;
  addonType: string;
  serviceName: string;
  description?: string;
  serviceDate: string;
  unitPrice: number;
  tax: number;
  quantity: number;
  totalPrice: number;
  supplierOID?: string;
  confirmationNumber?: string;
  paxOIDs?: string[];
}

export interface IndependentTourBookingDiscountSnapshot {
  oid: string;
  discountType: string;
  discountCode?: string;
  discountName: string;
  description?: string;
  discountMode: string;
  discountValue: number;
  appliedAmount: number;
  metadata?: any;
  approvalRequired: boolean;
  approvedBy?: string;
  approvedAt?: string;
}

export interface IndependentTourBookingItinerarySnapshot {
  oid: string;
  name: string;
  days?: IndependentTourBookingItineraryDaySnapshot[];
}

export interface IndependentTourBookingItineraryDaySnapshot {
  oid: string;
  dayNumber: number;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;
  meals: any[];
  events: any[];
}

export interface IndependentTourBookingProductSnapshot {
  oid: string;
  code: string;
  name: MultiLangRecord<string>;
  description?: MultiLangRecord<string>;
  durationDays: number;
  durationNights: number;
  validityStartDate: string;
  validityEndDate?: string;
  highlights?: MultiLangRecord<string>;
  inclusions?: MultiLangRecord<string>;
  exclusions?: MultiLangRecord<string>;
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
  productSnapshot?: IndependentTourBookingProductSnapshot;
  accommodationSnapshot?: IndependentTourBookingAccommodationSnapshot;
  itinerarySnapshot?: IndependentTourBookingItinerarySnapshot;
  bookedRoomsSnapshot: IndependentTourBookingRoomSnapshot[];
  appliedAddonsSnapshot: IndependentTourBookingAddonSnapshot[];
  appliedDiscountsSnapshot: IndependentTourBookingDiscountSnapshot[];
  tenantCurrencySnapshot: IndependentTourBookingTenantCurrencySnapshot;
  snapshotTimestamp: string;
  snapshotVersion: string;
}

// Enums for Independent Tour Booking
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

export interface IndependentTourBookingMetadata {
  source?: string;
  campaignCode?: string;
  agentCode?: string;
  referrerUrl?: string;
  customerNotes?: string;
  internalNotes?: string;
  leadGuestInfo?: {
    name: string;
    email: string;
    phone: string;
    nationality?: string;
  };
}

export interface FTFIndependentTourBooking extends CDEntity {
  
  tenantOID: string;
  
  independentTourProductOID: string;
  departmentOID?: string;
  
  bookingReference: string;
  paymentStatus: BookingPaymentStatus;
  bookingStatus: BookingStatus;
  
  totalAmount?: number;
  receivedAmount?: number;
  
  // Selected accommodation
  accommodationOID?: string;
  
  // Travel dates
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  
  // Customer information
  customerOID?: string;
  leadGuestName?: string;
  leadGuestEmail?: string;
  leadGuestPhone?: string;
  
  // Pricing breakdown
  accommodationCost?: number;
  optionalServicesCost?: number;
  miscellaneousCost?: number;
  discountAmount?: number;
  taxAmount?: number;
  
  metadata?: IndependentTourBookingMetadata;
  specialInstructions?: string[];
  
  // Payment order reference
  paymentOrderOID?: string;
  transactionOIDs?: string[];
  
  // Approval status for special discounts
  approvalRequestOID?: string;
  
  // Snapshot data
  snapshot?: IndependentTourBookingSnapshotData;
  
  // Counts for performance
  liveRoomCount: number;
  livePaxCount: number;
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy?: string;
  
  // Owner information
  ownerOIDs: string[];
}