import { CDEntity } from "../entity";
import { ProductType } from "../enums/productType";
import { NamedURL } from "../url";


export enum TermConditionType {
  TERM_CONDITION = "term-condition",
  ADDENDUM = "addendum",
}


/**
 * @export
 * @interface FTFTermCondition
 * @extends {CDEntity}
 */
export interface FTFTermCondition extends CDEntity {
  tenantOID: string;

  name: string;

  pdf: NamedURL | null;

  isCustomized: boolean;
  isPrint: boolean;

  type: TermConditionType;

  isActive: boolean;
  description: string | null;
  remarks: string | null;

  coveredEntityOIDs: string[];

  productTypes: ProductType[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
