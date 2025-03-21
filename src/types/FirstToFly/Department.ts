import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFDepartment
 * @extends {CDBaseEntity}
 */
export interface FTFDepartment extends CDEntity {
  tenantOID: string;

  name: string;
  locationOID: string;
  parentDepartmentOID: string | null;
  code: string;
  isActive: boolean;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

}
