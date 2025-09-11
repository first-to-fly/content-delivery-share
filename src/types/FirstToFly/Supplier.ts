export enum SupplierPartnerType {
  LONG_TERM = "long_term",
  AD_HOC = "ad_hoc",
}

export enum SupplierType {
  TRADE = "trade",
  MISC = "misc",
}

export enum SupplierCategory {
  AIRLINE = "airline",
  OTA = "ota",
  LAND_OPERATOR = "land_operator",
  SYSTEM_VENDOR = "system_vender",
  PRINTING = "printing",
  TICKETING = "ticketing",
  OTHER = "other",
}

export enum SupplierStatus {
  PENDING = "pending",
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export interface SupplierInfo {
  uenNo?: string | null;
  gstNo?: string | null;
  iataCode?: string | null;
  icon?: string | null;
  bsp?: boolean | null;

  // Below are fields that are not yet implemented
  // Land Operator fields
  // vehicleTypes?: string[] | null;
  // // Hotel fields
  // starRating?: number | null;
  // chainAffiliation?: string | null;
  // propertyType?: string | null;
  // // Insurance fields
  // coverageTypes?: string[] | null;
  // policyLimits?: string | null;
  // // Travel Agency fields
  // territories?: string[] | null;
  // specializations?: string[] | null;
  // destinations?: string[] | null;
  // languages?: string[] | null;
}

export interface FTFSupplier {
  oid: string;
  tenantOID: string;
  name: string;
  code: string;
  type: SupplierType | null;
  category: SupplierCategory | null;
  status: SupplierStatus;
  shortName: string;
  partnerType: SupplierPartnerType | null;
  countries: string[] | null;
  supplierInfo: SupplierInfo | null;
  personInChargeOID: string | null;
  parentOID: string | null;
  newOID: string | null;
  remarks: string | null;
  inactiveRemarks: string | null;
  mainSupplierPaymentOID: string | null;
  mainSupplierAddressOID: string | null;
  paymentTerms: number;
  paymentCreditLimit: number;
  supplierPersonOIDs: string[] | null;
  supplierAddressOIDs: string[] | null;
  supplierPaymentOIDs: string[] | null;
  relatedSupplierOIDs: string[] | null;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
