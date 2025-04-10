import { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFGroupTourItinerary
 * @extends {CDEntity}
 */
export interface FTFGroupTourItinerary extends CDEntity {
  groupTourProductOID: string;
  name: string;
  validityStartDate: Date | null;
  validityEndDate: Date | null;
  isActive: boolean;
  tenantOID: string;
}
