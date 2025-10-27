import type { CDEntity } from "../entity";
import type { BookingPaxPersonalDetails, BookingPaxType } from "../enums/bookingTypes";


export interface FTFCustomizedTourBookingPax extends CDEntity {

  customizedTourBookingOID: string;

  type: BookingPaxType;
  personalDetails: BookingPaxPersonalDetails | null;
  mealPreference: string | null;
  documentOIDs: string[] | null;
  remarks: string | null;
  isConfirmed: boolean;
  confirmedAt: string | null;
  confirmedByEmail: string | null;
  isLocked: boolean;
  lockedAt: string | null;
  lockedBy: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
