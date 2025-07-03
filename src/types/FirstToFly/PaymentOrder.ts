import type { CDBaseEntity } from "../entity";


export enum PaymentOrderStatus {
  PENDING = "pending",
  PARTIAL = "partial",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface FTFPaymentOrder extends CDBaseEntity {
  tenantOID: string;
  groupTourBookingOID: string;

  amount: number;
  received: number;
  minPaymentPrice: number;
  currencyCode: string;
  status: PaymentOrderStatus;
  transactionOIDs: string[]; // Array of Transaction OIDs

  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  createdBy: string; // UserOID
  updatedBy: string | null; // UserOID
}
