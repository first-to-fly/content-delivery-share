import { CDEntity } from "../entity";
import { CalculationBasis, CostingItemCategory, OccupancyType, PackageType } from "./CostingItem";


/**
 * @export
 * @interface FTFGroupTourCostingEntry
 * @extends {CDEntity}
 */
export interface FTFGroupTourCostingEntry extends CDEntity {
  groupTourCostingOID: string; // parent

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

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
