import type { CDEntity } from "../entity";
import type { ApprovalRequestMetadata } from "./ApprovalRequestMetadata";


export enum ApprovalRequestStatus {
  IN_PROGRESS = "IN_PROGRESS",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
}

export interface FTFApprovalRequest extends CDEntity {

  approvalOID: string;
  targetEntityOID: string;
  submitterOID: string;
  departmentOID: string | null;
  status: ApprovalRequestStatus;
  rejectionReason: string | null;
  completedAt: string | null;
  metadata: ApprovalRequestMetadata;
  code: string;

  tenantOID: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
