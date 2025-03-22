import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFMeal
 * @extends {CDEntity}
 */
export interface FTFMeal extends CDEntity {
  tenantOID: string;

  code: string;
  description: string;
  type: "Airline" | "Land" | "Cruise";
  seq: number;
  offlineOperator: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
