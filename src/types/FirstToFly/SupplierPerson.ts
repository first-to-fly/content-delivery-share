import { CDEntity } from "../entity";


export interface FTFSupplierPerson extends CDEntity {
  supplierOID: string;
  firstName: string;
  lastName: string;
  position?: string;
  department?: string;
  contactInfo: Array<{
    email?: string;
    phone?: string;
    fax?: string;
    officePhone?: string;
    isDefault?: boolean;
  }>;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  tenantId: string;
}
