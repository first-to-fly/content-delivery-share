import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFReferenceCodeTree
 * @extends {CDEntity}
 */
export interface FTFReferenceCodeTree extends CDEntity {
  tenantOID: string;

  name: string;
  moduleId: string;
  parentId: string | null;
  seq: number | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
