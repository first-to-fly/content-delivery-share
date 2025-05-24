import { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";
import { FTFGroupTourPricingDiscount } from "./GroupTourPricing";


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

  groupTourPricingOID: string;
  appliedItineraryOID: string;
  itineraryOID: string;

  budgetOID: string | null; // available at OPEN status

  departureCode: string;

  startingFullFare: number;
  startingLandFare: number;

  status: TourDepartureStatus;
  departureDate: string;
  transportType: TransportType;
  transportGroupOIDs: string[];
  durationDays: number;
  durationNights: number;
  totalCapacity: number;
  minimumPax: number;
  blockedCapacity: number;
  finalizationDate: string | null;
  paymentDueDate: string | null;
  assembleLocationAirlineOID: string | null;
  assembleAirlineLocationTime: string | null;
  description: MultiLangRecord<string> | null;
  isArchived: boolean;
  isCancelled: boolean;
  tourLeaderOIDs: string[] | null;
  tourManagerOIDs: string[] | null;

  discount: FTFGroupTourPricingDiscount | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
