import type { CDEntityType } from "../entity";
import type { NamedURL } from "../url";

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
  entityType: CDEntityType;
  tenantOID: string;
  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;

  // Fields specific to TourTransactionPax
  tourTransactionRoomOID: string;
  type: TourTransactionPaxTypeEnum;
  isLandTourOnly: boolean;
  personalDetails: Record<string, unknown> | null;
  mealPreference: string | null;
  transportRecordOID: string | null;
  files: NamedURL[] | null;
}
