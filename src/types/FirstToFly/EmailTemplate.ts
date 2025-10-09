import type { CDEntity } from "../entity";
import type { MultiLangRecord } from "../multipleLanguage";


export enum EmailTemplateKey {
  PAYMENT_REQUEST = "payment.request",
  USER_INVITATION = "user.invitation",
  GROUP_TOUR_BOOKING_CONFIRMATION = "group-tour.booking.confirmation",
  INDEPENDENT_TOUR_BOOKING_CONFIRMATION = "independent-tour.booking.confirmation",
  INDEPENDENT_TOUR_BOOKING_CANCELLATION = "independent-tour.booking.cancellation",
  USER_MESSAGE_NOTIFICATION = "user-message.notification",
  APPROVAL_NOTIFICATION = "approval.notification",
  APPROVAL_OUTCOME = "approval.outcome",
  APPROVAL_TIMEOUT_WARNING = "approval.timeout-warning",
  TOUR_DEPARTURE_MIN_PAX_ALERT = "tour-departure.min-pax-alert",
  CUSTOMER_VERIFICATION_OTP = "customer.verification-otp",
  CUSTOMER_BOOKING_LINK = "customer.booking-link",
}

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
