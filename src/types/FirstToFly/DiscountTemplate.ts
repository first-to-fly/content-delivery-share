import {
  DiscountAmountType,
  DiscountBasePrice,
  DiscountBookingChannel,
  DiscountHowToApply,
  DiscountMechanics,
  DiscountMode,
  DiscountPaxType,
  DiscountSpecialDatesType,
  DiscountTimeslotType,
  DiscountType,
  DiscountWhichPax,
} from "./Discount";
// Import enums from Discount.ts

export interface DiscountTemplate {
  oid: string; // OID string from EntityZ
  entityType: "discountTemplate"; // Literal type
  tenantOID: string; // From EntityZ
  templateName: string;
  description: string | null;
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
  createdAt: string; // ISO DateTime string (from DateISOStringZ)
  updatedAt: string | null; // ISO DateTime string (from DateISOStringZ) - Optional in EntityZ
  deletedAt?: string | null; // ISO DateTime string (from DateISOStringZ) - Optional in EntityZ
  createdBy: string; // From EntityZ
  updatedBy: string | null; // From EntityZ - Optional
}
