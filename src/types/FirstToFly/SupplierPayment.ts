import { CDEntity } from "../entity";


export enum PaymentType {
  BANK_TRANSFER = "bank_transfer",
  CREDIT_CARD = "credit_card",
  PAYPAL = "paypal",
  CHECK = "check",
  CASH = "cash",
  OTHER = "other",
}

export interface FTFSupplierPayment extends CDEntity {
  oid: string;
  supplierOID: string;
  paymentType: PaymentType;
  accountName?: string;
  accountNumber?: string;
  bankName?: string;
  bankCode?: string;
  swiftCode?: string;
  routingNumber?: string;
  iban?: string;
  currency?: string;
  cnapCode?: string;
  bicCode?: string;
  branchNo?: string;
  branch?: string;
  beneficiary?: string;
  isDefault: boolean;
  remarks?: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  tenantOID: string;
}
