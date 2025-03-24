import { CDBaseEntity } from "../entity";

export interface FTFRole extends CDBaseEntity {
  oid: string;
  name: string;
  tenantOID: string;
  permissions: string[];
  userOIDs: string[];
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}