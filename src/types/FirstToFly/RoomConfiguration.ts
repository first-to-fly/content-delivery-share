import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFRoomConfiguration
 * @extends {CDEntity}
 */
export interface FTFRoomConfiguration extends CDEntity {
  tenantOID: string;

  name: string;
  isActive: boolean;
  remarks: string | null;

  childWithoutBedStartAge: number;
  childWithoutBedEndAge: number;

  // Relationships
  coveredEntityOIDs: string[];
  roomConfigurationRuleOIDs: string[];

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

}
