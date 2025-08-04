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

export interface FTFMedia {
  oid: string;
  entityType: "media";
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
