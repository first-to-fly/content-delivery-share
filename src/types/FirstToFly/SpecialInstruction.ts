import type { CDEntity } from "../entity";
import type { ProductType } from "../enums/productType";

/**
 * @export
 * @interface FTFSpecialInstruction
 * @extends {CDEntity}
 */
export interface FTFSpecialInstruction extends CDEntity {
  tenantOID: string;
  isPreset: boolean;
  description: string | null;
  remarks: string | null;
  isActive: boolean;
  isCustomized: boolean | null;

  // Relationships
  coveredEntityOIDs: string[];
  productTypes: ProductType[];

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
