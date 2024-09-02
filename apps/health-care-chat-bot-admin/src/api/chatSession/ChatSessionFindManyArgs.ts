import { ChatSessionWhereInput } from "./ChatSessionWhereInput";
import { ChatSessionOrderByInput } from "./ChatSessionOrderByInput";

export type ChatSessionFindManyArgs = {
  where?: ChatSessionWhereInput;
  orderBy?: Array<ChatSessionOrderByInput>;
  skip?: number;
  take?: number;
};
