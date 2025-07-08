import { CDEntity } from "../entity";


export enum ApprovalRequestStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  CANCELLED = "cancelled",
}

export enum ApprovalRequestType {
  EMPTY = "empty",
  GROUP_TOUR_BOOKING_SPECIAL_DISCOUNT = "group_tour_booking_special_discount",
  BUDGET_APPROVAL = "budget_approval",
  GROUP_TOUR_BOOKING_TRANSFER = "group_tour_booking_transfer",
}

export interface FTFApprovalRequestV2 extends CDEntity {
  requestId: string;
  approvalId: string;
  targetEntityOid: string;
  submitterId: string;
  departmentId?: string;
  status: ApprovalRequestStatus;
  rejectionReason?: string;
  completedAt?: string;
  metadata?: unknown;
  tenantId: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  deletedAt?: string;
}
