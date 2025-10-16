import type { CDEntity } from "../entity";
import type { BookingPaxType } from "../enums/bookingTypes";


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

export enum PricingMatrixChangeType {
  RETAIL_PRICE = "RETAIL_PRICE",
  DISCOUNT = "DISCOUNT",
  GROUP_VOLUME = "GROUP_VOLUME",
}

export interface BasePricingMatrixChange {
  id: string;
  timestamp: string;
  userOID: string;
  description: string;
}

export interface PricingMatrixRetailPriceChange extends BasePricingMatrixChange {
  previousValues: {
    retailPrices: FTFGroupTourPricingFareStructure;
  };
  newValues: {
    retailPrices: FTFGroupTourPricingFareStructure;
  };
}

export interface PricingMatrixDiscountChange extends BasePricingMatrixChange {
  previousValues: {
    discounts: FTFGroupTourPricingDiscount[];
  };
  newValues: {
    discounts: FTFGroupTourPricingDiscount[];
  };
}

export interface PricingMatrixGroupVolumeChange extends BasePricingMatrixChange {
  previousValues: {
    tierConfigs: Array<{
      from: number;
      to: number;
    }>;
  };
  newValues: {
    tierConfigs: Array<{
      from: number;
      to: number;
    }>;
  };
}

export interface GroupTourPricingMatrixChangeHistory {
  retailPriceChanges: PricingMatrixRetailPriceChange[];
  discountChanges: PricingMatrixDiscountChange[];
  groupVolumeChanges: PricingMatrixGroupVolumeChange[];
  landRetailPriceChanges: PricingMatrixRetailPriceChange[];
  landGroupVolumeChanges: PricingMatrixGroupVolumeChange[];
}


/**
 * @export
 * @interface FTFGroupTourPricing
 * @extends {CDEntity}
 */
export interface FTFGroupTourPricing extends CDEntity {

  groupTourProductOID: string; // parent
  groupTourCostingOID: string; // cost linkage
  sectorOID: string;

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

  discount: FTFGroupTourPricingDiscount | null;

  airportTax: {
    adult: number;
    child: number;
  };

  groupTourPricingEntries: FTFGroupTourPricingEntry[];

  groupTourPNLSimulationOIDs: string[] | null;

  changeHistory: GroupTourPricingMatrixChangeHistory | null;
  startingPricePaxType: BookingPaxType;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
