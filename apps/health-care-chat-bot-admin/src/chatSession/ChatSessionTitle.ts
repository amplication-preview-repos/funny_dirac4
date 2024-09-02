import { ChatSession as TChatSession } from "../api/chatSession/ChatSession";

export const CHATSESSION_TITLE_FIELD = "id";

export const ChatSessionTitle = (record: TChatSession): string => {
  return record.id?.toString() || String(record.id);
};
