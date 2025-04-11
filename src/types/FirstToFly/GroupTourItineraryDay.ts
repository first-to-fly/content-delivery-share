import { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";

/**
 * @export
 * @interface FTFGroupTourItineraryDay
 * @extends {CDEntity}
 */
export interface FTFGroupTourItineraryDay extends CDEntity {
  groupTourItineraryOID: string;

  dayNumber: number; // order number of the day in the itinerary
  title: MultiLangRecord<string>;
  description: MultiLangRecord<string>;

  groupTourItineraryMealOIDs: string[] | null;
  groupTourItineraryEventOIDs: string[] | null;
}
