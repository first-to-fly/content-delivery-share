import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFGroupTourCosting
 * @extends {CDEntity}
 */
export interface FTFGroupTourCosting extends CDEntity {
  groupTourProductOID: string;
  templateOID: string;
  name: string;
  code: string;
  remarks: string | null;
  validityStartDate: string | null;
  validityEndDate: string | null;
  isActive: boolean;
  tenantOID: string;
}
