import { CDEntity } from "../entity";


export interface FTFApproval extends CDEntity {
  approvalId: string;
  tenantId: string;
  name: string;
  key: string;
  targetEntityType: string;
  groups?: string[];
  sendEmail: boolean;
  notifySubmitterOnFinalOutcome: boolean;
  isEnabled: boolean;
  levels: unknown[];
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  deletedAt?: string;
}
