import { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";


export enum TourDepartureStatus {
  DRAFT = "draft",
  CONFIRMED = "confirmed",
  OPEN = "open",
  CLOSED = "closed",
  CANCELLED = "cancelled",
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

  productPricingOID: string;
  appliedItineraryOID: string;
  itineraryOID: string;

  departureCode: string;

  status: TourDepartureStatus;
  departureDate: string;
  transportType: TransportType;
  transportGroupOIDs: string[];
  durationDays: number;
  durationNights: number;
  finalizationDate: string | null;
  paymentDueDate: string | null;
  assemblyDetails: AssemblyDetails | null;
  description: MultiLangRecord<string> | null;
  isArchived: boolean;
  tourLeaderOIDs: string[] | null;
  tourManagerOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
