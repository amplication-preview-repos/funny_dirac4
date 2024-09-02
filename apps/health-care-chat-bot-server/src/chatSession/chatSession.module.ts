import { Module } from "@nestjs/common";
import { ChatSessionModuleBase } from "./base/chatSession.module.base";
import { ChatSessionService } from "./chatSession.service";
import { ChatSessionController } from "./chatSession.controller";
import { ChatSessionResolver } from "./chatSession.resolver";

@Module({
  imports: [ChatSessionModuleBase],
  controllers: [ChatSessionController],
  providers: [ChatSessionService, ChatSessionResolver],
  exports: [ChatSessionService],
})
export class ChatSessionModule {}
