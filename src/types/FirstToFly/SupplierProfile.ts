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

export interface FTFSupplierProfile extends CDEntity {
  tenantOID: OID;
  name: string;
  type: SupplierProfileType;
  contactEmail: string | null;
  contactPhone: string | null;
  contactAddress: string | null;
  apiCredentials: ApiCredentials | null;
  manualContact: boolean;
  communicationInstructions: string | null;
  status: SupplierProfileStatus;

  createdBy: OID;
  createdAt: ISO8601DateTime;
  updatedBy: OID;
  updatedAt: ISO8601DateTime | null;
}
