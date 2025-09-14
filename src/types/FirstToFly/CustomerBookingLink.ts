import type { CDEntity } from "../entity";


export interface FTFCustomerBookingLink extends CDEntity {
  tenantOID: string;
  bookingOID: string;
  expiresAt: string | null;
  isActive: boolean;
  accessCount: number;
  failedAccessCount: number;
  lastAccessedAt: string | null;
  customerEmail: string | null;
  isVerified: boolean;
  verifiedAt: string | null;
  metadata: Record<string, unknown> | null;
  qrCodeUrl?: string;
  accessUrl?: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}
