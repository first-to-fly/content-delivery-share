import type { CDEntity } from "../entity";


export enum BookingRoomStatus {
  REQUESTED = "requested",
  CONFIRMED = "confirmed",
  WAITLISTED = "waitlisted",
  CANCELLED = "cancelled",
}

export interface FTFIndependentTourBookingRoom extends CDEntity {

  independentTourBookingOID: string;
  
  roomNumber: string | null;
  status: string; // BookingRoomStatus as string
  notes: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
