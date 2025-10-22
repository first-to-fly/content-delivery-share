import type { CDEntity } from "../entity";


export interface FTFCustomizedTourItineraryDay extends CDEntity {
  tenantOID: string;
  customizedTourItineraryOID: string;
  dayNumber: number;
  title: Record<string, string> | null;
  description: Record<string, string> | null;
  files: Array<{ name: string; url: string }> | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

  itemOIDs: string[] | null;
}
