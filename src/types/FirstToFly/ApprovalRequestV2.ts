import { CDEntity } from "../entity";
import { ApprovalRequestV2Payload } from "./ApprovalRequestV2Payloads";


export enum ApprovalRequestV2Status {
  IN_PROGRESS = "IN_PROGRESS",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
}

export interface FTFApprovalRequestV2 extends CDEntity {
  requestId: string;
  approvalId: string;
  targetEntityOid: string;
  submitterId: string;
  departmentId?: string;
  status: ApprovalRequestV2Status;
  rejectionReason?: string;
  completedAt?: string;
  metadata?: ApprovalRequestV2Payload;
  tenantId: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  deletedAt?: string;
}
