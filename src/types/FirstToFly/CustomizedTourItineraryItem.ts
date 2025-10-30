import type { CDEntity } from "../entity";
import type { GeoPoint } from "./POI";
import type { RoomType } from "./RoomConfigurationRule";


export enum CustomizedTourItineraryItemCategory {
  ACCOMMODATION = "accommodation",
  TRANSPORT = "transport",
  ACTIVITY = "activity",
  FOOD_DINING = "food-dining",
  SERVICES = "services",
  OTHER = "other",
}


export interface FTFPOIAccommodationDetails {
  type: "poi-accommodation";
  poiOID: string;
  checkIn?: string | null;
  checkOut?: string | null;
  roomType?: RoomType | null;
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
  roomType?: RoomType | null;
  specialRequests?: string | null;
  notes?: string | null;
}

export type FTFCustomizedTourItineraryItemDetails =
  | FTFPOIAccommodationDetails
  | FTFFreeFormAccommodationDetails;

export interface FTFCustomizedTourItineraryItem extends CDEntity {
  tenantOID: string;
  dayOIDs: string[] | null;
  category: CustomizedTourItineraryItemCategory;
  supplierOID: string | null;
  name: string;
  details: FTFCustomizedTourItineraryItemDetails | null;
  internalRemarks?: string | null;
  externalRemarks?: string | null;
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
