import { CDEntity } from "../entity";


export interface FTFGroupTourPricingEntry {
  groupTourCostingEntryOID: string;
  priceValue: {
    currency: string;
    amount: number;
    tax: number;
  };
}
/**
 * @export
 * @interface FTFGroupTourPricing
 * @extends {CDEntity}
 */
export interface FTFGroupTourPricing extends CDEntity {

  groupTourCostingOID: string;

  name: string;
  code: string;

  remarks: string | null;
  targetYieldPercentage: number;

  validityStartDate: string;
  validityEndDate: string;

  isActive: boolean;
  tenantOID: string;

  fullFare: {
    twin: number;
    single: number;
    triple: number;
    quad: number;
    childTwin: number;
    childWithBed: number;
    childNoBed: number;
    infant: number;
  };

  landFare: {
    twin: number;
    single: number;
    triple: number;
    quad: number;
    childTwin: number;
    childWithBed: number;
    childNoBed: number;
    infant: number;
  };

  discount: {
    tierConfigs: {
      from: number;
      to: number;
    }[];
    groups: {
      name: string;
      tierData: {
        [tierIndex: number]: {
          adult: number;
          child: number;
        };
      };
    }[];
  };

  airportTax: {
    adult: number;
    child: number;
  };

  groupTourPricingEntries: FTFGroupTourPricingEntry[];
}
