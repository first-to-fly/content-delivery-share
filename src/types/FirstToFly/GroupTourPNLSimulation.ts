import type { CDEntity } from "../entity";


/**
 * @export
 * @interface FTFGroupTourPNLSimulation
 * @extends {CDEntity}
 */
export interface FTFGroupTourPNLSimulation extends CDEntity {
  groupTourPricingOID: string;

  name: string;
  excelJSON: unknown;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
