import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFTermConditionProductType
 * @extends {CDEntity}
 */
export interface FTFTermConditionProductType extends CDEntity {
  tenantOID: string;

  termConditionOID: string;
  productTypeOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
