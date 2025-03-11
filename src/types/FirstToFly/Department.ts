import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFDepartment
 * @extends {CDBaseEntity}
 */
export interface FTFDepartment extends CDEntity {
  name: string;
  locationId: string;
  parentDepartmentId?: string;
  code: string;
  isActive: boolean;
}
