import { CDEntity } from "../entity";


export enum FTFTransportGroupType {
  FLIGHT = "flight",
  BUS = "bus",
  CRUISE = "cruise",
  TRAIN = "train",
  FERRY = "ferry",
}

/**
 * @export
 * @interface FTFTransportGroup
 * @extends {CDEntity}
 */
export interface FTFTransportGroup extends CDEntity {
  name: string;
  capacity: number;
  mainType: FTFTransportGroupType | null;
  description: string | null;
  tenantOID: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
