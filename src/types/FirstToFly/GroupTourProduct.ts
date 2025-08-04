import { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";
import { NamedURL } from "../url";

/**
 * @export
 * @interface FTFGroupTourProduct
 * @extends {CDEntity}
 */
export interface FTFGroupTourProduct extends CDEntity {
  code: string;

  name: MultiLangRecord<string>;
  description: MultiLangRecord<string> | null;

  departmentOID: string;
  sectorOIDs: string[];
  displaySectorOIDs: string[];

  sectorGroupOID: string | null;

  shoutout: MultiLangRecord<string> | null;
  writeup: MultiLangRecord<string> | null;
  highlights: MultiLangRecord<string> | null;
  importantNotes: MultiLangRecord<string> | null;
  inclusions: MultiLangRecord<string> | null;
  exclusions: MultiLangRecord<string> | null;

  durationDays: number;
  durationNights: number;

  proposedDepartureDates: string[] | null;

  validityStartDate: string;
  validityEndDate: string | null; // end indefinitely

  salesPeriodStartDate: string;
  salesPeriodEndDate: string | null; // end indefinitely

  isActive: boolean;
  published: boolean;

  ownerOIDs: string[] | null;

  media: NamedURL[] | null;
  coverPicture: NamedURL | null;
  productBannerDesktop: NamedURL | null;
  productBannerMobile: NamedURL | null;

  groupTourItineraryOIDs: string[] | null;
  groupTourCostingOIDs: string[] | null;
  groupTourPricingOIDs: string[] | null;

  transportPlanOIDs: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

  tenantOID: string;
}
