import { CDEntity } from "../entity";


export enum LocationType {
  ALL = "all",
  OFFICE = "office",
  QUEUE = "queue",
}

/**
 * @export
 * @interface FTFLocation
 * @extends {CDEntity}
 */
export interface FTFLocation extends CDEntity {
  tenantOID: string;

  name: string;
  description: string | null;
  type: LocationType;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
