import { CDEntity } from "../entity";


export enum RoomType {
  SINGLE = "single",
  TWIN = "twin",
  TRIPLE = "triple",
  QUADRUPLE = "quadruple",
}

export type RuleOccupancy = {
  adultNum: number | null;
  childWithBedNum: number | null;
  childWithoutBedNum: number | null;
  infantNum: number | null;
};

export type RulePricingArrangement = {
  single: number | null;
  twin: number | null;
  triple: number | null;
  quad: number | null;
  childTwin: number | null;
  childWithBed: number | null;
  childNoBed: number | null;
  infant: number | null;
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
