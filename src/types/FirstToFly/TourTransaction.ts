import type { CDEntity } from "../entity"; // Assuming CDEntityType is exported from here

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
}

export interface FTFTourTransaction extends CDEntity {

  tenantOID: string;

  tourDepartureOID: string;
  bookingReference: string;
  paymentStatus: TourTransactionPaymentStatus;
  bookingStatus: TourTransactionBookingStatus;
  totalAmount: number;
  receivedAmount: number;
  snapshot: Record<string, unknown>;
  metadata: Record<string, unknown> | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
