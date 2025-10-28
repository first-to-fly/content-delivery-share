import type { CDEntity } from "../entity";


export interface FTFCustomizedTourItinerary extends CDEntity {
  tenantOID: string;
  customizedTourBookingOID: string;
  name: string;
  pdfs: Record<string, string> | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

  dayOIDs: string[] | null;
}
