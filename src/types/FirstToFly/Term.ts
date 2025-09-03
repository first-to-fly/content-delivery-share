import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";


export enum TermType {
  TOUR_LEADING_SKILL = "tour-leading-skill",
  LANGUAGE_SKILL = "language-skill",
}

/**
 * @export
 * @interface FTFTerm
 * @extends {CDEntity}
 */
export interface FTFTerm extends CDEntity {
  tenantOID: string;

  type: TermType;
  value: MultiLangRecord<string>;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
