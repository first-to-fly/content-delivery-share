import type { CDEntity } from "../entity";

export enum IndependentTourBookingAddonType {
  OPTIONAL_SERVICE = "optional_service",
  MANUAL = "manual",
}

export interface FTFIndependentTourBookingAddon extends CDEntity {
  
  independentTourBookingOID: string;
  
  addonType: IndependentTourBookingAddonType;
  
  // Reference to optional service or manual entry
  optionalServiceOID?: string; // Reference to IndependentTourOptionalService
  manualServiceName?: string; // For manual entries
  
  description?: string;
  serviceDate: string; // ISO date string - when the service will be provided
  
  // Pricing
  unitPrice: number;
  tax: number;
  quantity: number;
  totalPrice: number;
  
  // Service details
  supplierOID?: string;
  confirmationNumber?: string;
  voucherNumber?: string;
  
  // Passenger assignment (optional - some services apply to specific passengers)
  paxOIDs?: string[];
  
  notes?: string;
  
  sortOrder?: number;
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy?: string;
}