import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";


export enum MealType {
  BREAKFAST = "breakfast",
  LUNCH = "lunch",
  DINNER = "dinner",
}

/**
 * @export
 * @interface FTFGroupTourItineraryMeal
 * @extends {CDEntity}
 */
export interface FTFGroupTourItineraryMeal extends CDEntity {
  groupTourItineraryDayOID: string;

  type: MealType;
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
