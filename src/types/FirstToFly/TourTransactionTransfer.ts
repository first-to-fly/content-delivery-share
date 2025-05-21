// This will be used for mapping if needed, CDEntityType is primary here
import type { PaymentMethod, TourTransactionTransferType } from "@firsttofly/travel-share/src/entities/Operations/TourTransactionTransfer";

import type { CDBaseEntity, CDEntityType } from "../entity"; // Corrected import
import type { NamedURL } from "../url";


export interface TourTransactionTransfer extends CDBaseEntity {
  // entityType from CDBaseEntity might be CDEntityType, ensure mapping or correct usage
  entityType: CDEntityType.FTF_TOUR_TRANSACTION_TRANSFER; // Using CDEntityType directly
  tourTransactionTransferOID: string;
  tenantOID: string;
  tourTransactionOID: string;

  transferType: TourTransactionTransferType;
  amount: number;
  currencyCode: string;
  paymentMethod: PaymentMethod | null;
  transactionReference: string | null;
  transactionDate: string; // ISO Date string
  notes: string | null;
  metadata: Record<string, unknown> | null;
  files?: NamedURL[]; // Added files field

  // Audit fields
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  createdBy: string | null; // UserOID
  updatedBy: string | null; // UserOID
  deletedAt?: string | null; // ISO Date string
}
