import type { CDEntity } from "../entity";
import { ApprovalRequestBookingSpecialDiscountPayload } from "./ApprovalRequest";
import type { DiscountAmountType, DiscountBasePrice, DiscountBookingChannel, DiscountHowToApply, DiscountMechanics, DiscountMode, DiscountPaxType, DiscountSpecialDatesType, DiscountTimeslotType, DiscountType, DiscountWhichPax } from "./Discount";
import { BookingPaxType } from "./BookingPax";


export enum BookingDiscountType {
  CODE_BASED = "code_based",
  TOUR_DEPARTURE_DISCOUNT = "tour_departure_discount",
  SPECIAL_REQUEST = "special_request",
}

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
  approvalRequestPayload: ApprovalRequestBookingSpecialDiscountPayload;
  approvalNote?: string;
}

export type BookingDiscountMetadata =
  CodeBasedDiscountMetadata | TourDepartureDiscountMetadata | SpecialRequestDiscountMetadata;


export interface FTFBookingDiscount extends CDEntity {
  tenantOID: string;
  bookingOID: string;
  discountType: BookingDiscountType;
  discountOID: string | null;
  appliedDiscountCode: string | null;
  description: string;
  appliedAmount: number;
  discountMode: DiscountMode;

  metadata: BookingDiscountMetadata | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
