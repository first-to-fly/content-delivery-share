import type { CDEntity } from "../entity";


export enum BookingRoomStatus {
  REQUESTED = "requested",
  CONFIRMED = "confirmed",
  WAITLISTED = "waitlisted",
  CANCELLED = "cancelled",
}

export interface FTFIndependentTourBookingRoom extends CDEntity {

  independentTourBookingOID: string;

  roomName?: string;
  roomType: string; // e.g., "twin", "single", "triple", "quad"
  roomStatus: BookingRoomStatus;

  // Room allocation details
  adultsCount: number;
  childrenCount: number;
  infantsCount: number;

  // Room preferences
  bedPreference?: string; // e.g., "twin beds", "double bed"
  floorPreference?: string;
  viewPreference?: string;
  specialRequests?: string[];

  // Pricing
  roomPrice?: number;
  extraBedPrice?: number;

  // Confirmation details
  confirmationNumber?: string;
  confirmedAt?: string; // ISO date string

  // Passenger OIDs assigned to this room
  paxOIDs: string[];

  sortOrder?: number;

  // Timestamps
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy?: string;
}
