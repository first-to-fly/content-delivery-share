import type { CDEntity } from "../entity";


export interface FTFCustomizedTourItineraryItem extends CDEntity {
  tenantOID: string;
  customizedTourItineraryDayOID: string;
  category: string;
  supplierOID: string | null;
  name: string;
  details: Record<string, string> | null;
  costEstimated: number | null;
  priceQuoted: number | null;
  costActual: number | null;
  marginPercentage: number | null;
  linkedCostItemOID: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
