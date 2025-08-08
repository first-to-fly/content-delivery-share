import type { CDEntity } from "../entity";


export enum BookingDiscountType {
  CODE_BASED = "CODE_BASED",
  SPECIAL_REQUEST = "SPECIAL_REQUEST",
  TOUR_DEPARTURE_DISCOUNT = "TOUR_DEPARTURE_DISCOUNT",
}

export enum DiscountMode {
  PERCENTAGE = "percentage",
  FIXED_AMOUNT = "fixed_amount",
}

export interface FTFIndependentTourBookingDiscount extends CDEntity {

  independentTourBookingOID: string;
  tenantOID: string;
  
  discountType: string; // BookingDiscountType as string
  discountId: string | null; // UUID reference to Discount entity
  appliedDiscountCode: string | null;
  description: string;
  appliedAmount: number;
  discountMode: string; // DiscountMode as string
  metadata: Record<string, unknown> | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
