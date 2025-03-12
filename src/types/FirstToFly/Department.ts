import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFDepartment
 * @extends {CDBaseEntity}
 */
export interface FTFDepartment extends CDEntity {
  tenantOid: string;

  name: string;
  locationOid: string;
  parentDepartmentOid?: string;
  code: string;
  isActive: boolean;
}
