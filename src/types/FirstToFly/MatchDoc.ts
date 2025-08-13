import { CDEntity } from "../entity";

/**
 * Match Document status enum
 */
export enum MatchDocStatus {
  DRAFT = "draft",
  SUBMITTED = "submitted",
  APPROVED = "approved",
  REJECTED = "rejected",
  COMPLETED = "completed",
  VOIDED = "voided",
}

export enum MatchDocCategory {
  PAYMENT_MADE = "payment-made",
  PAYMENT_RECEIVED = "payment-received",
  BUDGET_TRANSFER = "budget-transfer",
}

/**
 * @export
 * @interface FTFMatchDoc
 * @extends {CDEntity}
 */
export interface FTFMatchDoc extends CDEntity {
  code: string;
  status: MatchDocStatus;
  category: MatchDocCategory;

  issueDate: string;
  dueDate: string | null;

  // Supplier reference
  supplierOID: string | null;

  totalAmount: number;
  currency: string;
  currencyRate: number | null;
  foreignAmount: number | null;
  localAmount: number | null;

  remarks: string | null;
  documentUrl: string | null;

  isArchived: boolean;
  manualCompleted: boolean | null;

  // Bill relationship
  billOID: string | null;
  billUsedAmount: number | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
