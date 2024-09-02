import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatSessionServiceBase } from "./base/chatSession.service.base";

@Injectable()
export class ChatSessionService extends ChatSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
