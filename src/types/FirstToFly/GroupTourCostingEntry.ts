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
 * @interface FTFGroupTourCostingEntry
 * @extends {CDEntity}
 */
export interface FTFGroupTourCostingEntry extends CDEntity {
  groupTourCostingOID: string; // parent

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
    tierIndex: number | null;
    amount: number;
    tax: number;
  }[];

  // budget fields - start
  originalEntryOID: string | null;
  forexRate: number | null;
  localCurrency: string | null;
  localAmount: number | null;
  paymentStatus: PaymentStatus | null;
  paidAmount: number | null;
  // paymentTransactionOIDs: string[] | null; // Available when Finance module is added
  // exchangeOrderItemOIDs: string[] | null; // Available when EO module is added
  // budget fields - end

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
