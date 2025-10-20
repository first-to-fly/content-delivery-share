import type { BookingPaxPersonalDetails } from "../enums/bookingTypes";


/**
 * Common transfer-related metadata used by both GTB and ITB in Content Delivery.
 */
export interface BaseTransferMetadata {
  /** If this is a destination booking, OID of the source booking it was transferred from */
  transferredFrom?: string;
  /** If this is a source booking, list of newly created destination booking OIDs */
  transferredTo?: string[];
  /** The approval request OID governing this transfer operation */
  transferApprovalRequestOID?: string;
  /** ISO datetime string when the transfer was executed/recorded */
  transferDate?: string;
  /** User OID who approved the transfer upon completion */
  transferApprovedBy?: string;
  /** Mapping of original passenger OIDs → new passenger OIDs on destination booking(s) */
  passengerMapping?: Record<string, string>;
  /** Mapping of original room OIDs → new room OIDs created by the transfer */
  roomMapping?: Record<string, string>;
  /** Mapping of original addon OIDs → new addon OIDs on destination booking(s) */
  addonMapping?: Record<string, string>;
  /** Mapping of original discount OIDs → new discount OIDs on destination booking(s) */
  discountMapping?: Record<string, string>;
  /** Cross-module correlation details for GTB↔ITB transfer scenarios */
  crossModuleTransfer?: {
    /** Booking type of the original/source booking */
    originalBookingType?: "GTB" | "ITB";
    /** Booking type of the destination(s); use "mixed" if both GTB and ITB */
    targetBookingType?: "GTB" | "ITB" | "mixed";
    /** All destination booking OIDs created by this transfer */
    targetBookingOIDs?: string[];
  };
}

/**
 * Minimal passenger audit info recorded during transfer.
 */
export interface TransferPassengerBase {
  /** Original passenger OID on the source booking (if available) */
  oid?: string;
  /** Passenger name captured at time of transfer (if available) */
  name?: string;
}

/**
 * GTB-specific passenger info, including the target tour departure.
 */
export interface GTBTransferPassenger extends TransferPassengerBase {
  /** For GTB→GTB, target tour departure OID the passenger is moved into */
  targetTourDepartureOID?: string;
}

/**
 * GTB-specific transfer metadata.
 */
export interface GTBTransferMetadata extends BaseTransferMetadata {
  /** Passengers included in the transfer (GTB flavor) */
  transferPassengers?: GTBTransferPassenger[];
}

/**
 * ITB-specific transfer metadata.
 */
export interface ITBTransferMetadata extends BaseTransferMetadata {
  /** Passengers included in the transfer (generic) */
  transferPassengers?: TransferPassengerBase[];
}

/**
 * Primary customer/contact information required for all bookings.
 */
export interface BookingPendingPaymentLink {
  /** AirWallex payment link identifier */
  id: string;
  /** Direct URL for the payment link */
  url: string;
  /** Requested amount (major currency units) */
  amount?: number;
  /** Currency code used for the payment link */
  currency?: string;
  /** Booking reference supplied when creating the link */
  reference?: string;
  /** Human readable title provided to the link */
  title?: string;
  /** Description accompanying the link */
  description?: string;
  /** Current status reported by AirWallex */
  status?: "UNPAID" | "PAID";
  /** ISO timestamp when the link was created */
  createdAt?: string;
  /** ISO timestamp when the link will expire */
  expiresAt?: string;
  /** Internal user ID who initiated the link */
  createdBy?: string;
  /** Email address associated with the payment link */
  customerEmail?: string;
  /** Preferred payment way identifier for reconciliation */
  paymentWayOID?: string;
}

/**
 * Primary customer/contact information required for all bookings.
 */
export interface BaseBookingCustomerMetadata {
  /** Contact details of the main customer for the booking */
  customer: BookingPaxPersonalDetails;
  /** Outstanding AirWallex payment links awaiting settlement */
  pendingPaymentLinks?: BookingPendingPaymentLink[];
}
