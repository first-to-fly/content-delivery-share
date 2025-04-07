// Enums - must match those in firsttofly-travel-share
export type DiscountStatus = "Active" | "Inactive";
export type DiscountBookingChannel = "Web" | "iPad" | "App";
export type DiscountMechanics = "Per Room" | "Per Booking";
export type DiscountType = "Air Ticket" | "Land Tour" | "Full Tour";
export type DiscountBasePrice = "Net Price" | "Gross Price";
export type DiscountMode = "Percentage" | "Fixed Amount" | "Fixed Price" | "Free Gift";
export type DiscountWhichPax = "1st" | "2nd" | "3rd" | "4th" | "5th" | "6th" | "N/A";
export type DiscountPaxType = "Adult" | "Child" | "Child w/Bed" | "Child No Bed" | "All Pax" | "N/A";
export type DiscountAmountType = "LimitedSingle" | "LimitedRange" | "Unlimited";
export type DiscountSpecialDatesType = "Specific Date Range" | "N/A";
export type DiscountTimeslotType = "Specific Hours" | "N/A";
export type DiscountHowToApply = "Manually Tick" | "Manually Input" | "Auto";

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
