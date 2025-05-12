import { CDEntity } from "../entity";
import { FTFTransportGroupType } from "./TransportGroup";


export interface FTFTransportSegmentFlightDetails {
  airline: string;
  flightNumber: string;
  class: string;
}

export interface FTFTransportSegmentBusDetails {
  operator: string;
  vehicleType: string;
}

export interface FTFTransportSegmentCruiseDetails {
  shipName: string;
  cabinTypes: string;
  portDetails: string;
}

export interface FTFTransportSegmentTrainDetails {
  trainNumber: string;
  carriageClass: string;
}

export interface FTFTransportSegmentFerryDetails {
  operator: string;
  vesselName: string;
}

export type FTFTransportSegmentDetails =
  | FTFTransportSegmentFlightDetails
  | FTFTransportSegmentBusDetails
  | FTFTransportSegmentCruiseDetails
  | FTFTransportSegmentTrainDetails
  | FTFTransportSegmentFerryDetails;


/**
 * @export
 * @interface FTFTransportSegment
 * @extends {CDEntity}
 */
export type FTFTransportSegment = CDEntity & {
  transportGroupOID: string;

  originLocation: string;
  destinationLocation: string;
  departureDateTime: string;
  arrivalDateTime: string;

  tenantOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
} & (
  | {
    type: FTFTransportGroupType.FLIGHT;
    details: FTFTransportSegmentFlightDetails;
  }
  | {
    type: FTFTransportGroupType.BUS;
    details: FTFTransportSegmentBusDetails;
  }
  | {
    type: FTFTransportGroupType.CRUISE;
    details: FTFTransportSegmentCruiseDetails;
  }
  | {
    type: FTFTransportGroupType.TRAIN;
    details: FTFTransportSegmentTrainDetails;
  }
  | {
    type: FTFTransportGroupType.FERRY;
    details: FTFTransportSegmentFerryDetails;
  }
);
