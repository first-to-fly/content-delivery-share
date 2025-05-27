import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFApprovalRequest
 * @extends {CDEntity}
 */
export interface FTFApprovalRequest extends CDEntity {
  tenantOID: string;

  requestType: string;
  entityOid: string;
  payload: Record<string, unknown>; // JSONB - flexible structure
  status: string;
  remarks: string | null;
  assigneeOID: string;
  assigneeNote: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
