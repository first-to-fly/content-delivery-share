export interface FTFIndependentTourMiscellaneous {
  oid: string;
  entityType: "independentTourMiscellaneous";

  independentTourProductOID: string;

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
