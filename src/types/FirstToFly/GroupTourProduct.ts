import { CDEntity } from "../entity";
import { MultiLangRecord } from "../multipleLanguage";
import { ProductPlatform } from "../platform";
import { NamedURL } from "../url";


export enum GroupTourProductDocumentationType {
  SALE_KIT = "sale-kit",
  COMPARISON_CHART = "comparison-chart",
  USP_LIST = "usp-list",
  IMPORTANT_NOTICE = "important-notice",
  IMMIGRATION_POLICY = "immigration-policy",
  SPECIAL_REQUIREMENTS = "special-requirements",
  VISA_APPLICATION_FORM = "visa-application-form",
  EXTRA_INFORMATION = "extra-information",
}

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

  // Available platforms (e.g., saleskit, b2b, b2c)
  platforms: ProductPlatform[] | null;

  defaultFullPaymentDueDays: number | null;

  ownerOIDs: string[] | null;

  videos: {
    active: boolean;
    title: string;
    file: NamedURL;
    updatedAt: string;
  }[] | null;
  documentations: {
    active: boolean;
    type: GroupTourProductDocumentationType;
    file: NamedURL;
    updatedAt: string;
  }[] | null;

  coverPicture: NamedURL | null;
  productBannerDesktop: NamedURL | null;
  productBannerMobile: NamedURL | null;

  groupTourItineraryOIDs: string[] | null;
  groupTourCostingOIDs: string[] | null;
  groupTourPricingOIDs: string[] | null;

  transportPlanOIDs: string[] | null;

  countriesCovered: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

  tenantOID: string;
}
