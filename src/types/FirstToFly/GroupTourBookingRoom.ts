import type { CDEntity } from "../entity";
import type { BookingRoomStatus } from "../enums/bookingTypes";


export interface FTFGroupTourBookingRoom extends CDEntity {

  bookingOID: string;
  roomConfigurationRuleOID: string;
  roomNumber: string;
  isDbl: boolean;
  status: BookingRoomStatus;
  notes: string | null;

  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string;
}
