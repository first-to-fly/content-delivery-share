import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFUser
 * @extends {CDBaseEntity}
 */
export interface FTFUser extends CDEntity {
  tenantOID: string;

  displayName: string;
  avatarURL: string;
  email: string;
  emailVerified: boolean;

  departmentOID: string;

  tourLeadingSkills: {
    sectorOID: string;
    termOID: string;
    startYear: number;
    // noOfTours: number;
  }[] | null;

}
