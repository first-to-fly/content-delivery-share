import { CDEntity } from "../entity";


export enum CounterType {
  SEQUENTIAL = "Sequential",
  RANDOM = "Random",
}

export enum ResetCounterType {
  DISABLED = "Disabled",
  DAILY = "Daily",
  MONTHLY = "Monthly",
  YEARLY = "Yearly",
}

/**
 * @export
 * @interface FTFReferenceCodeTemplate
 * @extends {CDEntity}
 */
export interface FTFReferenceCode extends CDEntity {
  tenantOID: string;

  name: string;
  moduleName: string;
  counterType: CounterType;
  resetCounterType: ResetCounterType;
  counterWidth: number;
  template: string;

  // Relationships
  availableComponents: string[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
