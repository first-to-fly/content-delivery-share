export interface FTFIndependentTourOptionalService {
  oid: string;
  entityType: "independentTourOptionalService";

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
