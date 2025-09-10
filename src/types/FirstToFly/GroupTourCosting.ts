import type { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFGroupTourCosting
 * @extends {CDEntity}
 */
export interface FTFGroupTourCosting extends CDEntity {

  groupTourProductOID: string; // parent
  sectorOIDs: string[];

  templateOID: string;
  name: string;
  code: string;

  remarks: string | null;

  validityStartDate: string;
  validityEndDate: string;

  isActive: boolean;

  airlineOIDs: string[] | null;

  landTourGroupSizeTiers: {
    from: number;
    to: number;
  }[];

  freeOfChargeTiers: {
    pax: number;
    freePax: number;
  }[] | null;

  leadManagerCountTiers: {
    pax: number;
    leadCount: number;
    managerCount: number;
  }[] | null;

  groupTourCostingEntryOIDs: string[];

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
