import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFUsefulInfo
 * @extends {CDEntity}
 */

export interface FTFUsefulInfo extends CDEntity {
  name: string;

  productTypeOIDs: string[] | null;

  isActive: boolean;
  remarks: string | null;
  info: {
    otherInfo: string | null;
    tipping: string | null;
    visa: string | null;
    weather: string | null;
    optionalTours: string | null;
  } | null;

  applyToEntityOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
