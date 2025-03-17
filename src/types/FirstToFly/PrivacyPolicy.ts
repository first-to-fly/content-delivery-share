import { CDEntity } from "../entity";
import { NamedURL } from "../url";

/**
 * @export
 * @interface FTFPrivacyPolicy
 * @extends {CDEntity}
 */
export interface FTFPrivacyPolicy extends CDEntity {
  tenantOID: string;

  name: string;
  file: NamedURL;
  isActive: boolean;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
