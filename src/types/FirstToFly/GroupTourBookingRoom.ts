import type { CDEntity } from "../entity";


export enum GroupTourBookingRoomStatus {
  REQUESTED = "requested",
  CONFIRMED = "confirmed",
  WAITLISTED = "waitlisted",
  CANCELLED = "cancelled",
}

export interface FTFGroupTourBookingRoom extends CDEntity {

  bookingOID: string;
  roomConfigurationRuleOID: string;
  roomNumber: string;
  isDbl: boolean;
  status: GroupTourBookingRoomStatus;
  notes: string | null;

  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string;
}
