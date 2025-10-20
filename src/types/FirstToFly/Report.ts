export enum ReportStatus {
  PENDING = "pending",
  GENERATING = "generating",
  COMPLETED = "completed",
  FAILED = "failed",
}

export enum ReportFormat {
  PDF = "pdf",
  XLSX = "xlsx",
  CSV = "csv",
}

export interface FTFReport {
  reportOID: string;

  // Report Identification
  slug: string;
  name: string;
  description?: string | null;

  // Department Association (optional for tenant-level reports)
  departmentOID?: string | null;

  // Report Configuration
  filters: Record<string, unknown>;
  format: ReportFormat;

  // File Storage
  fileUrl?: string | null;
  fileSizeBytes?: number | null;
  fileKey?: string | null;

  // Generation Metadata
  status: ReportStatus;
  generatedAt?: string | null; // ISO date string
  errorMessage?: string | null;

  // Row Count
  totalRows?: number | null;

  // Tenant Association
  tenantOID: string;

  // Audit Fields
  createdAt: string;
  updatedAt?: string | null;
  createdBy: string;
  updatedBy?: string | null;
}
