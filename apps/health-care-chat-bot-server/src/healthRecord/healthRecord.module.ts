import { Module } from "@nestjs/common";
import { HealthRecordModuleBase } from "./base/healthRecord.module.base";
import { HealthRecordService } from "./healthRecord.service";
import { HealthRecordController } from "./healthRecord.controller";
import { HealthRecordResolver } from "./healthRecord.resolver";

@Module({
  imports: [HealthRecordModuleBase],
  controllers: [HealthRecordController],
  providers: [HealthRecordService, HealthRecordResolver],
  exports: [HealthRecordService],
})
export class HealthRecordModule {}
