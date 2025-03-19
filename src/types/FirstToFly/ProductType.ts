import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFProductType
 * @extends {CDEntity}
 */
export interface FTFProductType extends CDEntity {
  tenantOID: string;
  name: string;
}
