import { Message } from "@src/services/config.types";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage(props: ChatMessageProps) {
  const { message } = props;
  return (
    <div
      className={`flex ${
        message.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          message.role === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
