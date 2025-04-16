import { CDEntity } from "../entity";
import { CoverageType } from "../enums/coverageType";

/**
 * @export
 * @interface FTFUsefulInfo
 * @extends {CDEntity}
 */

export interface FTFUsefulInfo extends CDEntity {
  name: string;
  coverageType: CoverageType;
  isActive: boolean;
  remarks: string | null;
  info: {
    otherInfo: string | null;
    tipping: string | null;
    visa: string | null;
    weather: string | null;
    optionalTours: string | null;
  } | null;
  refOIDs: string[] | null;
  productTypeOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
