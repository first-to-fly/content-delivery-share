import type { CDEntity } from "../entity";
import { BookingDiscountType } from "../enums/bookingTypes";
import { DiscountMode } from "./Discount";


export interface FTFIndependentTourBookingDiscount extends CDEntity {

  independentTourBookingOID: string;
  tenantOID: string;

  discountType: BookingDiscountType;
  discountOID: string | null;
  appliedDiscountCode: string | null;
  description: string;
  appliedAmount: number;
  discountMode: DiscountMode;
  metadata: Record<string, unknown> | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
