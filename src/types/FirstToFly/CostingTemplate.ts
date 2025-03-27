import { CDEntity } from "../entity";


export interface FTFCostingTemplate extends CDEntity {
  name: string;
  remarks: string | null;
  isActive: boolean;

  costingItemOIDs: string[];

  createdAt: string;
  updatedAt: string | null;
  createdBy: string;
  updatedBy: string | null;
}
