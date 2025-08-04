// Interface for Independent Tour Product MultiLanguageContent fields
export interface MultiLanguageContent {
  [languageCode: string]: string;
}

// Interface for Named URL
export interface NamedURL {
  name: string;
  url: string;
}

export interface FTFIndependentTourProduct {
  oid: string;
  entityType: "independentTourProduct";

  independentTourProductOID: string;

  departmentOID: string;
  sectorGroupOID: string | null;
  itineraryOID: string;

  code: string;

  name: MultiLanguageContent;
  description: MultiLanguageContent | null;

  shoutout: MultiLanguageContent | null;
  highlights: MultiLanguageContent | null;
  writeup: MultiLanguageContent | null;
  importantNotes: MultiLanguageContent | null;
  inclusions: MultiLanguageContent | null;
  exclusions: MultiLanguageContent | null;

  durationDays: number;
  durationNights: number;

  validityStartDate: string;
  validityEndDate: string | null;

  salesPeriodStartDate: string;
  salesPeriodEndDate: string | null;

  isActive: boolean;
  published: boolean;

  media: NamedURL[];

  tenantOID: string;

  createdBy: string;
  updatedBy: string | null;

  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}
