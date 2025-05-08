import type { CDEntity } from '../entity';
import type { OID, ISO8601DateTime } from '../generic';

export enum SupplierContractType {
  INVENTORY = 'inventory',
  TRANSPORT = 'transport',
  ACCOMMODATION = 'accommodation',
  MEALS = 'meals',
  OTHER = 'other',
}

export enum SupplierContractStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  EXPIRED = 'expired',
}

export interface ContractFile {
  filename: string;
  url: string;
}

export interface SupplierContract extends CDEntity {
  // oid is in CDEntity
  tenantOID: OID; // Assuming tenantOID is needed for CD
  supplierProfileOID: OID; // OID of the supplier profile
  name: string;
  type: SupplierContractType;
  details: Record<string, any> | null; // JSONB, schema varies by type
  validityStartDate: ISO8601DateTime;
  validityEndDate: ISO8601DateTime;
  status: SupplierContractStatus;
  contractFiles: ContractFile[] | null;
  createdBy?: OID | null;
  createdAt?: ISO8601DateTime | null;
  updatedBy?: OID | null;
  updatedAt?: ISO8601DateTime | null;
  deletedAt?: ISO8601DateTime | null;
}
