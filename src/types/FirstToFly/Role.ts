import { CDEntity } from "../entity";


export interface FTFRole extends CDEntity {

  name: string;
  description: string;
  tenantOID: string;
  permissions: string[];
  userOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

}
