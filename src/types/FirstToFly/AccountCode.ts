import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFAccountCode
 * @extends {CDEntity}
 */
export interface FTFAccountCode extends CDEntity {
  tenantOID: string;

  code: string;
  name: string;
  description: string | null;
  type: string;
  status: string;
  currency: string | null;

  xeroAccountId: string | null;
  xeroAccountCode: string | null;
  xeroSyncStatus: string | null;
  xeroSyncedAt: string | null;

  isSystemGenerated: boolean;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
