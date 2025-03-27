import { CDEntity } from "../entity";


export enum InsuranceDiscountType {
  PERCENTAGE = "percentage",
  FIXED = "fixed",
}

/**
 * @export
 * @interface FTFInsuranceDiscount
 * @extends {CDEntity}
 */
export interface FTFInsuranceDiscount extends CDEntity {
  tenantOID: string;

  code: number;
  name: string;
  startDate: string;
  endDate: string;
  type: InsuranceDiscountType;
  valuePercentage: number; // Value for primary discount (percentage or fixed amount)
  valueFixed: number; // Value for secondary discount (if needed)
  remarks: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
