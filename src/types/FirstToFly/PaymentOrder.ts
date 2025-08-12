import type { CDBaseEntity } from "../entity";


export enum PaymentOrderStatus {
  PENDING = "pending",
  PARTIAL = "partial",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface FTFPaymentOrder extends CDBaseEntity {
  tenantOID: string;
  entityOID: string; // Reference to any entity (e.g., GROUP_TOUR_BOOKING, INDEPENDENT_TOUR_BOOKING)

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
