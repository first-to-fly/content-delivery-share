import type { CDEntity } from "../entity";


export interface FTFCustomizedTourCostItem extends CDEntity {
  tenantOID: string;
  customizedTourBookingOID: string;
  customizedTourItineraryItemOID: string | null;
  category: string;
  supplierOID: string | null;
  estCost: number | null;
  quotedPrice: number | null;
  actualCost: number | null;
  margin: number | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
