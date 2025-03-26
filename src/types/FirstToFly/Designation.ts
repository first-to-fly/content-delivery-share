import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFDesignation
 * @extends {CDEntity}
 */
export interface FTFDesignation extends CDEntity {
  tenantOID: string;

  name: string;
  abbreviation: string;

  userOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
