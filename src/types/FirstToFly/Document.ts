import { CDEntity } from "../entity";
import { NamedURL } from "../url";


export enum DocumentType {
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

  type: DocumentType;
  name: string;
  docIdentification: string;

  issuedDate: string;
  expiryDate: string;

  files: NamedURL[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
