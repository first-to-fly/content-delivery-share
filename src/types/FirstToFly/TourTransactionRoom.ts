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
  entityType: CDEntityType;
  tenantOID: string;
  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;

  // Fields specific to TourTransactionRoom
  // bookingRoomId: string; // Removed as oid is the primary CD identifier
  tourTransactionOID: string;
  roomConfigurationRuleOID: string;
  roomNumber: string | null;
  isDbl: boolean;
  status: TourTransactionRoomStatusEnum;
  notes: string | null;
}
