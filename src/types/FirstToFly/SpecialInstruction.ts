import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFSpecialInstruction
 * @extends {CDEntity}
 */
export interface FTFSpecialInstruction extends CDEntity {
  tenantOID: string;
  isPrepare: boolean;
  description: string | null;
  remark: string | null;
  isActive: boolean;
  isCustomized: boolean | null;

  // Relationships
  sectorOIDs?: string[];
  sectorGroupOIDs?: string[];
  productOIDs?: string[];
  productTypeOIDs?: string[];

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
