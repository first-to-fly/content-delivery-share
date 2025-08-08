import type { CDEntity } from "../entity";


export interface FTFIndependentTourOptionalService extends CDEntity {

  independentTourProductOID: string;

  name: string;
  costValue: {
    currency: string;
    amount: number;
    tax?: number;
  };
  priceValue: {
    currency: string;
    amount: number;
    tax: number;
  };

  tenantOID: string;

  createdBy: string;
  updatedBy: string | null;

  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}
