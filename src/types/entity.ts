export enum CDEntityType {
  // FTF entity
  FTF_USER = "ftf-user",
  FTF_LOCATION = "ftf-location",
  FTF_DEPARTMENT = "ftf-department",
  FTF_TENANT = "ftf-tenant",
  FTF_PRIVACY_POLICY = "ftf-privacyPolicy",
}

export interface CDEntity {
  oid: string;
}

export interface CDBaseEntity extends CDEntity {
  name?: string;
}
