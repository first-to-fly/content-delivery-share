import type { CDEntity } from "../entity";
import { BookingRoomStatus } from "../enums/bookingTypes";
import { RoomOccupancy } from "./RoomConfigurationRule";


export interface FTFIndependentTourBookingRoom extends CDEntity {

  independentTourBookingOID: string;

  roomNumber: string | null;
  status: BookingRoomStatus;
  occupancy: RoomOccupancy;
  notes: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
