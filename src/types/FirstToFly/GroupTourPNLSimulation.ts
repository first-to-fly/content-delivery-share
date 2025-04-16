import { CDEntity } from "../entity";
import { OccupancyType, PackageType } from "./CostingItem";


/**
 * @export
 * @interface FTFGroupTourPNLSimulation
 * @extends {CDEntity}
 */
export interface FTFGroupTourPNLSimulation extends CDEntity {
  groupTourPricingOID: string;

  groupVolumeData: {
    groupVolume: number;
    packageType: PackageType.FULL_ONLY | PackageType.LAND_ONLY;

    occupancies: {
      // eslint-disable-next-line max-len
      occupancyType: OccupancyType.TWIN | OccupancyType.SINGLE | OccupancyType.TRIPLE | OccupancyType.QUAD | OccupancyType.CHILD_TWIN | OccupancyType.CHILD_WITH_BED | OccupancyType.CHILD_NO_BED | OccupancyType.INFANT;

      totalCost: number;
      tax: number;
      retailPrice: number;

      markup: number;
      discounts: {
        name: string;
        amount: number;
      }[];

      sellingPrice: number;
      netProfit: number;
      netProfitPercentage: number;
    }[];

  }[];

  summary: {
    averageProfit: number;
    averageProfitPercentage: number;
  }

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
