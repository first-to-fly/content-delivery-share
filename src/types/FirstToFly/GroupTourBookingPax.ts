import type { CDEntity } from "../entity";
import type { BookingPaxPersonalDetails, BookingPaxType } from "../enums/bookingTypes";


export interface FTFGroupTourBookingPax extends CDEntity {
  // Fields specific to GroupTourBookingPax
  bookingOID: string;
  bookingRoomOID: string;
  type: BookingPaxType;
  isLandTourOnly: boolean;
  personalDetails: BookingPaxPersonalDetails | null;
  mealPreference: string | null;
  transportRecordOID: string | null;
  documentOIDs: string[] | null;
  remarks: string | null;
  isConfirmed: boolean;
  confirmedAt: string | null;

  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string | null;
}
