import type { CDEntity } from "../entity";

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

export interface FTFIndependentTourBookingPax extends CDEntity {
  
  independentTourBookingRoomOID: string;
  
  paxType: BookingPaxType;
  personalDetails: BookingPaxPersonalDetails;
  
  // Document references
  documentOIDs?: string[];
  
  // Additional information
  ageAtTravel?: number;
  dietaryRequirements?: string[];
  medicalConditions?: string[];
  
  // Insurance information
  insurancePolicyNumber?: string;
  insuranceProvider?: string;
  insuranceValidUntil?: string; // ISO date string
  
  // Transport preferences (for optional transport services)
  transportRecordOID?: string;
  seatPreference?: string;
  
  sortOrder?: number;
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy?: string;
}