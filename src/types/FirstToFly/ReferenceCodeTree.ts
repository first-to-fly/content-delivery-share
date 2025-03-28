import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFReferenceCodeTree
 * @extends {CDEntity}
 */
export interface FTFReferenceCodeTree extends CDEntity {
  tenantOID: string;

  name: string;
  moduleId: number;
  parentId: number | null;
  seq: number | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
