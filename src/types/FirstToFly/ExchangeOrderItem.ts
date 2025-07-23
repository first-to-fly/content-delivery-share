import { CDEntity } from "../entity";


export interface FTFExchangeOrderItem extends CDEntity {
  exchangeOrderOID: string;

  name: string;

  quantity: number;
  unitPrice: number;
  currency: string;

  budgetEntryUsages: {
    budgetEntryOID: string;
    amountUsed: number;
  }[] | null;
  tenantOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
