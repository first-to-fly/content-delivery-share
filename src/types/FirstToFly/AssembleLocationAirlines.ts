import type { CDEntity } from "../entity";

/**
 * @export
 * @interface FTFAssembleLocationAirlines
 * @extends {CDEntity}
 */
export interface FTFAssembleLocationAirlines extends CDEntity {
  tenantOID: string;

  airlineCode: string;
  airportCode: string;

  location: string | null;
  files: string[] | null;
  isActive: boolean;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
