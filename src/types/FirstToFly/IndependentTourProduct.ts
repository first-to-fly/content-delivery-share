import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";
import type { ProductPlatform } from "../platform";
import type { NamedURL } from "../url";


export enum IndependentTourProductDocumentationType {
  SALE_KIT = "sale-kit",
  COMPARISON_CHART = "comparison-chart",
  USP_LIST = "usp-list",
  IMPORTANT_NOTICE = "important-notice",
  IMMIGRATION_POLICY = "immigration-policy",
  SPECIAL_REQUIREMENTS = "special-requirements",
  VISA_APPLICATION_FORM = "visa-application-form",
  EXTRA_INFORMATION = "extra-information",
}

// Interface for Independent Tour Product MultiLanguageContent fields
export interface MultiLanguageContent {
  [languageCode: string]: string;
}

export interface FTFIndependentTourProduct extends CDEntity {

  departmentOID: string;
  sectorGroupOID: string | null;
  sectorOID: string;
  independentTourProductItineraryOID: string | undefined;

  code: string;

  name: MultiLangRecord<string>;
  description: MultiLangRecord<string> | null;

  shoutout: MultiLangRecord<string> | null;
  highlights: MultiLangRecord<string> | null;
  writeup: MultiLangRecord<string> | null;
  importantNotes: MultiLangRecord<string> | null;
  inclusions: MultiLangRecord<string> | null;
  exclusions: MultiLangRecord<string> | null;

  durationDays: number;
  durationNights: number;

  validityStartDate: string;
  validityEndDate: string | null;

  targetYieldPercentage: number | null;

  defaultFullPaymentDueDays: number | null;
  pricingPlaceholder: Record<string, number> | null;

  isActive: boolean;
  published: boolean;
  isUmrahHaj: boolean | null;
  hardpush: boolean | null;

  // Available platforms (e.g., saleskit, b2b, b2c)
  platforms: ProductPlatform[] | null;

  coverPicture: NamedURL | null;
  productBannerDesktop: NamedURL | null;
  productBannerMobile: NamedURL | null;

  videos: {
    active: boolean;
    title: string;
    file: NamedURL;
    updatedAt: string;
  }[] | null;
  documentations: {
    active: boolean;
    type: IndependentTourProductDocumentationType;
    file: NamedURL;
    updatedAt: string;
  }[] | null;

  independentTourAccommodationOIDs: string[];
  independentTourOptionalServiceOIDs: string[];
  independentTourMiscellaneousOIDs: string[];

  countryCodesCovered: string[] | null;

  tenantOID: string;

  createdBy: string;
  updatedBy: string | null;

  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;

  startingPrice: number | null;
}
