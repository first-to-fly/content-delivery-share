import { CDEntity } from "../entity";
import { CoverageType } from "../enums/coverageType";

/**
 * @export
 * @interface FTFTermConditionCoverage
 * @extends {CDEntity}
 */
export interface FTFTermConditionCoverage extends CDEntity {
  tenantOID: string;

  coverageType: CoverageType;
  termConditionOID: string;
  coverageTypeOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
