import { CDEntity } from "../entity";
import { CDCostingItemCategory } from "./CostingItem";


export interface FTFCostingTemplate extends CDEntity {
  name: string;
  remarks: string | null;
  isActive: boolean;

  // Mapping of category to array of costing item OIDs
  categoryItems: Record<CDCostingItemCategory, string[]>;

  createdAt: string;
  updatedAt: string | null;
  createdBy: string;
  updatedBy: string | null;
}
