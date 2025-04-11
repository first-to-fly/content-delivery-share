import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFGroupTourItinerary
 * @extends {CDEntity}
 */
export interface FTFGroupTourItinerary extends CDEntity {
  groupTourProductOID: string;

  name: string;

  validityStartDate: string;
  validityEndDate: string;

  isActive: boolean;
  tenantOID: string;

  groupTourItineraryDayOIDs: string[] | null;
}
