import { HealthRecord as THealthRecord } from "../api/healthRecord/HealthRecord";

export const HEALTHRECORD_TITLE_FIELD = "id";

export const HealthRecordTitle = (record: THealthRecord): string => {
  return record.id?.toString() || String(record.id);
};
