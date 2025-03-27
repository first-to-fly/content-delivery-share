import { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";

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
  dob: string;
  otherNames: MultiLangRecord<string> | null;
  mobile: number;
  altMobile: number | null;
  personalEmail: string | null;
  images: string[] | null;
  avatar: string | null;
  emergencyContact: {
    name: string;
    relationship?: string;
    mobile: number;
    email?: string;
  } | null;
  description: string | null;
  salutation: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

}
