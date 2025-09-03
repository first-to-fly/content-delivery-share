import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";

/**
 * @export
 * @interface FTFIndependentTourItineraryEvent
 * @extends {CDEntity}
 */
export interface FTFIndependentTourItineraryEvent extends CDEntity {
  independentTourItineraryDayOID: string;
  seq: number;
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;
  poiOID: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
