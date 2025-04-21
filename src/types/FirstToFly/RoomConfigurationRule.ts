import { CDEntity } from "../entity";


export enum RoomType {
  SINGLE = "single",
  TWIN = "twin",
  TRIPLE = "triple",
  QUADRUPLE = "quadruple",
}

export type RuleOccupancy = {
  adultNum?: number;
  childWithBedNum?: number;
  childWithoutBedNum?: number;
  infantNum?: number;
};

export type RulePricingArrangement = {
  single?: number;
  twin?: number;
  triple?: number;
  quad?: number;
  childTwin?: number;
  childWithBed?: number;
  childNoBed?: number;
  infant?: number;
};

/**
 * @export
 * @interface FTFRoomConfigurationRule
 * @extends {CDEntity}
 */
export interface FTFRoomConfigurationRule extends CDEntity {
  tenantOID: string;

  roomConfigurationOID: string; // parent

  roomType: RoomType;

  occupancy: RuleOccupancy;

  pricingArrangement: RulePricingArrangement;

  isBackendOnly: boolean;
  isTcp: boolean;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

}
