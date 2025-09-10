import type { CDEntity } from "../entity";
import type { BookingPaxType } from "../enums/bookingTypes";


export interface FTFIndependentTourAccommodation extends CDEntity {
  independentTourProductOID: string;

  name: string;
  costValue: {
    currency: string;
    tax?: number | null;
    paxPricing: Record<BookingPaxType, number>;
    peakSurchargeFixedAmount?: number | null;
    extraNightPrice?: number | null;
  };
  priceValue: {
    currency: string;
    tax?: number | null;
    paxPricing: Record<BookingPaxType, number>;
    peakSurchargeFixedAmount?: number | null;
    extraNightPrice?: number | null;
  };
  peakPeriods: Array<{
    startDate: string; // ISO date string
    endDate: string; // ISO date string
    name?: string | null;
  }>;

  tenantOID: string;

  createdBy: string;
  updatedBy: string | null;

  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}
