import type { CDEntity } from "../entity";


export enum BookingAddonType {
  PRICING_ENTRY = "pricing_entry",
  MANUAL = "manual",
}

export interface FTFBookingAddon extends CDEntity {
  tenantOID: string;
  bookingOID: string;
  type: BookingAddonType;
  groupTourPricingOID: string | null;
  groupTourCostingEntryOID: string | null;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  tax: number | null;
  supplierOID: string | null;
  notes: string | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}