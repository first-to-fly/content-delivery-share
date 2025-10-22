import type { CDEntity } from "../entity";
import type { BookingPaymentStatus } from "../enums/bookingTypes";


export enum CustomizedTourBookingStatus {
  DRAFT = "draft",
  PENDING = "pending",
  CONFIRMED = "confirmed",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}


export interface FTFCustomizedTourBooking extends CDEntity {
  tenantOID: string;
  customerOID: string;
  departmentOID: string | null;
  stationCodeOID: string | null;
  saleStaffOID: string | null;
  saleReferrerOID: string | null;
  paymentOrderOID: string | null;
  budgetOID: string | null;

  bookingReference: string;
  status: CustomizedTourBookingStatus;
  paymentStatus: BookingPaymentStatus;
  overwriteDeposit: number | null;
  expectedCancelTime: string | null;
  specialInstructions: string[] | null;
  insuranceDeclaration: string | null;
  remarks: string | null;
  isCustomerConfirmed: boolean;
  customerConfirmedAt: string | null;
  totalAmount: number | null;
  receivedAmount: number | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;

  itineraryOIDs: string[] | null;
  costItemOIDs: string[] | null;
  taskOIDs: string[] | null;
}
