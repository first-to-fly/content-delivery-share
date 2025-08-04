import type { OccupancyType } from "./CostingItem";


export interface FTFIndependentTourAccommodationCosting {
  oid: string;
  entityType: "independentTourAccommodationCosting";

  independentTourAccommodationCostingOID: string;
  independentTourCostingOID: string;

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
