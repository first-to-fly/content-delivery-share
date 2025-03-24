import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFUser
 * @extends {CDBaseEntity}
 */
export interface FTFUser extends CDEntity {

  email: string;

  firstName: string;
  lastName: string;
  preferredName: string;
  dob: Date;
  otherNames?: Record<string, string>;
  mobile: number;
  altMobile?: number;
  personalEmail?: string;
  images?: string[];
  avatar?: string;
  emergencyContact?: {
    name: string;
    relationship?: string;
    mobile: number;
    email?: string;
  };
  description?: string;
  salutation: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;

}
