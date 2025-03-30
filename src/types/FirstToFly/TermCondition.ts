import { CDEntity } from "../entity";


/**
 * @export
 * @interface FTFTermCondition
 * @extends {CDEntity}
 */
export interface FTFTermCondition extends CDEntity {
  tenantOID: string;

  name: string;
  pdf: string | null;
  isCustomized: boolean;
  isPrint: boolean;
  type: number | null;
  status: boolean;
  description: string | null;
  remarks: string | null;
  offlineOperator: string | null;
  productTypeOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
