import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";

/**
 * @export
 * @interface FTFGroupTourItineraryEvent
 * @extends {CDEntity}
 */
export interface FTFGroupTourItineraryEvent extends CDEntity {
  groupTourItineraryDayOID: string;

  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;

  poiOID: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
