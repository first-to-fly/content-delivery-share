import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFSectorGroup
 * @extends {CDEntity}
 */
export interface FTFSectorGroup extends CDEntity {
  tenantOID: string;

  name: string;
  isActive: boolean;
  sectorOIDs: string[];

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
