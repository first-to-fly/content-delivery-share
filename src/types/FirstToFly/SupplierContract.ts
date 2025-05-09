import type { CDEntity } from "../entity";
import type { ISO8601DateTime, OID } from "../generic";
import { NamedURL } from "../url";


export enum SupplierContractType {
  INVENTORY = "inventory",
  TRANSPORT = "transport",
  ACCOMMODATION = "accommodation",
  MEALS = "meals",
  OTHER = "other",
}

export enum SupplierContractStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  EXPIRED = "expired",
}

export interface FTFSupplierContract extends CDEntity {
  tenantOID: OID;
  supplierProfileOID: OID;
  name: string;
  type: SupplierContractType;
  details: Record<string, unknown> | null;
  validityStartDate: ISO8601DateTime;
  validityEndDate: ISO8601DateTime;
  status: SupplierContractStatus;
  contractFiles: NamedURL[] | null;

  createdBy: OID;
  createdAt: ISO8601DateTime;
  updatedBy: OID;
  updatedAt: ISO8601DateTime | null;
}
