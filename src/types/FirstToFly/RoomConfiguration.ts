import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFRoomConfiguration
 * @extends {CDEntity}
 */
export interface FTFRoomConfiguration extends CDEntity {
  tenantOID: string;
  name: string;
  status: number;
  remarks: string | null;
  offlineOperator: string | null;
  childWithoutBedStartAge: number;
  childWithoutBedEndAge: number;
  typeNames: string | null;
  checkChart: string | null;

  // Relationships
  sectorOIDs?: string[];
  sectorGroupOIDs?: string[];
  productOIDs?: string[];
  participatorOIDs?: string[];
  personInChargeOIDs?: string[];

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
  deletedAt: string | null;
}
