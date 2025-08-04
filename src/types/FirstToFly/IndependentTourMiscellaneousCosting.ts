export interface FTFIndependentTourMiscellaneousCosting {
  oid: string;
  entityType: "independentTourMiscellaneousCosting";

  independentTourMiscellaneousCostingOID: string;
  independentTourCostingOID: string;

  name: string;
  costValue: {
    currency: string;
    amount: number;
    tax?: number;
  };

  tenantOID: string;

  createdBy: string;
  updatedBy: string | null;

  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}
