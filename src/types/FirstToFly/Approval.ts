/**
 * Approval Management Types for Content Delivery
 * These types are shared between backend and frontend for approval workflows
 */

export interface CDApproval {
  approvalId: string;
  tenantId: string;
  name: string;
  key: string;
  targetEntityType: string;
  groups?: string[];
  sendEmail: boolean;
  notifySubmitterOnFinalOutcome: boolean;
  isEnabled: boolean;
  levels: CDApprovalLevel[];
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  deletedAt?: string;
}

export interface CDApprovalLevel {
  minApprovers: number;
  allowSelfApproval: boolean;
  levelTimeout: number;
  approvers: CDApprovalLevelApprover[];
}

export interface CDApprovalLevelApprover {
  type: CDApprovalLevelApproverType;
  id: string;
}

export enum CDApprovalLevelApproverType {
  USER = "USER",
  DEPARTMENT = "DEPARTMENT",
}

export interface CDApprovalRequestV2 {
  requestId: string;
  tenantId: string;
  approvalId: string;
  targetEntityOid: string;
  submitterId: string;
  departmentId?: string;
  status: CDApprovalRequestStatus;
  rejectionReason?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  deletedAt?: string;
}

export enum CDApprovalRequestStatus {
  IN_PROGRESS = "IN_PROGRESS",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
}

export interface CDApprovalRequestApprover {
  approverId: string;
  tenantId: string;
  requestId: string;
  level: number;
  userId: string;
  status: CDApprovalRequestApproverStatus;
  comments?: string;
  actedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export enum CDApprovalRequestApproverStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  SKIPPED = "SKIPPED",
}

// Content Delivery specific types for real-time updates
export interface CDApprovalUpdate {
  type: 'approval_created' | 'approval_updated' | 'approval_deleted';
  approvalId: string;
  tenantId: string;
  data: Partial<CDApproval>;
}

export interface CDApprovalRequestUpdate {
  type: 'request_created' | 'request_updated' | 'request_completed';
  requestId: string;
  tenantId: string;
  data: Partial<CDApprovalRequestV2>;
}

export interface CDApprovalRequestApproverUpdate {
  type: 'approver_assigned' | 'approver_action' | 'approver_skipped';
  approverId: string;
  requestId: string;
  tenantId: string;
  data: Partial<CDApprovalRequestApprover>;
}

// Frontend display types
export interface CDApprovalRequestWithDetails extends CDApprovalRequestV2 {
  approval: CDApproval;
  approvers: CDApprovalRequestApprover[];
}

export interface CDPendingApproval {
  approverId: string;
  requestId: string;
  level: number;
  request: CDApprovalRequestV2;
  approval: CDApproval;
}