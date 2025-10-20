import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";
import type { NamedURL } from "../url";

/**
 * @export
 * @interface FTFGroupTourItinerary
 * @extends {CDEntity}
 */
export interface FTFGroupTourItinerary extends CDEntity {
  groupTourProductOID: string;
  tourDepartureOID: string | null;
  sectorOID: string;

  name: string;

  validityStartDate: string;
  validityEndDate: string;

  isActive: boolean;
  tenantOID: string;

  pdfs: MultiLangRecord<{
    active: boolean;
    file: NamedURL;
    updatedAt: string;
  }[]> | null;

  groupTourItineraryDayOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
