import type { CDEntity } from "../entity";


export interface FTFTenantConfig extends CDEntity {
  tenantOID: string;
  key: string;
  configValue: unknown;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}