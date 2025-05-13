import type { CDEntityType } from "../entity";

// Enums redefined for content-delivery-share, or should be imported if a shared enum strategy exists
export enum TourTransactionRoomStatusEnum {
  REQUESTED = "requested",
  CONFIRMED = "confirmed",
  WAITLISTED = "waitlisted",
  CANCELLED = "cancelled",
}

export interface TourTransactionRoom {
  // Fields from EntityZ (firsttofly-travel-share)
  oid: string;
  entityType: CDEntityType; // This should be CDEntityType.TOUR_TRANSACTION_ROOM
  tenantOID: string;
  createdBy: string;
  updatedBy: string | null;
  createdAt: string; // ISO Date string
  updatedAt: string | null; // ISO Date string
  deletedAt: string | null; // ISO Date string

  // Fields specific to TourTransactionRoom
  bookingRoomId: string;
  bookingId: string;
  roomConfigurationRuleId: string;
  roomNumber: string | null;
  isDbl: boolean;
  status: TourTransactionRoomStatusEnum;
  notes: string | null;
}
