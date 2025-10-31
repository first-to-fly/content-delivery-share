import type { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFTaxType
 * @extends {CDEntity}
 */
export interface FTFTaxType extends CDEntity {
  tenantOID: string;

  code: string;
  name: string;
  effectiveRate: number;
  isActive: boolean;

  xeroTaxTypeId: string | null;
  xeroSyncStatus: string | null;
  xeroSyncedAt: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
