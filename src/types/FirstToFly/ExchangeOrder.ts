import { CDEntity } from "../entity";


export enum ExchangeOrderStatus {
  DRAFT = "draft",
  WFA = "wfa",
  APPROVED = "approved",
  REJECTED = "rejected",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  VOIDED = "voided",
}

export interface FTFExchangeOrder extends CDEntity {
  exchangeOrderNo: string;
  status: ExchangeOrderStatus;

  issueDate: string;
  dueDate: string | null;

  budgetOID: string | null;
  tourDepartureOID: string | null;

  parentExchangeOrderOID: string | null;
  childrenExchangeOrderOIDs: string[];

  totalAmount: number;
  currency: string;

  remarks: string | null;

  isArchived: boolean;

  tenantOID: string;

  // Related entities
  exchangeOrderItemOIDs: string[];

  supplierOID: string;
  supplierPersonOID: string;
  supplierPaymentOID: string;
  supplierAddressOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
