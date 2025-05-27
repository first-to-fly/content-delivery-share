import { CDEntity } from "../entity";


export enum ApprovalRequestStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  CANCELLED = "cancelled",
}

export enum ApprovalRequestType {
  TOUR_TRANSACTION_SPECIAL_DISCOUNT = "tour_transaction_special_discount",
  BUDGET_APPROVAL = "budget_approval",
  // Add more request types as needed
}

/**
 * @export
 * @interface FTFApprovalRequest
 * @extends {CDEntity}
 */
export interface FTFApprovalRequest extends CDEntity {
  tenantOID: string;

  type: ApprovalRequestType;
  entityOID: string;
  payload: Record<string, unknown>; // JSONB - flexible structure
  status: ApprovalRequestStatus;
  remarks: string | null;
  assigneeOID: string;
  assigneeNote: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
