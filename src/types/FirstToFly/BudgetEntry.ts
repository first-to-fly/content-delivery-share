import type { CDEntity } from "../entity";
import type { CalculationBasis, CostingItemCategory, OccupancyType, PackageType, QuantityMode } from "./CostingItem";

/**
 * Payment status enum
 */
export enum PaymentStatus {
  UNPAID = "unpaid",
  PARTIALLY_PAID = "partially-paid",
  PAID = "paid",
}

/**
 * @export
 * @interface FTFBudgetEntry
 * @extends {CDEntity}
 */
export interface FTFBudgetEntry extends CDEntity {
  budgetOID: string; // parent

  supplierOID: string | null;

  name: string;
  category: CostingItemCategory;
  calculationBasis: CalculationBasis;
  applyToPackageType: PackageType;
  applyToOccupancyType: OccupancyType;

  remarks: string | null;

  quantityMode: QuantityMode;
  quantity: number;

  isTieredPrice: boolean;
  currency: string;

  prices: {
    tierIndex?: number;
    amount: number;
    tax: number;
  }[];

  exchangeOrderItemLinks: {
    exchangeOrderItemOID: string;
    amountUsed: number;
  }[] | null;

  matchDocLinks: {
    matchDocOID: string;
    amountUsed: number;
    currencyRate?: number;
  }[] | null;

  originalCostingEntryOID: string | null;
  forexRate: number | null;
  localCurrency: string | null;
  localAmount: number | null;
  paymentStatus: PaymentStatus | null;
  paidAmount: number | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
