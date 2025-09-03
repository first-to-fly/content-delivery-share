import type { CDEntity } from "../entity";


export enum TransportType {
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
  mainType: TransportType | null;
  description: string | null;

  tourDepartureOID: string | null;
  transportSegmentOIDs: string[];

  departureDateTime: string | null;
  arrivalDateTime: string | null;

  tenantOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
