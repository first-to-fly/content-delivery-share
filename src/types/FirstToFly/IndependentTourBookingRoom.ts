import type { CDEntity } from "../entity";
import { BookingRoomStatus } from "../enums/bookingTypes";


export interface FTFIndependentTourBookingRoom extends CDEntity {

  independentTourBookingOID: string;

  roomNumber: string | null;
  status: BookingRoomStatus;
  notes: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
