import type { CDEntity } from "../entity";
import type { BookingPaxPersonalDetails, BookingPaxType, BookingPaymentStatus } from "../enums/bookingTypes";
import type { BaseBookingCustomerMetadata } from "./BookingMetadata";


export enum CustomizedTourBookingStatus {
  DRAFT = "draft",
  PENDING = "pending",
  CONFIRMED = "confirmed",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}


export interface CustomizedTourBookingPaxSnapshot {
  oid: string;
  type: BookingPaxType;
  personalDetails?: BookingPaxPersonalDetails;
  mealPreference?: string;
  documentIds?: string[];
  isLocked?: boolean;
  snapshotCreatedAt: string;
}

export interface CustomizedTourCostItemSnapshot {
  oid: string;
  name: string;
  category: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  currency: string;
  supplierOID?: string;
  notes?: string;
  snapshotCreatedAt: string;
}

export interface CustomizedTourItineraryItemSnapshot {
  oid: string;
  date: string;
  category: string;
  supplierOID?: string;
  name: string;
  details?: string;
  poiOID?: string;
  snapshotCreatedAt: string;
}

export interface CustomizedTourBookingTenantCurrencySnapshot {
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

export interface CustomizedTourBookingSnapshotData {
  itineraryItemsSnapshot: CustomizedTourItineraryItemSnapshot[];
  costItemsSnapshot: CustomizedTourCostItemSnapshot[];
  paxSnapshot: CustomizedTourBookingPaxSnapshot[];
  tenantCurrencySnapshot: CustomizedTourBookingTenantCurrencySnapshot;
  bookingMetadata?: BaseBookingCustomerMetadata;
  snapshotTimestamp: string;
  snapshotVersion: string;
}

export interface CustomizedTourBookingMetadata extends BaseBookingCustomerMetadata {}


export interface FTFCustomizedTourBooking extends CDEntity {
  tenantOID: string;
  customerOID: string;
  departmentOID: string | null;
  stationCodeOID: string | null;
  saleStaffOID: string | null;
  saleReferrerOID: string | null;
  paymentOrderOID: string | null;
  budgetOID: string | null;

  bookingReference: string;
  status: CustomizedTourBookingStatus;
  paymentStatus: BookingPaymentStatus;
  overwriteDeposit: number | null;
  expectedCancelTime: string | null;
  specialInstructions: string[] | null;
  insuranceDeclaration: string | null;
  remarks: string | null;
  isCustomerConfirmed: boolean;
  customerConfirmedAt: string | null;
  totalAmount: number | null;
  receivedAmount: number | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

  itineraryOIDs: string[] | null;
  costItemOIDs: string[] | null;
  taskOIDs: string[] | null;
  metadata: CustomizedTourBookingMetadata | null;
  snapshot: CustomizedTourBookingSnapshotData | null;
}
