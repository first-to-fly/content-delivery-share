import type { CDEntity } from "../entity";


export enum CustomizedTourTaskStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
}

export enum CustomizedTourTaskPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}


export interface FTFCustomizedTourTask extends CDEntity {
  tenantOID: string;
  customizedTourBookingOID: string;
  customizedTourItineraryItemOID: string | null;
  supplierOID: string | null;
  assignedToOID: string | null;
  title: string;
  description: string | null;
  status: CustomizedTourTaskStatus;
  priority: CustomizedTourTaskPriority;
  startDate: string | null;
  endDate: string | null;
  paxCount: number | null;
  amount: number | null;
  category: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
