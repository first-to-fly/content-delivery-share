export enum BookingPaxType {
  TWIN = "twin",
  SINGLE = "single",
  TRIPLE = "triple",
  QUAD = "quad",
  CHILD_TWIN = "child_twin",
  CHILD_WITH_BED = "child_with_bed",
  CHILD_NO_BED = "child_no_bed",
  INFANT = "infant",
}

// Personal details interface for booking pax
export interface BookingPaxPersonalDetails {
  title: string;
  gender: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  nationality?: string;
  email?: string;
  phone?: string;
  alternativeMobile?: string;
  address?: string;
  postalCode?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  travelDocuments?: {
    visaApplicationRequired: boolean;
    passportNumber?: string;
    passportIssueDate?: string;
    passportExpiry?: string;
  };
  specialNeeds?: {
    mealRequest?: string;
    healthDeclaration?: string;
    wheelchairRequired: boolean;
  };
  isLeadPassenger?: boolean;
}

export enum BookingPaymentStatus {
  UNPAID = "unpaid",
  PARTIAL_DEPOSIT = "partial_deposit",
  DEPOSIT_PAID = "deposit_paid",
  FULLY_PAID = "fully_paid",
}


export enum BookingStatus {
  IN_PROGRESS = "in_progress",
  UNPAID = "unpaid",
  DEPOSIT_PAID = "deposit_paid",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  VOIDED = "voided",
  TRANSFERRED = "transferred",
}

export enum BookingRoomStatus {
  REQUESTED = "requested",
  CONFIRMED = "confirmed",
  WAITLISTED = "waitlisted",
  CANCELLED = "cancelled",
}

export enum BookingDiscountType {
  CODE_BASED = "CODE_BASED",
  SPECIAL_REQUEST = "SPECIAL_REQUEST",
  TOUR_DEPARTURE_DISCOUNT = "TOUR_DEPARTURE_DISCOUNT", // Specific to group tours
}
