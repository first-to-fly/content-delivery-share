import { CDEntity } from "../entity";


export enum CostingItemCategory {
  AIRLINE = "airline",
  ACCOMMODATION = "accommodation",
  LAND_TOUR = "land-tour",
  MARKETING = "marketing",
  TOUR_LEAD = "tour-lead",
  DISCOUNT = "discount",
  COMMISSION = "commission",
  OTHER = "other",
  MISCELLANEOUS = "miscellaneous",
  OPTIONAL_SERVICE = "optional-service",
}

export enum CalculationBasis {
  PER_PAX = "per-pax",
  PER_TRIP = "per-trip",
  PER_TOUR_LEAD = "per-tour-lead",
  PER_TOUR_MANAGER = "per-tour-manager",
  PER_TOUR_LEAD_OR_MANAGER = "per-tour-lead-or-manager",
}

export enum PackageType {
  BOTH = "both",
  FULL_ONLY = "full-only",
  LAND_ONLY = "land-only",
}

export enum OccupancyType {
  ALL = "all",
  EXCEPT_INFANT = "except-infant",
  ADULT = "adult",
  CHILD = "child",
  SINGLE = "single",
  TWIN = "twin",
  TRIPLE = "triple",
  QUAD = "quad",
  CHILD_TWIN = "child-twin",
  CHILD_WITH_BED = "child-with-bed",
  CHILD_NO_BED = "child-no-bed",
  INFANT = "infant",
}

export interface FTFCostingItem extends CDEntity {
  name: string;
  category: CostingItemCategory;
  calculationBasis: CalculationBasis;
  applyToPackageType: PackageType;
  applyToOccupancyType: OccupancyType;

  remarks: string | null;
  isActive: boolean;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
