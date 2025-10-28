import type { CDEntity } from "../entity";


export enum PdfTemplateKey {
  BOOKING_CONFIRMATION = "booking.confirmation",
  PAX_STATEMENT = "pax.statement",
}

export interface FTFPdfTemplate extends CDEntity {
  key: PdfTemplateKey;
  tenantOID: string | null;
  template: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  createdBy: string;
  updatedBy: string | null;
}
