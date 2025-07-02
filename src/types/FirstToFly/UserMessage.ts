import { CDBaseEntity } from "../entity";


export interface FTFUserMessage extends CDBaseEntity {
  userMessageOID: string;
  tenantOID: string;
  userOID: string;
  title: string;
  type: string;
  key: string;
  bodyFormat: string;
  bodyParams?: Array<{
    key: string;
    value: {
      oid?: string;
      text?: string;
      link?: string;
      meta?: Array<{
        key: string;
        value: string;
      }>;
    };
  }>;
  isRead: boolean;
  isResolved: boolean;
  metadata?: Record<string, unknown>;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
}
