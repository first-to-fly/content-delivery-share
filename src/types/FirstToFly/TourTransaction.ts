import type { CDEntityType } from "../entity"; // Assuming CDEntityType is exported from here

// Enums redefined for content-delivery-share, or should be imported if a shared enum strategy exists
export enum TourTransactionPaymentStatusEnum {
  UNPAID = "unpaid",
  PARTIAL_DEPOSIT = "partial_deposit",
  DEPOSIT_PAID = "deposit_paid",
  FULLY_PAID = "fully_paid",
}

export enum TourTransactionBookingStatusEnum {
  IN_PROGRESS = "in_progress",
  UNPAID = "unpaid",
  DEPOSIT_PAID = "deposit_paid",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  VOIDED = "voided",
}

export enum TourTransactionTransportTypeEnum {
  FLIGHT = "flight",
  BUS = "bus",
  CRUISE = "cruise",
  TRAIN = "train",
  FERRY = "ferry",
}

export interface TourTransaction {
  // Fields from EntityZ (firsttofly-travel-share)
  oid: string;
  entityType: CDEntityType;
  tenantOID: string;
  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;

  // Fields specific to TourTransaction
  // bookingId: string; // Removed as oid is the primary CD identifier
  tenantId: string;
  productOID: string;
  tourDepartureOID: string;
  costingOID: string;
  productPricingOID: string;
  bookingReference: string;
  paymentStatus: TourTransactionPaymentStatusEnum;
  bookingStatus: TourTransactionBookingStatusEnum;
  totalAmount: number;
  receivedAmount: number;
  discounts: number;
  addOns: number;
  transportType: TourTransactionTransportTypeEnum | null;
  snapshot: Record<string, unknown>;
  metadata: Record<string, unknown> | null;
}
