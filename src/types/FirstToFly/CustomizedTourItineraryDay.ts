import type { CDEntity } from "../entity";
import type { NamedURL } from "../url";


export interface FTFCustomizedTourItineraryDay extends CDEntity {
  tenantOID: string;
  customizedTourItineraryOID: string;
  dayNumber: number;
  title: Record<string, string> | null;
  description: Record<string, string> | null;
  files: NamedURL[] | null;
  internalRemarks?: string | null;
  externalRemarks?: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

  itemOIDs: string[] | null;
  itineraryItemOIDs: string[] | null;
}
