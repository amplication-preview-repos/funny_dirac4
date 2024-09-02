import * as graphql from "@nestjs/graphql";
import { HealthRecordResolverBase } from "./base/healthRecord.resolver.base";
import { HealthRecord } from "./base/HealthRecord";
import { HealthRecordService } from "./healthRecord.service";

@graphql.Resolver(() => HealthRecord)
export class HealthRecordResolver extends HealthRecordResolverBase {
  constructor(protected readonly service: HealthRecordService) {
    super(service);
  }
}
