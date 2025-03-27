import { CDEntity } from "../entity";


export interface FTFReferenceCodeList extends CDEntity {
  moduleId: number;
  name: string | null;
  counterType: string;
  resetCounterType: string;
  counterWidth: number;
  template: string;
  remarks?: string;
  offlineOperator: string | null;
  tenantOID: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}
