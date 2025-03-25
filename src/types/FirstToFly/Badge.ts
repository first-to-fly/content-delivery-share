import { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";

/**
 * @export
 * @interface FTFBadge
 * @extends {CDEntity}
 */
export interface FTFBadge extends CDEntity {
  tenantOID: string;

  image: MultiLangRecord<string>;
  isActive: boolean;
  icon: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
