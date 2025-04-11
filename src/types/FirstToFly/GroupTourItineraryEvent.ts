import { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";

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
}
