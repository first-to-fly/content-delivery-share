import type { CDEntity } from "../entity";
import type { NamedURL } from "../url";

// Enums redefined for content-delivery-share, or should be imported if a shared enum strategy exists
export enum TourTransactionPaxType {
  TWIN = "twin",
  SINGLE = "single",
  TRIPLE = "triple",
  QUAD = "quad",
  CHILD_TWIN = "child_twin",
  CHILD_WITH_BED = "child_with_bed",
  CHILD_NO_BED = "child_no_bed",
  INFANT = "infant",
}

export interface FTFTourTransactionPax extends CDEntity {
  tenantOID: string;

  // Fields specific to TourTransactionPax
  tourTransactionOID: string;
  tourTransactionRoomOID: string;
  type: TourTransactionPaxType;
  isLandTourOnly: boolean;
  personalDetails: Record<string, unknown> | null;
  mealPreference: string | null;
  transportRecordOID: string | null;
  files: NamedURL[] | null;

  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string;
}
