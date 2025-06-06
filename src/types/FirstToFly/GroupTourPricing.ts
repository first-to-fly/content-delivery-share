import { CDEntity } from "../entity";


export interface FTFGroupTourPricingEntry {
  groupTourCostingEntryOID: string;
  priceValue: {
    currency: string;
    amount: number;
    tax: number;
  };
}

export interface FTFGroupTourPricingDiscount {
  tierConfigs: {
    from: number;
    to: number;
  }[];
  groups: {
    name: string;
    tierData: {
      [tierIndex: string]: {
        adult: number;
        child: number;
      };
    };
  }[];
}

export interface FTFGroupTourPricingFareStructure {
  twin: number;
  single: number;
  triple: number;
  quad: number;
  childTwin: number;
  childWithBed: number;
  childNoBed: number;
  infant: number;
}


/**
 * @export
 * @interface FTFGroupTourPricing
 * @extends {CDEntity}
 */
export interface FTFGroupTourPricing extends CDEntity {

  groupTourProductOID: string; // parent
  groupTourCostingOID: string; // cost linkage
  sectorOIDs: string[];

  name: string;
  code: string;

  remarks: string | null;
  targetYieldPercentage: number;

  validityStartDate: string;
  validityEndDate: string;

  isActive: boolean;
  tenantOID: string;

  fullFare: FTFGroupTourPricingFareStructure;

  landFare: FTFGroupTourPricingFareStructure;

  discount: FTFGroupTourPricingDiscount;

  airportTax: {
    adult: number;
    child: number;
  };

  groupTourPricingEntries: FTFGroupTourPricingEntry[];

  groupTourPNLSimulationOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
