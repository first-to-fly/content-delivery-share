import { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";
import { NamedURL } from "../url";

/**
 * @export
 * @interface FTFGroupTourItinerary
 * @extends {CDEntity}
 */
export interface FTFGroupTourItinerary extends CDEntity {
  groupTourProductOID: string;
  tourDepartureOID: string | null;
  sectorOIDs: string[];

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
