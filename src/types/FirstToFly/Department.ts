import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFDepartment
 * @extends {CDEntity}
 */
export interface FTFDepartment extends CDEntity {
  tenantOID: string;

  name: string;
  locationOID: string;
  parentDepartmentOID: string | null;
  code: string;
  isActive: boolean;

  userOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

}
