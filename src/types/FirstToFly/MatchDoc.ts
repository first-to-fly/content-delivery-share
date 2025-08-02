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

/**
 * @export
 * @interface FTFMatchDoc
 * @extends {CDEntity}
 */
export interface FTFMatchDoc extends CDEntity {
  matchDocNo: string;
  status: MatchDocStatus;

  issueDate: string;
  dueDate: string | null;

  // Supplier reference
  supplierOID: string | null;

  totalAmount: number;
  currency: string;

  remarks: string | null;
  documentUrl: string | null;

  isArchived: boolean;

  // Bill relationship
  billOID: string | null;
  billUsedAmount: number | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
