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
  status: boolean;
  offlineOperator: string | null;
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

export interface FTFUsefulInfoRef extends CDEntity {
  usefulInfoOID: string;
  refId: number;
  name: string;
}

export interface FTFUsefulInfoProductType extends CDEntity {
  usefulInfoOID: string;
  productTypeOID: string;
  offlineOperator: string | null;
  productTypeName: string | null;
}
