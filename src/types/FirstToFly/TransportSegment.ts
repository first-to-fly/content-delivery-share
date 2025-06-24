import { CDEntity } from "../entity";
import { TransportType } from "./TransportGroup";


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
  transportGroupOIDs: string[];

  originLocation: string;
  destinationLocation: string;
  departureDateTime: string;
  arrivalDateTime: string;

  seatCapacity: number | null;

  tenantOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
} & (
  | {
    type: TransportType.FLIGHT;
    details: FTFTransportSegmentFlightDetails;
  }
  | {
    type: TransportType.BUS;
    details: FTFTransportSegmentBusDetails;
  }
  | {
    type: TransportType.CRUISE;
    details: FTFTransportSegmentCruiseDetails;
  }
  | {
    type: TransportType.TRAIN;
    details: FTFTransportSegmentTrainDetails;
  }
  | {
    type: TransportType.FERRY;
    details: FTFTransportSegmentFerryDetails;
  }
);
