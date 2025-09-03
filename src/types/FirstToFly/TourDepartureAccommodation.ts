import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";
import type { GeoPoint } from "./POI";


export interface FTFTourDepartureAccommodation extends CDEntity {
  tenantOID: string;
  tourDepartureOID: string;

  name: MultiLangRecord<string>;
  checkIn: string; // ISO datetime string
  checkOut: string; // ISO datetime string
  location: GeoPoint;
  contact: string;
  address: string;
  description: MultiLangRecord<string>
  remarks: string | null;
  poiOID: string | null;
  countryCode: string;
  cityCode: string;
  dev: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
