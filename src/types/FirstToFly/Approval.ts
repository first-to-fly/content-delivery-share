import { CDEntity } from "../entity";


export enum ApprovalType {
  GROUP_TOUR_BOOKING = "group-tour-booking",
  GROUP_TOUR_BOOKING_SPECIAL_DISCOUNT = "group-tour-booking-special-discount",
  GROUP_TOUR_BOOKING_TRANSFER = "group-tour-booking-transfer",
  GROUP_TOUR_BOOKING_AMENDMENT = "group-tour-booking-amendment",
  BUDGET_APPROVAL = "budget-approval",
  TRAVEL_REQUEST = "travel-request",
  EXPENSE_REPORT = "expense-report",
  PURCHASE_ORDER = "purchase-order",
  CONTRACT_APPROVAL = "contract-approval",
  VENDOR_APPROVAL = "vendor-approval",
  POLICY_EXCEPTION = "policy-exception",
  EQUIPMENT_REQUEST = "equipment-request",
  LEAVE_REQUEST = "leave-request",
  EO_REQUEST = "eo-request",
}


export enum ApprovalLevelApproverType {
  DEPARTMENT = "DEPARTMENT",
  USER = "USER",
}

export interface ApprovalLevelApprover {
  type: ApprovalLevelApproverType;
  id: string;
}


export interface ApprovalLevel {
  minApprovers: number;
  allowSelfApproval: boolean;
  approvers: ApprovalLevelApprover[];
  levelTimeout: number;
}

export interface FTFApproval extends CDEntity {

  tenantOID: string;
  name: string;
  approvalType: ApprovalType;
  targetEntityType: string;
  groups: string[] | null;
  sendEmail: boolean;
  notifySubmitterOnFinalOutcome: boolean;
  isEnabled: boolean;
  levels: ApprovalLevel[];

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
