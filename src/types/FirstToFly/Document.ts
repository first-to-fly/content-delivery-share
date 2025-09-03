import type { CDEntity } from "../entity";
import type { NamedURL } from "../url";


export enum FTFDocumentType {
  PASSPORT = "passport",
  NATIONAL_ID = "national_id",
  DRIVING_LICENSE = "driving_license",
  VISA = "visa",
  MARRIAGE_CERTIFICATE = "marriage_certificate",
  BIRTH_CERTIFICATE = "birth_certificate",
  TRAVEL_PERMIT = "travel_permit",
  OTHER = "other",
}

/**
 * @export
 * @interface FTFDocument
 * @extends {CDEntity}
 */
export interface FTFDocument extends CDEntity {

  entityOID: string; // linkage to the entity that owns this document

  type: FTFDocumentType;
  name: string | null;
  docIdentification: string | null;

  issuedDate: string | null;
  expiryDate: string | null;

  files: NamedURL[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
