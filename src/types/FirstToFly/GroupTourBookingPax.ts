import type { CDEntity } from "../entity";
import type { BookingPaxPersonalDetails, BookingPaxType } from "./IndependentTourBookingPax";

// Use unified types for backward compatibility
export type GroupTourBookingPaxType = BookingPaxType;
export type GroupTourBookingPaxPersonalDetails = BookingPaxPersonalDetails;

export interface FTFGroupTourBookingPax extends CDEntity {
  // Fields specific to GroupTourBookingPax
  bookingOID: string;
  bookingRoomOID: string;
  type: GroupTourBookingPaxType;
  isLandTourOnly: boolean;
  personalDetails: GroupTourBookingPaxPersonalDetails | null;
  mealPreference: string | null;
  transportRecordOID: string | null;
  documentOIDs: string[] | null;

  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string | null;
}
