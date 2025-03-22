import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFUserTenant
 * @extends {CDBaseEntity}
 */
export interface FTFUserTenant extends CDEntity {
  tenantOID: string;

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
