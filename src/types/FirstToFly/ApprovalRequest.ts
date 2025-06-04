import { CDEntity } from "../entity";
import { DiscountMode } from "./Discount";


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

export interface ApprovalRequestTourTransactionSpecialDiscountPayload {
  type: ApprovalRequestType.TOUR_TRANSACTION_SPECIAL_DISCOUNT;
  discountName: string;
  discountValue: number;
  discountMode: DiscountMode;
  reason?: string;
}

export interface ApprovalRequestBudgetApprovalPayload {
  type: ApprovalRequestType.BUDGET_APPROVAL;
}

export type ApprovalRequestPayload =
  ApprovalRequestTourTransactionSpecialDiscountPayload | ApprovalRequestBudgetApprovalPayload;


/**
 * @export
 * @interface FTFApprovalRequest
 * @extends {CDEntity}
 */
export interface FTFApprovalRequest extends CDEntity {
  tenantOID: string;

  type: ApprovalRequestType;
  entityOID: string;
  payload: ApprovalRequestPayload;
  status: ApprovalRequestStatus;
  remarks: string | null;
  assigneeOID: string;
  assigneeNote: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
