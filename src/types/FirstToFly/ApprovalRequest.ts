import { CDEntity } from "../entity";
import { BookingAddonType } from "./BookingAddon";
import { BookingPaxType, FTFBookingPax } from "./BookingPax";
import { DiscountMode } from "./Discount";


export enum ApprovalRequestStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  CANCELLED = "cancelled",
}

export enum ApprovalRequestType {
  EMPTY = "empty",
  BOOKING_SPECIAL_DISCOUNT = "booking_special_discount",
  BUDGET_APPROVAL = "budget_approval",
  BOOKING_TRANSFER = "booking_transfer",
  // Add more request types as needed
}

export interface ApprovalRequestEmptyPayload {
  type: ApprovalRequestType.EMPTY;
}

export interface ApprovalRequestBookingSpecialDiscountPayload {
  type: ApprovalRequestType.BOOKING_SPECIAL_DISCOUNT;
  discountName: string;
  discountValue: number;
  discountMode: DiscountMode;
  reason?: string;
}

export interface ApprovalRequestBudgetApprovalPayload {
  type: ApprovalRequestType.BUDGET_APPROVAL;
}

export interface ApprovalRequestBookingTransferPayload {
  type: ApprovalRequestType.BOOKING_TRANSFER;
  originalBookingOID: string;
  transferItems: Array<{
    targetBookingOID: string;
    passengers: Array<{
      oid: string;
      firstName: string;
      lastName: string;
      paxType: BookingPaxType;
      personalDetails: FTFBookingPax["personalDetails"];
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
        paxType: BookingPaxType;
      }>;
    }>;
    addons: Array<{
      oid?: string;
      name: string;
      price: number;
      quantity: number;
      tax?: number;
      totalPrice: number;
      type?: BookingAddonType;
      groupTourPricingOID?: string;
      groupTourCostingEntryOID?: string;
      bookingAddonOID?: string;
      toBeRemoved?: boolean;
    }>;
    discounts: Array<{
      oid?: string;
      name: string;
      type?: string; // BookingDiscountType as string
      amount: number;
      discountMode: DiscountMode;
      code?: string;
      discountCodeOID?: string;
      reason?: string;
      assigneeOID?: string;
      tourDepartureDiscountGroupIndex?: number;
      bookingDiscountOID?: string;
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
  ApprovalRequestBookingSpecialDiscountPayload | ApprovalRequestBudgetApprovalPayload |
  ApprovalRequestEmptyPayload | ApprovalRequestBookingTransferPayload;


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
