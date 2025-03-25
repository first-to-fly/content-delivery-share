import { CDEntity } from "../entity";
import { InsuranceDiscountType } from "../enums/discount";

/**
 * @export
 * @enum {number}
 */

/**
 * @export
 * @interface FTFInsuranceDiscount
 * @extends {CDEntity}
 */
export interface FTFInsuranceDiscount extends CDEntity {
  tenantOID: string;

  code: string;
  name: string;
  startDate: string;
  endDate: string;
  type: InsuranceDiscountType;
  valuePercentage: number | null; // Value for primary discount (percentage or fixed amount)
  valueFixed: number | null; // Value for secondary discount (if needed)
  remarks: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
