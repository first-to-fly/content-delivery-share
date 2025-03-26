import { CDEntity } from "../entity";


export interface FTFReferenceCodeTree extends CDEntity {
  name: string;
  moduleId: number;
  parentId: number;
  seq: number;
  createTime: Date;
  updateTime: Date;
  offlineOperator: string | null;
  tenantOID: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}
