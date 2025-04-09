interface ResponsePattern {
  patterns: string[];
  response: string;
}

const responsePatterns: ResponsePattern[] = [
  {
    patterns: ["hola", "saludos"],
    response: "Hello! How can I help you today?",
  },
  {
    patterns: ["como estas", "cómo estás"],
    response: "I'm doing well, thanks for asking. How about you?",
  },
  {
    patterns: ["gracias"],
    response: "You're welcome! I'm here to help.",
  },
  {
    patterns: ["adios", "adiós", "hasta luego"],
    response: "Goodbye! Have a great day.",
  },
  {
    patterns: ["I want product recommendations"],

    response: "Goodbye! Have a great day.",
  },
];

const DEFAULT_RESPONSE =
  "I understand your message. Is there anything else I can help you with?";

export function getAssistantResponse(userInput: string): string {
  const input = userInput.toLowerCase().trim();

  const matchedPattern = responsePatterns.find((pattern) =>
    pattern.patterns.some((p) => input.includes(p))
  );

  return matchedPattern ? matchedPattern.response : DEFAULT_RESPONSE;
}
