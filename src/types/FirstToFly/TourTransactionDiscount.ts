import type { CDEntity } from "../entity";
import { ApprovalRequestTourTransactionSpecialDiscountPayload } from "./ApprovalRequest";
import type { DiscountAmountType, DiscountBasePrice, DiscountBookingChannel, DiscountHowToApply, DiscountMechanics, DiscountMode, DiscountPaxType, DiscountSpecialDatesType, DiscountTimeslotType, DiscountType, DiscountWhichPax } from "./Discount";
import { TourTransactionPaxType } from "./TourTransactionPax";


export enum TourTransactionDiscountType {
  CODE_BASED = "code_based",
  TOUR_DEPARTURE_DISCOUNT = "tour_departure_discount",
  SPECIAL_REQUEST = "special_request",
}

export interface CodeBasedDiscountMetadata {
  type: TourTransactionDiscountType.CODE_BASED;
  discountCodeItem: {
    oid: string;
    discountCode: string;
    discountName: string;
    description?: string;

    validityStartDate: string;
    validityEndDate: string;

    isActive: boolean;

    bookingChannels: DiscountBookingChannel[];
    discountMechanics: DiscountMechanics;
    discountType: DiscountType;
    basePrice: DiscountBasePrice;
    discountMode: DiscountMode;

    applyWithTierDiscounts: boolean;
    applyWithOtherDiscounts: boolean;

    whichPax: DiscountWhichPax;
    paxType: DiscountPaxType;
    minPax: number;
    minSpending: number;

    amountType: DiscountAmountType;
    amountValue?: number;
    amountRangeStart?: number;
    amountRangeEnd?: number;

    specialDatesType: DiscountSpecialDatesType;
    specialDatesStart?: string;
    specialDatesEnd?: string;

    timeslotType: DiscountTimeslotType;
    timeslotStart?: string;
    timeslotEnd?: string;

    discountValue: number;
    howToApply: DiscountHowToApply;
    useDiscountCode: boolean;

    sectorOIDs?: string[];
    groupTourProductOIDs?: string[];
    tourDepartureOIDs?: string[];
  };
}

export interface TourDepartureDiscountMetadata {
  type: TourTransactionDiscountType.TOUR_DEPARTURE_DISCOUNT;
  groupIndex: number;
  discountBreakdown: {
    totalDiscount: number,
    groupIndex: number,
    groupName: string,
    paxBreakdown: {
      paxOID: string,
      paxType: TourTransactionPaxType,
      isAdult: boolean,
      positionInSequence: number,
      tierIndex: number,
      tierRange: {
        from: number,
        to: number,
      },
      discountAmount: number,
    }[],
    tourDepartureOID: string,
    transactionOID: string,
    basePaxCount: number,
    calculatedAt: string,
  };
}

export interface SpecialRequestDiscountMetadata {
  type: TourTransactionDiscountType.SPECIAL_REQUEST;
  approvalRequestOID: string;
  approvalRequestPayload: ApprovalRequestTourTransactionSpecialDiscountPayload;
  approvalNote?: string;
}

export type TourTransactionDiscountMetadata =
  CodeBasedDiscountMetadata | TourDepartureDiscountMetadata | SpecialRequestDiscountMetadata;


export interface FTFTourTransactionDiscount extends CDEntity {
  tenantOID: string;
  tourTransactionOID: string;
  discountType: TourTransactionDiscountType;
  discountOID: string | null;
  appliedDiscountCode: string | null;
  description: string;
  appliedAmount: number;
  discountMode: DiscountMode;

  metadata: TourTransactionDiscountMetadata | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
