import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFTermConditionProductTypes
 * @extends {CDEntity}
 */
export interface FTFTermConditionProductTypes extends CDEntity {
  tenantOID: string;

  termConditionOID: string;
  productTypeOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
