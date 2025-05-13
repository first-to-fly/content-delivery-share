import type { CDEntityType } from "../entity";

// Enums redefined for content-delivery-share, or should be imported if a shared enum strategy exists
export enum TourTransactionPaxTypeEnum {
  TWIN = "twin",
  SINGLE = "single",
  TRIPLE = "triple",
  QUAD = "quad",
  CHILD_TWIN = "child_twin",
  CHILD_WITH_BED = "child_with_bed",
  CHILD_NO_BED = "child_no_bed",
  INFANT = "infant",
}

export interface TourTransactionPax {
  // Fields from EntityZ (firsttofly-travel-share)
  oid: string;
  entityType: CDEntityType; // This should be CDEntityType.TOUR_TRANSACTION_PAX
  tenantOID: string;
  createdBy: string;
  updatedBy: string | null;
  createdAt: string; // ISO Date string
  updatedAt: string | null; // ISO Date string
  deletedAt: string | null; // ISO Date string

  // Fields specific to TourTransactionPax
  paxId: string;
  // bookingId: string; // Removed
  bookingRoomId: string;
  type: TourTransactionPaxTypeEnum;
  isLandTourOnly: boolean;
  personalDetails: Record<string, unknown> | null;
  mealPreference: string | null;
  transportRecordId: string | null;
}
