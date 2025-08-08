import type { CDEntity } from "../entity";


export enum IndependentTourBookingAddonType {
  OPTIONAL_SERVICE = "optional_service",
  MANUAL = "manual",
}

export interface FTFIndependentTourBookingAddon extends CDEntity {

  independentTourBookingOID: string;
  independentTourOptionalServiceOID: string | null;
  tenantOID: string;

  type: IndependentTourBookingAddonType;
  serviceDate: string; // ISO datetime string
  name: string;
  unitPrice: number;
  tax: number | null;
  quantity: number;
  totalPrice: number;
  supplierOID: string | null;
  notes: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
