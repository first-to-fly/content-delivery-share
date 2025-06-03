import type { CDEntity } from "../entity";
import type { DiscountMode } from "./Discount";


export enum TourTransactionDiscountType {
  CODE_BASED = "code_based",
  TOUR_DEPARTURE_DISCOUNT = "tour_departure_discount",
  SPECIAL_REQUEST = "special_request",
}

export interface FTFTourTransactionDiscount extends CDEntity {
  tenantOID: string;
  tourTransactionOID: string;
  discountType: TourTransactionDiscountType;
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
