import { CDEntity } from "../entity";
import { DiscountMode } from "./Discount";
import { GroupTourBookingAddonType } from "./GroupTourBookingAddon";
import { FTFGroupTourBookingPax, GroupTourBookingPaxType } from "./GroupTourBookingPax";


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
  // Add more request types as needed
}

export interface ApprovalRequestEmptyPayload {
  type: ApprovalRequestType.EMPTY;
}

export interface ApprovalRequestGroupTourBookingSpecialDiscountPayload {
  type: ApprovalRequestType.GROUP_TOUR_BOOKING_SPECIAL_DISCOUNT;
  discountName: string;
  discountValue: number;
  discountMode: DiscountMode;
  reason?: string;
}

export interface ApprovalRequestBudgetApprovalPayload {
  type: ApprovalRequestType.BUDGET_APPROVAL;
}

export interface ApprovalRequestGroupTourBookingTransferPayload {
  type: ApprovalRequestType.GROUP_TOUR_BOOKING_TRANSFER;
  originalBookingOID: string;
  transferItems: Array<{
    targetBookingOID: string;
    passengers: Array<{
      oid: string;
      firstName: string;
      lastName: string;
      paxType: GroupTourBookingPaxType;
      personalDetails: FTFGroupTourBookingPax["personalDetails"];
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
        paxType: GroupTourBookingPaxType;
      }>;
    }>;
    addons: Array<{
      oid?: string;
      name: string;
      price: number;
      quantity: number;
      tax?: number;
      totalPrice: number;
      type?: GroupTourBookingAddonType;
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
  ApprovalRequestGroupTourBookingSpecialDiscountPayload | ApprovalRequestBudgetApprovalPayload |
  ApprovalRequestEmptyPayload | ApprovalRequestGroupTourBookingTransferPayload;


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
