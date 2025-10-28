import type { CDBaseEntity } from "../entity";


export enum EnquiryProductType {
  GIT = "git",
  FIT = "fit",
  CRUISE = "cruise",
  CUSTOM = "custom",
  DAY_TOUR = "day_tour",
  OTHER = "other",
}

export enum EnquiryStatus {
  OPEN = "open",
  IN_PROGRESS = "in_progress",
  PENDING = "pending",
  CLOSED_WON = "closed_won",
  CLOSED_LOST = "closed_lost",
  REJECTED = "rejected",
}

export enum EnquiryChannel {
  ONLINE = "online",
  EMAIL = "email",
  PHONE = "phone",
  WALK_IN = "walk_in",
  PARTNER = "partner",
  OTHER = "other",
}

export interface FTFEnquiryOccupancy {
  adult: number;
  cwb?: number | null;
  cnb?: number | null;
  infant?: number | null;
}

export interface FTFEnquiryBudget {
  amount: number;
  currency: string;
}

export interface FTFEnquiryTravelPeriod {
  start: string;
  end: string;
}

export interface FTFEnquiryShortlistItem {
  productOID: string;
  label?: string | null;
  productType?: string | null;
}

export interface FTFEnquiry extends CDBaseEntity {
  tenantOID: string;

  code: string;
  customerName: string;
  mobile: string;
  email: string | null;

  productType: EnquiryProductType;
  enquiryChannel: EnquiryChannel;

  occupancy: FTFEnquiryOccupancy;
  budget: FTFEnquiryBudget | null;
  travelPeriod: FTFEnquiryTravelPeriod | null;
  destinations: string[];
  shortlistProductOIDs: FTFEnquiryShortlistItem[];

  notes: string | null;
  status: EnquiryStatus;
  statusReason: string | null;
  statusChangedAt: string | null;
  lastActivityAt: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
