import type { CDBaseEntity } from "../entity"; // Corrected import
import type { NamedURL } from "../url";


export enum TourTransactionTransferType {
  PAYMENT_RECEIVED = "payment_received",
  REFUND_ISSUED = "refund_issued",
  BOOKING_CREDIT = "booking_credit",
  BOOKING_DEBIT = "booking_debit",
}

export enum PaymentMethod {
  CASH = "cash",
  CREDIT_CARD = "credit_card",
  BANK_TRANSFER = "bank_transfer",
  ONLINE_GATEWAY = "online_gateway",
  VOUCHER = "voucher",
  OTHER = "other",
}

export interface FTFTourTransactionTransfer extends CDBaseEntity {

  tenantOID: string;
  tourTransactionOID: string;

  transferType: TourTransactionTransferType;
  amount: number;
  currencyCode: string;
  paymentMethod: PaymentMethod | null;
  transactionReference: string | null;
  transactionDate: string; // ISO Date string
  notes: string | null;
  metadata: Record<string, unknown> | null;
  files?: NamedURL[]; // Added files field

  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  createdBy: string; // UserOID
  updatedBy: string | null; // UserOID
}
