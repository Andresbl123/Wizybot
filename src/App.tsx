import { FormEvent, useEffect, useState } from "react";
import { MdSend } from "react-icons/md";

import { Textfield } from "./components/Textfield";
import { User } from "./components/User";

import { Message } from "./services/config.types";
import { Button } from "./components/Button";
import { ContainerChat } from "./components/Chat/ContainerChat";
import { getAssistantResponse } from "./utils/responseChatbot";
import { maperGetProductsDemo } from "./services/products/data";
import { URLS } from "./services/config";
import { ProductDemo } from "./services/products/interfaces";
import { getRandomPiece } from "./utils/sliceArrayProducts";

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello there! Do you need any help?",
      role: "assistant",
      products: [],
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const chatContainer = document.getElementById("chat-messages");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const { response, showProducts } = getAssistantResponse(input);

    if (showProducts) {
      const products = await maperGetProductsDemo(URLS.productDemos);

      const copyproducts = getRandomPiece<ProductDemo>(products, 5);

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
        products: copyproducts,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    } else {
      setTimeout(() => {
        const assistantMessage: Message = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 3000);
    }
  };

  getAssistantResponse(input);

  return (
    <div className="flex flex-col w-[40rem] h-screen bg-gray-100">
      <User userName="Andres" userStatus="conectado" />

      <ContainerChat messages={messages} isLoading={isLoading} />

      <div className="border-t bg-white p-4">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Textfield
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            variant="primary"
          >
            <MdSend />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
