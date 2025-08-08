import type { CDEntity } from "../entity";

// Enums redefined for content-delivery-share, or should be imported if a shared enum strategy exists
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
export interface GroupTourBookingPaxPersonalDetails {
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

export interface FTFGroupTourBookingPax extends CDEntity {
  // Fields specific to GroupTourBookingPax
  bookingOID: string;
  bookingRoomOID: string;
  type: BookingPaxType;
  isLandTourOnly: boolean;
  personalDetails: GroupTourBookingPaxPersonalDetails | null;
  mealPreference: string | null;
  transportRecordOID: string | null;
  documentOIDs: string[] | null;

  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string;
}
