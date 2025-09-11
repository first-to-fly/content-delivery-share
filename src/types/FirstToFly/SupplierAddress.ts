import type { CDEntity } from "../entity";


export interface FTFSupplierAddress extends CDEntity {
  oid: string;
  supplierOID: string;
  addressLines: string[];
  city: string;
  state: string | null;
  postalCode: string | null;
  country: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
  tenantOID: string;
}
