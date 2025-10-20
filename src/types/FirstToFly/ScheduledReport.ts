export enum ScheduleType {
  ONCE = "once",
  DAILY = "daily",
  WEEKLY = "weekly",
  MONTHLY = "monthly",
  CRON = "cron",
}

export interface FTFScheduledReport {
  scheduledReportOID: string;

  // Report Configuration
  slug: string;
  name: string;
  description?: string | null;

  // Department Association (optional)
  departmentOID?: string | null;

  // Report Parameters
  filters: Record<string, unknown>;
  format: string;

  // Scheduling Configuration
  scheduleType: ScheduleType;
  cronExpression?: string | null;
  timezone: string;

  // Schedule Status
  isActive: boolean;
  lastRunAt?: string | null; // ISO date string
  nextRunAt?: string | null; // ISO date string
  lastReportOID?: string | null;

  // Notification Settings
  notifyOnCompletion: boolean;
  notificationEmails?: string[] | null;

  // Error Tracking
  consecutiveFailures: number;
  lastErrorMessage?: string | null;

  // Tenant Association
  tenantOID: string;

  // Audit Fields
  createdAt: string;
  updatedAt?: string | null;
  createdBy: string;
  updatedBy?: string | null;
}
