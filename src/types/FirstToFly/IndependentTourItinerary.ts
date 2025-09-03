import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";
import type { NamedURL } from "../url";

/**
 * @export
 * @interface FTFIndependentTourItinerary
 * @extends {CDEntity}
 */
export interface FTFIndependentTourItinerary extends CDEntity {
  independentTourProductOID: string;

  name: string;

  validityStartDate: string;
  validityEndDate: string;

  tenantOID: string;

  pdfs: MultiLangRecord<{
    active: boolean;
    file: NamedURL;
    updatedAt: string;
  }[]> | null;

  independentTourItineraryDayOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
