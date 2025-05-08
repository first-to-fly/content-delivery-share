import type { CDEntity } from "../entity";
import type { ISO8601DateTime, OID } from "../generic";


export enum SupplierProfileType {
  AIRLINE = "airline",
  HOTEL = "hotel",
  CRUISE_LINE = "cruise_line",
  BUS_OPERATOR = "bus_operator",
  TRAIN_OPERATOR = "train_operator",
  FERRY_OPERATOR = "ferry_operator",
  OTHER = "other",
}

export enum SupplierProfileStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export interface ApiCredentials {
  endpoint: string;
  key: string;
  type: string;
  secret: string;
}

export interface SupplierProfile extends CDEntity {
  // oid is in CDEntity. tenantOID, createdBy, etc. are not part of CDEntity by default.
  // The prompt for content-delivery-share says "optional properties must be marked as nullable (`| null`)"
  // and it usually mirrors the main entity structure but simplified for content delivery.
  // Let's assume it needs the core fields.
  tenantOID: OID; // Assuming tenantOID is needed for CD
  name: string;
  type: SupplierProfileType;
  contactEmail: string | null;
  contactPhone: string | null;
  contactAddress: string | null;
  apiCredentials: ApiCredentials | null;
  manualContact: boolean;
  communicationInstructions: string | null;
  status: SupplierProfileStatus;
  createdBy?: OID | null; // Optional and nullable
  createdAt?: ISO8601DateTime | null; // Optional and nullable
  updatedBy?: OID | null; // Optional and nullable
  updatedAt?: ISO8601DateTime | null; // Optional and nullable
  deletedAt?: ISO8601DateTime | null; // Optional and nullable
}
