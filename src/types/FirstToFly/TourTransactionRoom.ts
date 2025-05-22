import type { CDEntity } from "../entity";

// Enums redefined for content-delivery-share, or should be imported if a shared enum strategy exists
export enum TourTransactionRoomStatus {
  REQUESTED = "requested",
  CONFIRMED = "confirmed",
  WAITLISTED = "waitlisted",
  CANCELLED = "cancelled",
}

export interface FTFTourTransactionRoom extends CDEntity {

  // Fields specific to TourTransactionRoom
  // bookingRoomId: string; // Removed as oid is the primary CD identifier
  tourTransactionOID: string;
  roomConfigurationRuleOID: string;
  roomNumber: string;
  isDbl: boolean;
  status: TourTransactionRoomStatus;
  notes: string | null;

  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string;
}
