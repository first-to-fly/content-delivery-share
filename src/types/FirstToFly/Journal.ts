import type { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFJournal
 * @extends {CDEntity}
 */
export interface FTFJournal extends CDEntity {
  code: string;
  fromEntityOID: string;
  toEntityOID: string;
  amount: number;
  isVoided: boolean;
  description: string | null;
  transactionDate: string;

  // Linked transactions (populated by business logic)
  linkedTransactions: {
    transactionOID: string;
    type: "FROM" | "TO";
  }[] | null;

  // Xero sync status (from xero_sync table)
  xeroSyncInfo: {
    xeroId: string | null;
    status: "synced" | "failed" | "pending" | null;
    lastSyncAt: string | null;
    error: string | null;
  } | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
