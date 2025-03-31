import { CDBaseEntity } from "../entity";


export interface FTFUsefulInfo extends CDBaseEntity {
  name: string;
  coverage: number | null;
  status: number | null;
  offlineOperator: string | null;
  remarks: string | null;
  info: {
    otherInfo: string | null;
    tipping: string | null;
    visa: string | null;
    weather: string | null;
    optionalTours: string | null;
  } | null;
}

export interface FTFUsefulInfoRef extends CDBaseEntity {
  usefulInfoOID: string;
  refId: number;
  name: string;
}

export interface FTFUsefulInfoProductType extends CDBaseEntity {
  usefulInfoOID: string;
  productTypeOID: string;
  offlineOperator: string | null;
  productTypeName: string | null;
}
