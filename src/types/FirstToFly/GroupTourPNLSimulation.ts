import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFGroupTourPNLSimulation
 * @extends {CDEntity}
 */
export interface FTFGroupTourPNLSimulation extends CDEntity {
  groupTourPricingOID: string;
  groupVolume: string;
  passengerCount: number;
  tenantOID: string;
}
