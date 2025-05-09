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
  location?: string | null;
  time?: string | null;
};

export type TourDeparture = {
  tourDepartureId: string;
  tenantId: string;
  productPricingId: string;
  appliedItineraryId: string;
  itineraryId: string;
  departureCode: string;
  status: TourDepartureStatus;
  departureDate: string;
  transportType?: TransportType | null;
  transportGroupIds?: string[] | null;
  durationDays: number;
  durationNights: number;
  finalizationDate?: string | null;
  paymentDueDate?: string | null;
  assemblyDetails?: AssemblyDetails | null;
  description?: MultiLangRecord<string> | null;
  isArchived: boolean;
  tourLeaderIds?: string[] | null;
  tourManagerIds?: string[] | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
};
