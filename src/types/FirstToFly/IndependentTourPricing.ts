export interface FTFIndependentTourPricing {
  oid: string;
  entityType: "independentTourPricing";

  independentTourPricingOID: string;
  independentTourProductOID: string;
  independentTourCostingOID: string;

  name: string;
  code: string;

  remarks: string | null;
  targetYieldPercentage: number;

  isActive: boolean;

  tenantOID: string;

  createdBy: string;
  updatedBy: string | null;

  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}
