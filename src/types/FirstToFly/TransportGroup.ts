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
  mainType: FTFTransportGroupType | null;
  description: string | null;

  transportSegmentOIDs: string[];

  tenantOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
