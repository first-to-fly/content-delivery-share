import type { CDBaseEntity } from "../entity";
import type { NamedURL } from "../url";


export enum TransactionType {
  RECEIPT = "receipt",
  REFUND = "refund",
  CANCELLATION_FEE = "cancellation_fee",
  JOURNAL = "journal",
}

export enum TransactionStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
  CANCELLED = "cancelled",
}

export enum PaymentMethod {
  CASH = "cash",
  CREDIT_CARD = "credit_card",
  BANK_TRANSFER = "bank_transfer",
  ONLINE_GATEWAY = "online_gateway",
  VOUCHER = "voucher",
  AIR_WALLEX = "air_wallex",
  OTHER = "other",
}

export interface FTFTransaction extends CDBaseEntity {
  tenantOID: string;
  paymentOrderOID: string;

  payerFirstName: string | null;
  payerLastName: string | null;
  payerMobile: string | null;
  payerEmail: string | null;
  amount: number;
  serviceFee: number;
  currency: string | null;
  transactionType: TransactionType;
  transactionDate: string; // ISO Date string
  paymentWayOID: string | null; // Link to PaymentWay entity
  status: TransactionStatus;
  transactionReference: string | null;
  notes: string | null;
  internalRemarks: string | null;
  externalRemarks: string | null;
  metadata: Record<string, unknown> | null;
  files: NamedURL[];

  // Xero sync status (from xero_sync table)
  xeroSyncInfo: {
    xeroId: string | null;
    status: "synced" | "failed" | "pending" | null;
    lastSyncAt: string | null;
    error: string | null;
  } | null;

  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  createdBy: string; // UserOID
  updatedBy: string | null; // UserOID
}
