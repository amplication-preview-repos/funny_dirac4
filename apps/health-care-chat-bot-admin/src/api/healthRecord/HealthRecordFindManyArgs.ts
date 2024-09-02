import { HealthRecordWhereInput } from "./HealthRecordWhereInput";
import { HealthRecordOrderByInput } from "./HealthRecordOrderByInput";

export type HealthRecordFindManyArgs = {
  where?: HealthRecordWhereInput;
  orderBy?: Array<HealthRecordOrderByInput>;
  skip?: number;
  take?: number;
};
