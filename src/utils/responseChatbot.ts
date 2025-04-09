interface ResponsePattern {
  patterns: string[];
  response: string;
  showProducts?: boolean;
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
    patterns: [
      "product",
      "recommendations",
      "products",
      "recommend",
      "productos",
      "productos",
      "recomendaciones",
      "recomendar",
    ],
    response: "Sure! Here are some product recommendations:",
    showProducts: true,
  },
];

const DEFAULT_RESPONSE = {
  response:
    "I understand your message. Is there anything else I can help you with?",
  showProducts: false,
};

export function getAssistantResponse(
  userInput: string
): Omit<ResponsePattern, "patterns"> {
  const input = userInput.toLowerCase().trim();

  const matchedPattern = responsePatterns.find((pattern) =>
    pattern.patterns.some((p) => input.includes(p))
  );

  return matchedPattern
    ? {
        response: matchedPattern.response,
        showProducts: matchedPattern.showProducts || false,
      }
    : DEFAULT_RESPONSE;
}
