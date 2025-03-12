import { CDEntity } from "../entity";
import { LocationType } from "../enums/location";

/**
 * @export
 * @interface FTFLocation
 * @extends {CDBaseEntity}
 */
export interface FTFLocation extends CDEntity {
  tenantOid: string;

  name: string;
  description?: string;
  type: LocationType;
}
