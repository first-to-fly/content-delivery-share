export enum CDEntityType {
  // FTF entity
  FTF_USER = "ftf-user",
}

export interface CDEntity {
  oid: string;
}

export interface CDBaseEntity extends CDEntity {
  name?: string;
}
