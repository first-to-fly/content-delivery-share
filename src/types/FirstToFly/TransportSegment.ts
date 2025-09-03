import type { CDEntity } from "../entity";
import type { TransportType } from "./TransportGroup";


export enum FlightStatus {
  SCHEDULED = "scheduled",
  ACTIVE = "active",
  LANDED = "landed",
  CANCELLED = "cancelled",
  INCIDENT = "incident",
  DIVERTED = "diverted",
}

export interface FlightInfo {
  flightDate: string;
  flightStatus: FlightStatus;
  departure: {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: string | null;
    gate: string | null;
    delay: number | null;
    scheduled: string;
    estimated: string;
    actual: string | null;
    estimatedRunway: string | null;
    actualRunway: string | null;
  };
  arrival: {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: string | null;
    gate: string | null;
    baggage: string | null;
    delay: number | null;
    scheduled: string;
    estimated: string;
    actual: string | null;
    estimatedRunway: string | null;
    actualRunway: string | null;
  };
  airline: {
    name: string;
    iata: string;
    icao: string;
  };
  flight: {
    number: string;
    iata: string;
    icao: string;
    codeshared: {
      airlineName: string;
      airlineIata: string;
      airlineIcao: string;
      flightNumber: string;
      flightIata: string;
      flightIcao: string;
    } | null;
  };
  aircraft: {
    registration: string | null;
    iata: string | null;
    icao: string | null;
    icao24: string | null;
  } | null;
  live: {
    updated: string | null;
    latitude: number | null;
    longitude: number | null;
    altitude: number | null;
    direction: number | null;
    speedHorizontal: number | null;
    speedVertical: number | null;
    isGround: boolean | null;
  } | null;
}


export interface FTFTransportSegmentFlightDetails {
  flightNumber: string;
  class: string;
  departureDate: string;
  flightInfo?: FlightInfo;
  flightInfoUpdatedAt?: string;
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
  originLocation: string;
  destinationLocation: string;
  originTimezone: string;
  destinationTimezone: string;

  // Actual mode fields
  transportGroupOIDs: string[] | null; // Only used in actual mode
  departureDateTime: string | null;
  arrivalDateTime: string | null;
  seatCapacity: number | null;

  // Planning mode fields
  isPlanning: boolean | null;
  transportPlanOIDs: string[] | null; // Only used in planning mode
  plannedDepartureTime: string | null; // Time in "HH:MM" format
  plannedArrivalTime: string | null; // Time in "HH:MM" format

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
