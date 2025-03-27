import { CDEntity } from "../entity";


export interface FTFReferenceCodeTemplate extends CDEntity {
  name: string;
  counterType: string;
  resetCounterType: string;
  counterWidth: number;
  template: string;
  remarks: string | null;
  offlineOperator: string | null;
  referenceCodeTreeOID: string;
  tenantOID: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}
