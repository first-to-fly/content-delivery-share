import type { CDEntity } from "../entity";

/**
 * @export
 * @interface GeoPoint
 * GeoJSON Point format
 */
export interface GeoPoint {
  type: "Point";
  coordinate: {
    x: number;
    y: number;
  };
}

/**
 * @export
 * @interface FTFPOI
 * @extends {CDEntity}
 */
export interface FTFPOI extends CDEntity {
  tenantOID: string;

  name: string;
  address: string;
  type: string;
  country: string;
  area: string;
  category: string;
  description: string | null;
  position: GeoPoint;
  images: string[] | null;
  additionalInfo: Record<string, unknown> | null;


  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
