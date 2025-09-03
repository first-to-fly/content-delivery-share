import type { CDEntity } from "../entity";


export interface FTFSupplierAddress extends CDEntity {
  oid: string;
  supplierOID: string;
  addressLines: string[];
  city: string;
  state?: string;
  postalCode?: string;
  country: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  tenantOID: string;
}
