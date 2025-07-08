import { CDEntity } from "../entity";
import { ApprovalRequestV2Metadata } from "./ApprovalRequestV2Metadata";


export enum ApprovalRequestV2Status {
  IN_PROGRESS = "IN_PROGRESS",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
}

export interface FTFApprovalRequestV2 extends CDEntity {

  approvalOID: string;
  targetEntityOID: string;
  submitterOID: string;
  departmentOID: string | null;
  status: ApprovalRequestV2Status;
  rejectionReason: string | null;
  completedAt: string | null;
  metadata: ApprovalRequestV2Metadata;

  tenantOID: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
