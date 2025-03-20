export enum CDEntityType {
  // FTF entity
  FTF_USER = "ftf-user",
  FTF_LOCATION = "ftf-location",
  FTF_PRODUCT_TYPE = "ftf-productType",
  FTF_DEPARTMENT = "ftf-department",
  FTF_TENANT = "ftf-tenant",
  FTF_PRIVACY_POLICY = "ftf-privacyPolicy",
  FTF_SECTOR = "ftf-sector",
  FTF_SECTOR_GROUP = "ftf-sectorGroup",
  FTF_TERM = "ftf-term",
  FTF_BADGE = "ftf-badge",
}

export interface CDEntity {
  oid: string;
}

export interface CDBaseEntity extends CDEntity {
  name?: string;
}
