// Enums - must match those in firsttofly-travel-share
export enum DiscountStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

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

export interface Discount {
  oid: string; // OID string from EntityZ
  entityType: "discount"; // Literal type
  tenantOID: string; // From EntityZ
  discountCode: string;
  discountName: string;
  description: string | null;
  validityStartDate: string; // ISO Date string (from DateISOStringZ)
  validityEndDate: string; // ISO Date string (from DateISOStringZ)
  status: DiscountStatus;
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
  specialDatesStart: string | null; // ISO Date string (from DateISOStringZ)
  specialDatesEnd: string | null; // ISO Date string (from DateISOStringZ)
  timeslotType: DiscountTimeslotType;
  timeslotStart: string | null; // Time string HH:MM:SS
  timeslotEnd: string | null; // Time string HH:MM:SS
  discountValue: number;
  howToApply: DiscountHowToApply;
  useDiscountCode: boolean;
  sectorIds: string[]; // Array of UUIDs (as strings)
  productIds: string[]; // Array of UUIDs (as strings)
  tourIds: string[]; // Array of UUIDs (as strings)
  createdAt: string; // ISO DateTime string (from DateISOStringZ)
  updatedAt: string | null; // ISO DateTime string (from DateISOStringZ) - Optional in EntityZ
  deletedAt?: string | null; // ISO DateTime string (from DateISOStringZ) - Optional in EntityZ
  createdBy: string; // From EntityZ
  updatedBy: string | null; // From EntityZ - Optional
}
