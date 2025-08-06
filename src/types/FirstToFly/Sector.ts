import { CDEntity } from "../entity";
import { ProductType } from "../enums/productType";


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
  productTypes: ProductType[] | null;
  departmentOID: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
