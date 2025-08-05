export interface FTFIndependentTourCosting {
  oid: string;
  entityType: "independentTourCosting";

  independentTourCostingOID: string;
  independentTourProductOID: string;

  name: string;
  code: string;

  remarks: string | null;

  isActive: boolean;

  independentTourAccommodationCostingOIDs: string[];
  independentTourOptionalServiceCostingOIDs: string[];
  independentTourMiscellaneousCostingOIDs: string[];

  tenantOID: string;

  createdBy: string;
  updatedBy: string | null;

  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}
