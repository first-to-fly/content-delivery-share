import { CDEntity } from "../entity";


export enum ExchangeOrderType {
  PURCHASE = "purchase",
  SALE = "sale",
  TRANSFER = "transfer",
  REFUND = "refund",
}

export enum ExchangeOrderStatus {
  DRAFT = "draft",
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface FTFExchangeOrder extends CDEntity {
  exchangeOrderNo: string;
  type: ExchangeOrderType;
  status: ExchangeOrderStatus;

  parentExchangeOrderOID: string | null;
  budgetOID: string | null;
  supplierOID: string | null;

  totalAmount: number;
  currency: string;

  description: string | null;
  remarks: string | null;

  isArchived: boolean;

  tenantOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
