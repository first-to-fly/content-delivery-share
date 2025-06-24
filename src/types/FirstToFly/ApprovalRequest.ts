import { CDEntity } from "../entity";
import { DiscountMode } from "./Discount";
import { FTFTourTransactionPax, TourTransactionPaxType } from "./TourTransactionPax";


export enum ApprovalRequestStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  CANCELLED = "cancelled",
}

export enum ApprovalRequestType {
  EMPTY = "empty",
  TOUR_TRANSACTION_SPECIAL_DISCOUNT = "tour_transaction_special_discount",
  BUDGET_APPROVAL = "budget_approval",
  TOUR_TRANSACTION_BOOKING_TRANSFER = "tour_transaction_booking_transfer",
  // Add more request types as needed
}

export interface ApprovalRequestEmptyPayload {
  type: ApprovalRequestType.EMPTY;
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

export interface ApprovalRequestTourTransactionBookingTransferPayload {
  type: ApprovalRequestType.TOUR_TRANSACTION_BOOKING_TRANSFER;
  originalTourTransactionOID: string;
  transferItems: Array<{
    targetTourDepartureOID: string;
    passengers: Array<{
      oid: string;
      firstName: string;
      lastName: string;
      paxType: TourTransactionPaxType;
      personalDetails: FTFTourTransactionPax["personalDetails"];
    }>;
    rooms: Array<{
      roomType: string;
      roomCategory: string;
      adultsCount: number;
      childrenWithBedCount: number;
      childrenNoBedCount: number;
      infantsCount: number;
      passengerAssignments: Array<{
        passengerOID: string;
        paxType: TourTransactionPaxType;
      }>;
    }>;
    addons: Array<{
      oid?: string;
      name: string;
      price: number;
      quantity: number;
      tax?: number;
      totalPrice: number;
      type?: string; // TourTransactionAddonType as string
      groupTourPricingOID?: string;
      groupTourCostingEntryOID?: string;
      tourTransactionAddonOID?: string;
      toBeRemoved?: boolean;
    }>;
    discounts: Array<{
      oid?: string;
      name: string;
      type: string; // TourTransactionDiscountType as string
      amount: number;
      discountMode: DiscountMode;
      code?: string;
      discountCodeOID?: string;
      reason?: string;
      assigneeOID?: string;
      tourDepartureDiscountGroupIndex?: number;
      tourTransactionDiscountOID?: string;
      approvalRequestOID?: string;
      toBeRemoved?: boolean;
    }>;
    specialInstructions?: string[];
  }>;
  transferReason: string;
  financialSummary: {
    originalBookingPaidAmount: number;
    transferAllocation: Array<{
      targetIndex: number;
      allocatedAmount: number;
      newBookingTotal: number;
      balanceDue: number;
    }>;
  };
}

export type ApprovalRequestPayload =
  ApprovalRequestTourTransactionSpecialDiscountPayload | ApprovalRequestBudgetApprovalPayload |
  ApprovalRequestEmptyPayload | ApprovalRequestTourTransactionBookingTransferPayload;


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
