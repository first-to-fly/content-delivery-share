import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";

/**
 * @export
 * @interface FTFIndependentTourItineraryMeal
 * @extends {CDEntity}
 */
export interface FTFIndependentTourItineraryMeal extends CDEntity {
  independentTourItineraryDayOID: string;
  type: string;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;
  provided: boolean;
  onBoard: boolean;
  poiOID: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
