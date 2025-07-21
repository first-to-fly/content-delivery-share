import { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";
import { NamedURL } from "../url";

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

  files: NamedURL[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
