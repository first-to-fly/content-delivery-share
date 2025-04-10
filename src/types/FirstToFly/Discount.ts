import { CDEntity } from "types/entity";


export enum DiscountBookingChannel {
  WEB = "web",
  IPAD = "ipad",
  APP = "app",
}

export enum DiscountMechanics {
  PER_ROOM = "per-room",
  PER_BOOKING = "per-booking",
}

export enum DiscountType {
  AIR_TICKET = "air-ticket",
  LAND_TOUR = "land-tour",
  FULL_TOUR = "full-tour",
}

export enum DiscountBasePrice {
  NET_PRICE = "net-price",
  GROSS_PRICE = "gross-price",
}

export enum DiscountMode {
  PERCENTAGE = "percentage",
  FIXED_AMOUNT = "fixed-amount",
  FIXED_PRICE = "fixed-price",
  FREE_GIFT = "free-gift",
}

export enum DiscountWhichPax {
  FIRST = "1st",
  SECOND = "2nd",
  THIRD = "3rd",
  FOURTH = "4th",
  FIFTH = "5th",
  SIXTH = "6th",
  NA = "n/a",
}

export enum DiscountPaxType {
  ADULT = "adult",
  CHILD = "child",
  CHILD_WITH_BED = "child-with-bed",
  CHILD_NO_BED = "child-no-bed",
  ALL_PAX = "all-pax",
  NA = "n/a",
}

export enum DiscountAmountType {
  LIMITED_SINGLE = "limited-single",
  LIMITED_RANGE = "limited-range",
  UNLIMITED = "unlimited",
}

export enum DiscountSpecialDatesType {
  SPECIFIC_DATE_RANGE = "specific-date-range",
  NA = "n/a",
}

export enum DiscountTimeslotType {
  SPECIFIC_HOURS = "specific-hours",
  NA = "n/a",
}

export enum DiscountHowToApply {
  MANUALLY_TICK = "manually-tick",
  MANUALLY_INPUT = "manually-input",
  AUTO = "auto",
}

export interface FTFDiscount extends CDEntity {
  tenantOID: string;

  discountCode: string;
  discountName: string;
  description: string | null;

  validityStartDate: string;
  validityEndDate: string;

  isActive: boolean;

  bookingChannel: DiscountBookingChannel;
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
  amountValue: number | null;
  amountRangeStart: number | null;
  amountRangeEnd: number | null;

  specialDatesType: DiscountSpecialDatesType;
  specialDatesStart: string | null;
  specialDatesEnd: string | null;

  timeslotType: DiscountTimeslotType;
  timeslotStart: string | null;
  timeslotEnd: string | null;

  discountValue: number;
  howToApply: DiscountHowToApply;
  useDiscountCode: boolean;

  sectorOIDs: string[] | null;
  productOIDs: string[] | null;
  tourOIDs: string[] | null;

  createdAt: string;
  updatedAt: string | null;
  createdBy: string;
  updatedBy: string | null;
}
