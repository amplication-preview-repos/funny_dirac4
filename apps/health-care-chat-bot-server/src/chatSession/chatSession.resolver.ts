import * as graphql from "@nestjs/graphql";
import { ChatSessionResolverBase } from "./base/chatSession.resolver.base";
import { ChatSession } from "./base/ChatSession";
import { ChatSessionService } from "./chatSession.service";

@graphql.Resolver(() => ChatSession)
export class ChatSessionResolver extends ChatSessionResolverBase {
  constructor(protected readonly service: ChatSessionService) {
    super(service);
  }
}
