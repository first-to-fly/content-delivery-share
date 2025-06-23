import { CDEntity } from "../entity";


export enum DepositType {
  PERCENTAGE = "percentage",
  FIXED = "fixed",
}

/**
 * @export
 * @interface FTFDeposit
 * @extends {CDEntity}
 */
export interface FTFDeposit extends CDEntity {
  tenantOID: string;

  name: string;
  minDeposit: number;
  type: DepositType;
  remarks: string | null;

  coveredEntityOIDs: string[];
  productTypeOIDs: string[] | null;

  isActive: boolean;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
