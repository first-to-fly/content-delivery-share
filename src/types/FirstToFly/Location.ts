import { CDEntity } from "../entity";
import { LocationType } from "../enums/location";

/**
 * @export
 * @interface FTFLocation
 * @extends {CDBaseEntity}
 */
export interface FTFLocation extends CDEntity {
  tenantOID: string;

  name: string;
  description?: string;
  type: LocationType;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
