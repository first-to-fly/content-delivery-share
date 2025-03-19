import { CDEntity } from "../entity";
import { TermType } from "../enums/term";
import { MultiLanguageData } from "../multipleLanguage";

/**
 * @export
 * @interface FTFTerm
 * @extends {CDEntity}
 */
export interface FTFTerm extends CDEntity {
  tenantOID: string;

  type: TermType;
  value: MultiLanguageData<string>;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
  deletedAt: string | null;
}
