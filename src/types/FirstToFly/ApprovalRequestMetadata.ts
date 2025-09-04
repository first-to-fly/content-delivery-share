import type { BookingPaxType } from "../enums/bookingTypes";
import type { ApprovalType } from "./Approval";
import type { BillStatus } from "./Bill";
import type { DiscountMode } from "./Discount";
import type { ExchangeOrderStatus } from "./ExchangeOrder";
import type { GroupTourBookingAddonType } from "./GroupTourBookingAddon";
import type { FTFGroupTourBookingPax } from "./GroupTourBookingPax";
import type { MatchDocStatus } from "./MatchDoc";

/**
 * Metadata types for ApprovalRequest metadata field
 * These are the same as the legacy ApprovalRequest metadatas but used in the new system
 */

export interface ApprovalRequestGroupTourBookingSpecialDiscountMetadata {
  type: ApprovalType.GROUP_TOUR_BOOKING_SPECIAL_DISCOUNT;
  discountName: string;
  discountValue: number;
  discountMode: DiscountMode;
  reason?: string;
}

export interface ApprovalRequestBudgetApprovalMetadata {
  type: ApprovalType.BUDGET_APPROVAL;
  // empty metadata
}

export interface ApprovalRequestGroupTourBookingTransferMetadata {
  type: ApprovalType.GROUP_TOUR_BOOKING_TRANSFER;
  originalBookingOID: string;
  transferItems: Array<{
    targetTourDepartureOID: string;
    passengers: Array<{
      oid: string;
      firstName: string;
      lastName: string;
      paxType: BookingPaxType;
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

// Common booking breakdown interface used for both original and amended breakdowns
interface BookingBreakdown {
  tourFare: Array<{
    paxType: string;
    quantity: number;
    unitPrice: number;
    subTotal: number;
  }>;
  miscellaneous: Array<{
    name: string;
    quantity: number;
    unitPrice: number;
    subTotal: number;
  }>;
  addons: Array<{
    name: string;
    quantity: number;
    unitPrice: number;
    subTotal: number;
  }>;
  discounts: Array<{
    discountOID: string;
    description?: string;
    appliedAmount: number;
  }>;
  taxes: Array<{
    name: string;
    quantity: number;
    unitPrice: number;
    subTotal: number;
  }>;
  total: number;
}

export interface ApprovalRequestGroupTourBookingAmendmentMetadata {
  type: ApprovalType.GROUP_TOUR_BOOKING_AMENDMENT;
  originalBookingOID: string;

  // Complete amended form values for execution
  amendedFormValues: {
    groupTourBookingOID?: string;
    tourDepartureOID: string;
    rooms: Array<{
      roomNumber: number;
      passengers: Array<{
        oid?: string;
        title: string;
        gender: string;
        firstName: string;
        lastName: string;
        dateOfBirth?: string;
        nationality?: string;
        email?: string;
        phone?: string;
        alternativeMobile?: string;
        address?: string;
        postalCode?: string;
        isLeadPassenger?: boolean;
      }>;
      adultSelections: Array<{
        paxIndex: number;
        tourType: "full-tour" | "land-only";
        groupTourBookingPaxOID?: string;
      }>;
      childWithBedSelections: Array<{
        paxIndex: number;
        tourType: "full-tour" | "land-only";
        groupTourBookingPaxOID?: string;
      }>;
      childNoBedSelections: Array<{
        paxIndex: number;
        tourType: "full-tour" | "land-only";
        groupTourBookingPaxOID?: string;
      }>;
      infantSelections: Array<{
        paxIndex: number;
        tourType: "full-tour" | "land-only";
        groupTourBookingPaxOID?: string;
      }>;
      selectedRuleOID?: string;
      bookingRoomOID?: string;
      toBeRemoved?: boolean;
    }>;
    bookingAddOns: Array<{
      oid?: string;
      name: string;
      price: number;
      quantity: number;
      tax?: number;
      totalPrice: number;
      type?: GroupTourBookingAddonType;
      groupTourPricingOID?: string;
      groupTourCostingEntryOID?: string;
      groupTourBookingAddonOID?: string;
      toBeRemoved?: boolean;
    }>;
    bookingDiscounts: Array<{
      oid?: string;
      name: string;
      type?: string;
      amount: number;
      discountMode: DiscountMode;
      code?: string;
      discountCodeOID?: string;
      reason?: string;
      assigneeOID?: string;
      tourDepartureDiscountGroupIndex?: number;
      groupTourBookingDiscountOID?: string;
      approvalRequestOID?: string;
      toBeRemoved?: boolean;
    }>;
    specialInstructions?: string[];
    overwriteTax?: {
      scheme: string;
      rate: number;
    };
    totalAmount: number;
    primaryContact: {
      oid?: string;
      title: string;
      gender: string;
      firstName: string;
      lastName: string;
      dateOfBirth?: string;
      nationality?: string;
      email?: string;
      phone?: string;
      alternativeMobile?: string;
      address?: string;
      postalCode?: string;
      isLeadPassenger?: boolean;
    };
  };

  // Calculated breakdown for original booking (before amendment)
  originalBookingBreakdown: BookingBreakdown;

  // Calculated breakdown for amended booking (for comparison UI)
  amendedBreakdown: BookingBreakdown;

  // Financial summary for the amended booking
  financialSummary: {
    amendedTotal: number;
    totalDifference: number;
    originalOutstanding: number;
    amendedOutstanding: number;
    receivedAmount: number;
    refundRequired: boolean;
    refundAmount: number;
    additionalPaymentRequired: boolean;
    additionalPaymentAmount: number;
  };

  // Amendment metadata
  amendmentReason: string;
  changedFields: string[];
  requestedBy: string;
  requestedDate: string;
}

export interface ApprovalRequestIndependentTourBookingAmendmentMetadata {
  type: ApprovalType.INDEPENDENT_TOUR_BOOKING_AMENDMENT;
  originalBookingOID: string;
  amendedFormValues: Record<string, unknown>;
  originalBookingBreakdown: BookingBreakdown;
  amendedBreakdown: BookingBreakdown;
  financialSummary: {
    amendedTotal: number;
    totalDifference: number;
    originalOutstanding: number;
    amendedOutstanding: number;
    receivedAmount: number;
    refundRequired: boolean;
    refundAmount: number;
    additionalPaymentRequired: boolean;
    additionalPaymentAmount: number;
  };
  amendmentReason: string;
  changedFields: string[];
  requestedBy: string;
  requestedDate: string;
}

type CommonSubmitDraftMetadata<T> = {
  fromStatus: T;
  toStatus: T;
  requestedBy: string;
  requestedAt: string;
  businessJustification?: string;
};

export interface ApprovalRequestExchangeOrderDraftToWfaMetadata extends CommonSubmitDraftMetadata<ExchangeOrderStatus> {
  type: ApprovalType.EXCHANGE_ORDER_DRAFT_TO_WFA;
  exchangeOrderOID: string;
}

export interface ApprovalRequestMatchDocPaymentMadeDraftToSubmittedMetadata
  extends CommonSubmitDraftMetadata<MatchDocStatus> {
  type: ApprovalType.MATCH_DOC_PAYMENT_MADE_DRAFT_TO_SUBMITTED;
  matchDocOID: string;
}

export interface ApprovalRequestMatchDocPaymentReceivedDraftToSubmittedMetadata
  extends CommonSubmitDraftMetadata<MatchDocStatus> {
  type: ApprovalType.MATCH_DOC_PAYMENT_RECEIVED_DRAFT_TO_SUBMITTED;
  matchDocOID: string;
}

export interface ApprovalRequestBillDraftToSubmittedMetadata extends CommonSubmitDraftMetadata<BillStatus> {
  type: ApprovalType.BILL_DRAFT_TO_SUBMITTED;
  billOID: string;
}

export interface ApprovalRequestCustomerRefundMetadata {
  type: ApprovalType.CUSTOMER_REFUND_REQUEST;
  amount: number;
  paymentOrderOID: string;
  bookingOID: string;
  tenantOID: string;
  currencyCode?: string;
  notes?: string;
}

export interface ApprovalRequestCustomerCancellationFeeMetadata {
  type: ApprovalType.CUSTOMER_CANCELLATION_FEE_REQUEST;
  amount: number;
  paymentOrderOID: string;
  bookingOID: string;
  tenantOID: string;
  currencyCode?: string;
  notes?: string;
}

// Union type for all metadata
export type ApprovalRequestMetadata =
  | ApprovalRequestGroupTourBookingSpecialDiscountMetadata
  | ApprovalRequestBudgetApprovalMetadata
  | ApprovalRequestGroupTourBookingTransferMetadata
  | ApprovalRequestGroupTourBookingAmendmentMetadata
  | ApprovalRequestIndependentTourBookingAmendmentMetadata
  | ApprovalRequestExchangeOrderDraftToWfaMetadata
  | ApprovalRequestMatchDocPaymentMadeDraftToSubmittedMetadata
  | ApprovalRequestMatchDocPaymentReceivedDraftToSubmittedMetadata
  | ApprovalRequestBillDraftToSubmittedMetadata
  | ApprovalRequestCustomerRefundMetadata
  | ApprovalRequestCustomerCancellationFeeMetadata;
