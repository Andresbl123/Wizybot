import { Message } from "@src/services/config.types";
import { ChatMessage } from "../ChatMessage";
import { TypingIndicator } from "../TypingIndicator";

export interface ContainerChatProps {
  messages: Message[];
  isLoading?: boolean;
}

export function ContainerChat(props: ContainerChatProps) {
  const { messages, isLoading = false } = props;
  return (
    <div id="chat-messages" className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      {isLoading && <TypingIndicator />}
    </div>
  );
}
