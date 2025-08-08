import type { CDEntity } from "../entity";
import { BookingPaxPersonalDetails, BookingPaxType } from "../enums/bookingTypes";


// TODO: this is messy, clean this up
export type GroupTourBookingPaxType = BookingPaxType;
export const GroupTourBookingPaxType = BookingPaxType;
export type GroupTourBookingPaxPersonalDetails = BookingPaxPersonalDetails;

export interface FTFGroupTourBookingPax extends CDEntity {
  // Fields specific to GroupTourBookingPax
  bookingOID: string;
  bookingRoomOID: string;
  type: BookingPaxType;
  isLandTourOnly: boolean;
  personalDetails: GroupTourBookingPaxPersonalDetails | null;
  mealPreference: string | null;
  transportRecordOID: string | null;
  documentOIDs: string[] | null;

  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string;
}
