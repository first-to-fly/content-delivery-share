import { CDEntity } from "../entity";

export interface FTFSupplierAddress extends CDEntity {
  supplierId: string;
  addressType: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  postalCode?: string;
  country: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  tenantId: string;
}