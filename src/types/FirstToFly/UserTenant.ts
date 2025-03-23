import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFUserTenant
 * @extends {CDBaseEntity}
 * @description A composite entity that holds the user's tenant specific data.
 * Its oid is the composite of the user's oid and the tenant's oid.
 * OID Structure: ftf-userTenant-[userOID]|[tenantOID]
 */
export interface FTFUserTenant extends CDEntity {
  tenantOID: string;

  designationOIDs: string[];
  departmentOIDs: string[];
  roleOIDs?: string[];

  isActive: boolean;
  staffType: string;
  buddyID?: string;

  tourLeadingSkills?: {
    sectorOID: string;
    termOID: string;
    startYear: number;
  }[];

  languageSkills?: {
    termOID: string;
  }[];

  documentOIDs?: string[];

}
