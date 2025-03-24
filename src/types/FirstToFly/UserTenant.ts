import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFUserTenant
 * @extends {CDBaseEntity}
 * @description A composite entity that holds the user's tenant specific data.
 * Its oid is the composite of the user's oid and the tenant's oid.
 * OID Structure: ftf-userTenant-[userID]|[tenantID]
 */
export interface FTFUserTenant extends CDEntity {
  tenantOID: string;

  designationOIDs: string[];
  departmentOIDs: string[];
  roleOIDs?: string[];

  isActive: boolean;
  staffType: string;
  buddyOID?: string;

  tourLeadingSkills?: {
    sectorOID: string;
    termOID: string;
    startYear: number;
  }[];

  languageSkills?: {
    termOID: string;
  }[];

  documentOIDs?: string[];

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;

}
