import { CDEntity } from "../entity";
import { NamedURL } from "../url";

/**
 * @export
 * @interface FTFDocument
 * @extends {CDEntity}
 */
export interface FTFDocument extends CDEntity {

  entityOID: string; // linkage to the entity that owns this document

  type: string;
  name: string;
  docIdentification: string;

  issueDate: string;
  expiryDate: string;

  files: NamedURL[] | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
