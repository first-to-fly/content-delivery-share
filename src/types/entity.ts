export enum CDEntityType {
  // FTF entity
  FTF_USER = "ftf-user",
  FTF_LOCATION = "ftf-location",
  FTF_DEPARTMENT = "ftf-department",
}

export interface CDEntity {
  oid: string;
}

export interface CDBaseEntity extends CDEntity {
  name?: string;
}
