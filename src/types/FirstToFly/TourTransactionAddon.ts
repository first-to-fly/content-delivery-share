import type { CDEntity } from "../entity";


export enum TourTransactionAddonType {
  BUDGET_ENTRY = "budget_entry",
  MANUAL = "manual",
}

export interface FTFTourTransactionAddon extends CDEntity {
  tenantOID: string;
  tourTransactionOID: string;
  type: TourTransactionAddonType;
  budgetItemOID: string | null;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  supplierOID: string | null;
  notes: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
