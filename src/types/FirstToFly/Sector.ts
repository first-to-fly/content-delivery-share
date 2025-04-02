import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFSector
 * @extends {CDEntity}
 */
export interface FTFSector extends CDEntity {
  tenantOID: string;

  name: string;
  isActive: boolean;
  images: string[] | null;
  parentOID: string | null;

  isPopular: boolean;
  productTypeOIDs: string[] | null;
  departmentOID: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
