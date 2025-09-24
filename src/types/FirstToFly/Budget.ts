import type { CDEntity } from "../entity";


export enum BudgetStatus {
  DRAFT = "draft",
  WFA = "wfa",
  APPROVED = "approved",
  REJECTED = "rejected",
  COMPLETED = "completed",
}

export interface FTFBudget extends CDEntity {
  entityOID: string;

  status: BudgetStatus;
  materializationRate: number;
  remarks: string | null;
  isArchived: boolean;

  airlineOIDs: string[];

  landTourGroupSizeTiers: {
    from: number;
    to: number;
  }[];

  freeOfChargeTiers: {
    pax: number;
    freePax: number;
  }[];

  leadManagerCountTiers: {
    pax: number;
    leadCount: number;
    managerCount: number;
  }[];

  originalGroupTourCostingOID: string;

  budgetEntryOIDs: string[];

  tenantOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
