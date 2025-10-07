import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";


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

export interface FTFEmailTemplate extends CDEntity {
  key: EmailTemplateKey;
  tenantOID: string | null;
  subjectTemplate: MultiLangRecord<string>;
  bodyTemplate: MultiLangRecord<string>;
  textTemplate: MultiLangRecord<string | null>;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  createdBy: string;
  updatedBy: string | null;
}
