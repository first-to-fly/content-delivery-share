import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFReferenceCodeComponent
 * @extends {CDEntity}
 */
export interface FTFReferenceCodeComponent extends CDEntity {
  tenantOID: string;

  name: string;
  code: string;
  type: number;
  seq: number | null;
  description: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
