import type { CDEntity } from "../entity";

// Enums redefined for content-delivery-share, or should be imported if a shared enum strategy exists
export enum BookingRoomStatus {
  REQUESTED = "requested",
  CONFIRMED = "confirmed",
  WAITLISTED = "waitlisted",
  CANCELLED = "cancelled",
}

export interface FTFBookingRoom extends CDEntity {

  // Fields specific to BookingRoom
  // bookingRoomId: string; // Removed as oid is the primary CD identifier
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
