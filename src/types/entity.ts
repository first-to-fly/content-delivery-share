export enum CDEntityType {
  // FTF entity
  FTF_USER = "ftf-user",
  FTF_USER_TENANT = "ftf-userTenant",
  FTF_LOCATION = "ftf-location",
  FTF_PRODUCT_TYPE = "ftf-productType",
  FTF_DEPARTMENT = "ftf-department",
  FTF_TENANT = "ftf-tenant",
  FTF_PRIVACY_POLICY = "ftf-privacyPolicy",
  FTF_SECTOR = "ftf-sector",
  FTF_SECTOR_GROUP = "ftf-sectorGroup",
  FTF_TERM = "ftf-term",
  FTF_BADGE = "ftf-badge",
  FTF_MEAL = "ftf-meal",
  FTF_DESIGNATION = "ftf-designation",
  FTF_DOCUMENT = "ftf-document",
  FTF_INSURANCE_DISCOUNT = "ftf-insuranceDiscount",
  FTF_ROLE = "ftf-role",
  FTF_STATION_CODE = "ftf-stationCode",
  FTF_REFERENCE_CODE = "ftf-referenceCode",
}

export interface CDEntity {
  oid: string;
}

export interface CDBaseEntity extends CDEntity {
  name?: string;
}
