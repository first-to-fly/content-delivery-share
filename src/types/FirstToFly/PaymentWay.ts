import type { CDEntity } from "../entity";
import { PaymentMethod } from "./Transaction";


export enum CreditCardBank {
  AMEX = "amex",
  UOB = "uob",
  DBS = "dbs",
  CITI = "citi",
  VISA = "visa",
  MASTERCARD = "mastercard",
  OTHERS = "others",
}

export type PaymentConfig = {
  bank?: CreditCardBank; // Only for CREDIT_CARD methods
  accountCodeOID: string;
  txnRateAccountCodeOID?: string;
  txnRatePercent?: number;
  txnRateAmount?: number;
};


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

  // Unified Payment Configurations (for all payment methods)
  paymentConfigs: PaymentConfig[];

  // Audit fields
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy?: string;
};
