import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFGroupTourPricing
 * @extends {CDEntity}
 */
export interface FTFGroupTourPricing extends CDEntity {
  groupTourProductOID: string;
  groupTourCostingOID: string;
  name: string;
  code: string;
  remarks: string | null;
  targetYieldPercentage: number | null;
  validityStartDate: Date | null;
  validityEndDate: Date | null;
  isActive: boolean;
  tenantOID: string;
}
