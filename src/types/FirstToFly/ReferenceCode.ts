import { CDEntity } from "../entity";


export enum CounterType {
  SEQUENTIAL = "sequential",
  // Add other counter types as needed
}

export enum ResetCounterType {
  MONTHLY = "monthly",
  YEARLY = "yearly",
  NEVER = "never",
  // Add other reset types as needed
}

export enum ComponentType {
  NUMERIC = 1,
  DATE = 2,
  TEXT = 3,
  // Add other component types as needed
}

/**
 * @export
 * @interface FTFReferenceCode
 * @extends {CDEntity}
 */
export interface FTFReferenceCode extends CDEntity {
  tenantOID: string;

  moduleOID?: number;
  name: string;

  // Counter specific fields
  counterType?: CounterType;
  resetCounterType?: ResetCounterType;
  counterWidth?: number;
  template?: string;

  // Common fields
  remarks?: string;
  parentOID?: number | null;
  seq?: number;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}

/**
 * @export
 * @interface FTFCounterComponent
 * @extends {CDEntity}
 */
export interface FTFCounterComponent extends CDEntity {
  tenantOID: string;

  name: string;
  code: string;
  type: ComponentType;
  seq: number;
  description?: string;

  isActive: boolean;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}

/**
 * @export
 * @interface FTFCounterComponentMapping
 */
export interface FTFCounterComponentMapping {
  counterOID: string;
  componentOID: string;
}
