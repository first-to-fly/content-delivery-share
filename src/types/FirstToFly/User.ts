import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFUser
 * @extends {CDBaseEntity}
 */
export interface FTFUser extends CDEntity {
  displayName: string;
  avatarURL: string;
  email: string;
  emailVerified: boolean;
  username: string | null;

  departmentID: string;

}
