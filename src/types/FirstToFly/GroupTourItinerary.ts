import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFGroupTourItinerary
 * @extends {CDEntity}
 */
export interface FTFGroupTourItinerary extends CDEntity {
  groupTourProductOID: string;
  name: string;
  validityStartDate: string | null;
  validityEndDate: string | null;
  isActive: boolean;
  tenantOID: string;
}
