import type { CDEntity } from "../entity";
import { BookingPaxPersonalDetails, BookingPaxType } from "../enums/bookingTypes";


export interface FTFIndependentTourBookingPax extends CDEntity {

  independentTourBookingRoomOID: string;

  type: BookingPaxType;
  personalDetails: BookingPaxPersonalDetails | null;
  mealPreference: string | null;
  documentOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
