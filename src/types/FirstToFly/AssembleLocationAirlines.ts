import type { CDEntity } from "../entity";
import type { NamedURL } from "../url";

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
  files: NamedURL[] | null;
  isActive: boolean;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
