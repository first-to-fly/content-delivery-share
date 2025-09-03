import type { CDEntity } from "../entity";


export enum ApprovalType {
  GROUP_TOUR_BOOKING = "group-tour-booking-approval",
  GROUP_TOUR_BOOKING_SPECIAL_DISCOUNT = "group-tour-booking-special-discount-approval",
  GROUP_TOUR_BOOKING_TRANSFER = "group-tour-booking-transfer-approval",
  GROUP_TOUR_BOOKING_AMENDMENT = "group-tour-booking-amendment-approval",
  BUDGET_APPROVAL = "budget-approval",
  TRAVEL_REQUEST = "travel-request-approval",
  EXPENSE_REPORT = "expense-report-approval",
  PURCHASE_ORDER = "purchase-order-approval",
  CONTRACT_APPROVAL = "contract-approval",
  VENDOR_APPROVAL = "vendor-approval",
  POLICY_EXCEPTION = "policy-exception-approval",
  EQUIPMENT_REQUEST = "equipment-request-approval",
  LEAVE_REQUEST = "leave-request-approval",
  EXCHANGE_ORDER_DRAFT_TO_WFA = "exchange-order-draft-to-wfa-approval",
  // Independent tour booking approvals
  INDEPENDENT_TOUR_BOOKING = "independent-tour-booking-approval",
  INDEPENDENT_TOUR_BOOKING_SPECIAL_DISCOUNT = "independent-tour-booking-special-discount-approval",
  INDEPENDENT_TOUR_BOOKING_AMENDMENT = "independent-tour-booking-amendment-approval",

  CUSTOMER_REFUND_REQUEST = "customer-refund-request",
  CUSTOMER_CANCELLATION_FEE_REQUEST = "customer-cancellation-fee-request",

  MATCH_DOC_PAYMENT_MADE_DRAFT_TO_SUBMITTED = "match-doc-payment-made-draft-to-submitted-approval",
  MATCH_DOC_PAYMENT_RECEIVED_DRAFT_TO_SUBMITTED = "match-doc-payment-received-draft-to-submitted-approval",
  BILL_DRAFT_TO_SUBMITTED = "bill-draft-to-submitted-approval",
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
