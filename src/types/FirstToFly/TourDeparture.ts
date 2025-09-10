import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";
import type { FTFGroupTourPricingDiscount } from "./GroupTourPricing";


export enum TourDepartureStatus {
  DRAFT = "draft",
  CONFIRMED = "confirmed",
  OPEN = "open",
  CLOSED = "closed",
}

export enum TransportType {
  FLIGHT = "flight",
  BUS = "bus",
  CRUISE = "cruise",
  TRAIN = "train",
  FERRY = "ferry",
}

export type AssemblyDetails = {
  location: string | null;
  time: string | null;
};

export interface FTFTourDeparture extends CDEntity {
  tenantOID: string;

  groupTourProductOID: string;
  groupTourPricingOID: string;
  appliedItineraryOID: string;
  itineraryOID: string;
  sectorOIDs: string[];

  budgetOID: string | null; // available at OPEN status

  departureCode: string;
  customTourName: string | null;

  startingFullFare: number;
  startingLandFare: number;

  status: TourDepartureStatus;
  departureDate: string;
  transportType: TransportType | null;
  transportGroupOIDs: string[] | null;
  durationDays: number;
  durationNights: number;
  totalCapacity: number;
  minimumPax: number;
  blockedCapacity: number;
  finalizationDate: string | null;
  paymentDueDate: string | null;
  assembleLocationAirlineOID: string | null;
  assembleAirlineLocationTime: string | null;
  hkSeat: number | null;
  description: MultiLangRecord<string> | null;
  isArchived: boolean;
  isCancelled: boolean;
  tourLeaderOIDs: string[] | null;
  tourManagerOIDs: string[] | null;
  accommodationOIDs: string[] | null;

  livePaxCount: number; // number of pax in live bookings (including in_progress bookings)
  bookedPaxCount: number; // number of pax in booked bookings

  liveRoomCount: number; // number of rooms in live bookings (including in_progress bookings)
  bookedRoomCount: number; // number of rooms in booked bookings

  discount: FTFGroupTourPricingDiscount | null;

  countriesCovered: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
