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

export interface IndependentTourBookingDiscountMetadata {
  validFrom?: string; // ISO date string
  validUntil?: string; // ISO date string
  minimumPurchase?: number;
  maximumDiscount?: number;
  usageCount?: number;
  maxUsageCount?: number;
  applicableServices?: string[];
  excludedServices?: string[];
  termsAndConditions?: string;
}

export interface FTFIndependentTourBookingDiscount extends CDEntity {

  independentTourBookingOID: string;

  discountType: BookingDiscountType;
  discountOID?: string; // Reference to Discount entity if applicable

  discountCode?: string;
  discountName: string;
  description?: string;

  discountMode: DiscountMode;
  discountValue: number; // Percentage (0-100) or fixed amount
  appliedAmount: number; // Actual amount discounted

  // Validation metadata
  metadata?: IndependentTourBookingDiscountMetadata;

  // Approval tracking for special discounts
  approvalRequired: boolean;
  approvalRequestOID?: string;
  approvedBy?: string;
  approvedAt?: string; // ISO date string

  sortOrder?: number;

  // Timestamps
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy?: string;
}
