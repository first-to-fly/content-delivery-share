import { CDEntity } from "../entity";


export enum BudgetStatus {
  DRAFT = "draft",
  WFA = "wfa",
  APPROVED = "approved",
  REJECTED = "rejected",
  COMPLETED = "completed",
}

export interface FTFBudget extends CDEntity {
  tourDepartureOID: string;
  budgetCostingOID: string;

  status: BudgetStatus;
  materializationRate: number;
  remarks: string | null;
  isArchived: boolean;

  tenantOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
