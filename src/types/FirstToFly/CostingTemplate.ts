import type { CDEntity } from "../entity";


export interface FTFCostingTemplate extends CDEntity {
  name: string;
  remarks: string | null;
  isActive: boolean;

  costingItemOIDs: string[];

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
