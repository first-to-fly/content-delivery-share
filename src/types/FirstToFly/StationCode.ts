import type { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFStationCode
 * @extends {CDEntity}
 */
export interface FTFStationCode extends CDEntity {
  tenantOID: string;

  code: string;
  isActive: boolean;
  seq: number;

  departmentOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
