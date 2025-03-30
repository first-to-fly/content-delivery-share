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
  status: string | null;
  isCustomized: boolean | null;
  offlineOperator: string | null;

  // Relationships
  sectorOIDs?: string[];
  sectorGroupOIDs?: string[];
  productOIDs?: string[];
  participatorOIDs?: string[];
  personInChargeOIDs?: string[];
  productTypeOIDs?: string[];

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
  deletedAt: string | null;
}
