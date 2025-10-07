import type { CDEntity } from "../entity";


export type EmailTemplateKey =
  | "payment.request"
  | "user.invitation"
  | "group-tour.booking.confirmation"
  | "independent-tour.booking.confirmation"
  | "independent-tour.booking.cancellation"
  | "user-message.notification"
  | "approval.notification"
  | "approval.outcome"
  | "approval.timeout-warning"
  | "tour-departure.min-pax-alert"
  | "customer.verification-otp"
  | "customer.booking-link";

/**
 * @export
 * @interface FTFEmailTemplate
 * @extends {CDEntity}
 */
export interface FTFEmailTemplate extends CDEntity {
  id: string;
  key: EmailTemplateKey;
  tenantOID: string | null;
  locale: string | null;
  subjectTemplate: string;
  bodyTemplate: string;
  textTemplate: string | null;
  isActive: boolean;
  version: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
