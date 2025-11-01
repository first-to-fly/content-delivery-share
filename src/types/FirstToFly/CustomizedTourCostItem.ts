import type { CDEntity } from "../entity";


export enum CustomizedTourCostItemCategory {
  GENERAL = "general",
  ACCOMMODATION = "accommodation",
  TRANSPORTATION = "transportation",
  MEAL = "meal",
  ACTIVITY = "activity",
  SERVICE = "service",
  TICKET = "ticket",
  FEE = "fee",
  TAX = "tax",
  INSURANCE = "insurance",
  MISCELLANEOUS = "miscellaneous",
  OTHER = "other",
}

export enum CustomizedTourCostItemOrigin {
  AUTO = "auto",
  MANUAL = "manual",
}


export interface FTFCustomizedTourCostItem extends CDEntity {
  tenantOID: string;
  customizedTourBookingOID: string;
  customizedTourItineraryItemOID: string | null;
  origin: CustomizedTourCostItemOrigin;
  category: CustomizedTourCostItemCategory;
  supplierOID: string | null;
  estCost: number | null;
  quotedPrice: number | null;
  actualCost: number | null;
  margin: number | null;
  overrideLocked: boolean;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
