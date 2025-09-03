import type { CDEntity } from "../entity";
import type { BookingDiscountType, BookingPaxType } from "../enums/bookingTypes";
import type { ApprovalRequestGroupTourBookingSpecialDiscountMetadata } from "./ApprovalRequestMetadata";
import type { DiscountAmountType, DiscountBasePrice, DiscountBookingChannel, DiscountHowToApply, DiscountMechanics, DiscountMode, DiscountPaxType, DiscountSpecialDatesType, DiscountTimeslotType, DiscountType, DiscountWhichPax } from "./Discount";


export interface CodeBasedDiscountMetadata {
  type: BookingDiscountType.CODE_BASED;
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
  type: BookingDiscountType.TOUR_DEPARTURE_DISCOUNT;
  groupIndex: number;
  discountBreakdown: {
    totalDiscount: number,
    groupIndex: number,
    groupName: string,
    paxBreakdown: {
      paxOID: string,
      paxType: BookingPaxType,
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
    bookingOID: string,
    basePaxCount: number,
    calculatedAt: string,
  };
}

export interface SpecialRequestDiscountMetadata {
  type: BookingDiscountType.SPECIAL_REQUEST;
  approvalRequestOID: string;
  approvalRequestPayload: ApprovalRequestGroupTourBookingSpecialDiscountMetadata;
  approvalNote?: string;
}

export type GroupTourBookingDiscountMetadata =
  CodeBasedDiscountMetadata | TourDepartureDiscountMetadata | SpecialRequestDiscountMetadata;


export interface FTFGroupTourBookingDiscount extends CDEntity {
  tenantOID: string;
  bookingOID: string;
  discountType: BookingDiscountType;
  discountOID: string | null;
  appliedDiscountCode: string | null;
  description: string;
  appliedAmount: number;
  discountMode: DiscountMode;

  metadata: GroupTourBookingDiscountMetadata | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
