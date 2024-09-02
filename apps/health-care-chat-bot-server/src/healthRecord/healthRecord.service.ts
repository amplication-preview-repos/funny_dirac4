import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HealthRecordServiceBase } from "./base/healthRecord.service.base";

@Injectable()
export class HealthRecordService extends HealthRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
