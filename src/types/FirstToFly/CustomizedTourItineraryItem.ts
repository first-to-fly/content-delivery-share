import type { CDEntity } from "../entity";
import type { GeoPoint } from "./POI";


export interface FTFPOIAccommodationDetails {
  type: "poi-accommodation";
  poiOID: string;
  checkIn?: string | null;
  checkOut?: string | null;
  roomType?: string | null;
  specialRequests?: string | null;
  notes?: string | null;
}

export interface FTFFreeFormAccommodationDetails {
  type: "free-form-accommodation";
  hotelName: string;
  address?: string | null;
  location?: GeoPoint | null;
  contactNumber?: string | null;
  checkIn?: string | null;
  checkOut?: string | null;
  roomType?: string | null;
  specialRequests?: string | null;
  notes?: string | null;
}

export type FTFCustomizedTourItineraryItemDetails =
  | FTFPOIAccommodationDetails
  | FTFFreeFormAccommodationDetails;

export interface FTFCustomizedTourItineraryItem extends CDEntity {
  tenantOID: string;
  customizedTourItineraryDayOID: string;
  category: string;
  supplierOID: string | null;
  name: string;
  details: FTFCustomizedTourItineraryItemDetails | null;
  costEstimated: number | null;
  priceQuoted: number | null;
  costActual: number | null;
  marginPercentage: number | null;
  linkedCostItemOID: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
