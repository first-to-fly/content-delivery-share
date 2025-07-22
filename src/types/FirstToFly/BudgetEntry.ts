import { CDEntity } from "../entity";
import { CalculationBasis, CostingItemCategory, OccupancyType, PackageType } from "./CostingItem";

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

  originalCostingEntryOID: string;
  forexRate: number;
  localCurrency: string;
  localAmount: number;
  paymentStatus: PaymentStatus;
  paidAmount: number;
  // paymentTransactionOIDs: string[] | null; // Available when Finance module is added
  // exchangeOrderItemOIDs: string[] | null; // Available when EO module is added

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
