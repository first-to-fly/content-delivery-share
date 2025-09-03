import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";
import type { NamedURL } from "../url";

/**
 * @export
 * @interface FTFIndependentTourItineraryDay
 * @extends {CDEntity}
 */
export interface FTFIndependentTourItineraryDay extends CDEntity {
  independentTourItineraryOID: string;
  dayNumber: number;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;
  files: NamedURL[] | null;

  independentTourItineraryMealOIDs: string[] | null;
  independentTourItineraryEventOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
