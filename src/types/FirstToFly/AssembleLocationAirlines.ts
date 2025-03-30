import { CDEntity } from "../entity";

/**
 * @export
 * @interface AssembleLocationAirlines
 * @extends {CDEntity}
 */
export interface AssembleLocationAirlines extends CDEntity {
  tenantOID: string;

  airlineCode: string;
  airportCode: string;
  location: string | null;
  file: string[] | null;
  status: boolean;
  offlineOperator: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
