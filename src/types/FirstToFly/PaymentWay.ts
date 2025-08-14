import type { CDEntity } from "../entity";
import { PaymentMethod } from "./Transaction";


export type FTFPaymentWay = CDEntity & {
  tenantOID: string;

  // Core Payment Configuration
  paymentMethod: PaymentMethod;
  name: string;
  mode: string; // online | offline

  // UI and Display
  icon?: string;
  remarks?: string;

  // Status
  status: string; // active | inactive

  // Business Rules
  isDaily: boolean;
  isEvent: boolean;
  isRefund: boolean;
  isPaymentLink: boolean;

  // Transaction Fees
  txnRatePercent?: number;
  txnRateAmount?: number;

  // Account Code OIDs
  accountCodeOID: string;
  txnRateAccountCodeOID?: string;

  // Audit fields
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy?: string;
};
