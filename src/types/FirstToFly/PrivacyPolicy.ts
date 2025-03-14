import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFPrivacyPolicy
 * @extends {CDEntity}
 */
export interface FTFPrivacyPolicy extends CDEntity {
  tenantOID: string;

  name: string;
  fileURL: string;
  isActive: boolean;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
