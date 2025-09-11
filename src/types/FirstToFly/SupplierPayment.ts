import type { CDEntity } from "../entity";


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
  accountName: string | null;
  accountNumber: string | null;
  bankName: string | null;
  bankCode: string | null;
  swiftCode: string | null;
  routingNumber: string | null;
  iban: string | null;
  currency: string | null;
  cnapCode: string | null;
  bicCode: string | null;
  branchNo: string | null;
  branch: string | null;
  beneficiary: string | null;
  isDefault: boolean;
  remarks: string | null;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
  tenantOID: string;
}
