import type { CDEntity } from "../entity";
import type { NamedURL } from "../url";

/**
 * Bill status enum
 */
export enum BillStatus {
  DRAFT = "draft",
  SUBMITTED = "submitted",
  APPROVED = "approved",
  REJECTED = "rejected",
  VOIDED = "voided",
}

/**
 * Bill payment status enum
 */
export enum BillPaymentStatus {
  UNPAID = "unpaid",
  PARTIALLY_PAID = "partially-paid",
  PAID = "paid",
}

export enum BillCategory {
  BILL = "bill",
  CREDIT_NOTE = "credit-note",
}

/**
 * @export
 * @interface FTFBill
 * @extends {CDEntity}
 */
export interface FTFBill extends CDEntity {
  code: string;
  invoiceNo: string | null;
  status: BillStatus;
  paymentStatus: BillPaymentStatus;

  issueDate: string;
  dueDate: string | null;

  // Required supplier reference
  supplierOID: string;

  totalAmount: number;
  currency: string;
  category: BillCategory;
  currencyRate: number | null;
  files: NamedURL[] | null;

  // Xero sync status (from xero_sync table)
  xeroSyncInfo: {
    xeroId: string | null;
    status: "synced" | "failed" | "pending" | null;
    lastSyncAt: string | null;
    error: string | null;
  } | null;

  // Bill-specific Xero field (supplier-finance integration)
  xeroPaidEffectsAppliedAt: string | null;

  remarks: string | null;
  internalNotes: string | null;

  // Linked items (populated by business logic)
  linkedExchangeOrders: {
    exchangeOrderOID: string;
    amountUsed: number;
  }[] | null;

  linkedMatchDocs: {
    matchDocOID: string;
    amountUsed: number;
  }[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
