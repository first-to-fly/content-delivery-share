import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFJournal
 * @extends {CDEntity}
 */
export interface FTFJournal extends CDEntity {
  ref: string;
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

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
