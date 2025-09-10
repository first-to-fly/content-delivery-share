import type { CDEntity } from "../entity";


/**
 * @export
 * @interface FTFTransportPlan
 * @extends {CDEntity}
 */
export type FTFTransportPlan = CDEntity & {
  name: string;
  description: string | null;

  groupTourProductOID: string;

  transportSegmentOIDs: string[] | null;

  tenantOID: string;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
};
