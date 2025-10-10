import type { CDEntity } from "../entity";


export interface FTFSupplierPayment extends CDEntity {
  oid: string;
  supplierOID: string;
  accountName: string | null;
  accountNumber: string | null;
  bankName: string;
  bankCode: string | null;
  swiftCode: string | null;
  routingNumber: string | null;
  iban: string | null;
  currencies: string[];
  cnapCode: string | null;
  bicCode: string | null;
  branchNo: string | null;
  branch: string | null;
  beneficiaryInfo: {
    name: string;
    uen: string | null;
    gst: string | null;
  };
  isDefault: boolean;
  remarks: string | null;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
  tenantOID: string;
}
