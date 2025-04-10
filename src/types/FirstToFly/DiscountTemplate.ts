import { CDEntity } from "types/entity";

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

export interface FTFDiscountTemplate extends CDEntity {
  tenantOID: string;

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
  specialDatesStart: string | null;
  specialDatesEnd: string | null;

  timeslotType: DiscountTimeslotType;
  timeslotStart: string | null;
  timeslotEnd: string | null;

  discountValue: number;
  howToApply: DiscountHowToApply;
  useDiscountCode: boolean;

  createdAt: string;
  updatedAt: string | null;
  createdBy: string;
  updatedBy: string | null;
}
