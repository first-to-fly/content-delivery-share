import type { CDEntity } from "../entity";


export interface FTFReportTemplate extends CDEntity {
  key: string;
  tenantOID: string | null;
  template: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  createdBy: string | null;
  updatedBy: string | null;
}
