import type { CDEntity } from "../entity";


export type FTFCustomizedTourQuoteStatus = "draft" | "sent" | "accepted" | "expired";

export type FTFCustomizedTourQuoteAdjustmentMode = "percentage" | "fixed";

export interface FTFCustomizedTourQuoteAdjustment {
  value: number;
  mode: FTFCustomizedTourQuoteAdjustmentMode;
}

export interface FTFCustomizedTourQuoteDeposit {
  amount: number;
  dueDate: string | null;
}

export interface FTFCustomizedTourQuotePaymentScheduleEntry {
  label: string;
  dueDate: string | null;
  amount: number;
  description: string | null;
}

export type FTFCustomizedTourQuotePaymentSchedule = FTFCustomizedTourQuotePaymentScheduleEntry[];

export interface FTFCustomizedTourQuote extends CDEntity {
  tenantOID: string;
  customizedTourBookingOID: string;
  code: string;
  quoteDate: string | null;
  validUntil: string | null;
  status: FTFCustomizedTourQuoteStatus;
  currencyCode: string;
  tax: FTFCustomizedTourQuoteAdjustment | null;
  discount: FTFCustomizedTourQuoteAdjustment | null;
  deposit: FTFCustomizedTourQuoteDeposit | null;
  finalPaymentDate: string | null;
  paymentMethods: string[] | null;
  paymentSchedule: FTFCustomizedTourQuotePaymentSchedule | null;
  termsInternal: string | null;
  termsExternal: string | null;
  notesInternal: string | null;
  notesExternal: string | null;
  sentAt: string | null;
  sentBy: string | null;
  sentTo: string[] | null;
  acceptedAt: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

  quotedCostItemOIDs: string[] | null;
}
