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

export interface CDApproval extends CDEntity {
  approvalId: string;
  tenantId: string;
  name: string;
  key: string;
  targetEntityType: string;
  groups?: string[];
  sendEmail: boolean;
  notifySubmitterOnFinalOutcome: boolean;
  isEnabled: boolean;
  levels: unknown[];
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  deletedAt?: string;
}

export interface CDApprovalRequestV2 extends CDEntity {
  requestId: string;
  approvalId: string;
  targetEntityOid: string;
  submitterId: string;
  departmentId?: string;
  status: ApprovalRequestStatus;
  rejectionReason?: string;
  completedAt?: string;
  tenantId: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  deletedAt?: string;
}