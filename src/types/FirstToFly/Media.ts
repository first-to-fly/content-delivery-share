import { CDEntity } from "../entity";

export enum MediaType {
  PHOTO = "photo",
  VIDEO = "video",
}

export interface MediaDimensions {
  width: number;
  height: number;
}

export interface MediaRelevantLocation {
  countryCode: string;
  cities: string[];
}

export interface FTFMedia extends CDEntity {
  tenantOID: string;

  type: MediaType;
  name: string;
  url: string;
  size: number | null;
  dimensions: MediaDimensions | null;
  description: string | null;
  relevantLocations: MediaRelevantLocation[] | null;

  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string;
}
