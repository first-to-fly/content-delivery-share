import { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";

/**
 * @export
 * @interface FTFGroupTourProduct
 * @extends {CDEntity}
 */
export interface FTFGroupTourProduct extends CDEntity {
  productCode: string;
  name: MultiLangRecord<string>;
  description: MultiLangRecord<string> | null;
  departmentOID: string;
  shoutout: MultiLangRecord<string> | null;
  writeup: MultiLangRecord<string> | null;
  highlights: MultiLangRecord<string> | null;
  importantNotes: MultiLangRecord<string> | null;
  inclusions: MultiLangRecord<string> | null;
  exclusions: MultiLangRecord<string> | null;
  durationDays: number | null;
  durationNights: number | null;
  validityStartDate: string | null;
  validityEndDate: string | null;
  salesPeriodStartDate: string | null;
  salesPeriodEndDate: string | null;
  isActive: boolean;
  published: boolean;

  tenantOID: string;
}
