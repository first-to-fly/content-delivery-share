import type { CDEntity } from "../entity";


export interface ContactInfo {
  email?: string;
  phone?: string;
  fax?: string;
  officePhone?: string;
  isDefault: boolean;
}

export interface FTFSupplierPerson extends CDEntity {
  oid: string;
  supplierOID: string;
  firstName: string;
  lastName: string;
  position: string | null;
  department: string | null;
  contactInfo: ContactInfo[];
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
  tenantOID: string;
}
