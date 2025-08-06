import { LanguageCode } from "../enums/language";
import { MultiLangRecord } from "../multipleLanguage";
import { NamedURL } from "../url";


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

export interface FTFIndependentTourProduct {
  oid: string;
  entityType: "independentTourProduct";

  departmentOID: string;
  sectorGroupOID: string | null;
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

  salesPeriodStartDate: string;
  salesPeriodEndDate: string | null;

  targetYieldPercentage: number | null;

  isActive: boolean;
  published: boolean;

  media: NamedURL[];
  coverPicture: NamedURL | null;
  productBannerDesktop: NamedURL | null;
  productBannerMobile: NamedURL | null;

  videos: {
    active: boolean;
    title: string;
    file: NamedURL;
    updatedAt: string;
  }[] | null;
  itineraryPDFs: {
    active: boolean;
    lang: LanguageCode;
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

  independentTourProductCostingOID: string | null;
  independentTourAccommodationOIDs: string[];
  independentTourOptionalServiceOIDs: string[];
  independentTourMiscellaneousOIDs: string[];

  tenantOID: string;

  createdBy: string;
  updatedBy: string | null;

  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}
