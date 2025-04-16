import { CDEntity } from "../entity";


export enum MealType {
  AIRLINE = "airline",
  LAND = "land",
  CRUISE = "cruise",
}

/**
 * @export
 * @interface FTFMeal
 * @extends {CDEntity}
 */
export interface FTFMeal extends CDEntity {
  tenantOID: string;

  code: string;
  description: string;
  type: MealType;
  seq: number;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
