import { CDEntity } from "../entity";


export interface FTFSupplierPayment extends CDEntity {
  supplierOID: string;
  paymentType: string;
  accountName?: string;
  accountNumber?: string;
  bankName?: string;
  bankCode?: string;
  swiftCode?: string;
  routingNumber?: string;
  iban?: string;
  currency?: string;
  paymentTerms?: string;
  isDefault: boolean;
  remarks?: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  tenantId: string;
}
