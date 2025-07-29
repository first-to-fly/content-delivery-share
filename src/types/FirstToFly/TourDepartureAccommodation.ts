import { CDEntity } from "../entity";
import { GeoPoint } from "./POI";


export interface FTFTourDepartureAccommodation extends CDEntity {
  tenantOID: string;
  tourDepartureOID: string;

  name: string; // Resolved multilanguage field
  checkIn: string; // ISO datetime string
  checkOut: string; // ISO datetime string
  location: GeoPoint;
  contact: string;
  address: string;
  description: string; // Resolved multilanguage field
  remarks: string | null;
  poiOID: string | null;
  countryCode: string;
  cityCode: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
