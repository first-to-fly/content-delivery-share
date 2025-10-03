import type { CDEntity } from "../entity";


/**
 * @export
 * @interface FTFTenantAPI
 * @extends {CDEntity}
 */
export interface FTFTenantAPI extends CDEntity {
  tenantOID: string;
  name: string;
  status: string; // "active" | "inactive" | "revoked"
  keyId: string;
  secretMasked: string;
  revokedAt: string | null;
  lastUsedAt: string | null;
  lastUsedIp: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
