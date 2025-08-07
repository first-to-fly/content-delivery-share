import type { CDEntity } from "../entity";
import type { OccupancyType } from "./CostingItem";


export interface FTFIndependentTourAccommodation extends CDEntity {
  independentTourProductOID: string;

  name: string;
  costValue: {
    currency: string;
    amount: number;
    tax?: number;
  };
  occupancyPricing: Record<OccupancyType, number>;
  nightExtensionConfig: {
    maxNights: number;
    pricePerNight: number;
  };
  peakSurchargeRates: {
    percentage: number;
    fixedAmount: number;
  };
  peakPeriods: Array<{
    startDate: string; // ISO date string
    endDate: string; // ISO date string
    name?: string;
  }>;

  tenantOID: string;

  createdBy: string;
  updatedBy: string | null;

  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}
