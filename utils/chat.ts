import { Message } from "@/types/chat";

const CHAT_EXPIRY_TIME = 10 * 60 * 1000; // 10 minutes in milliseconds

export const loadMessages = (): Message[] => {
  if (typeof window === "undefined") return [];
  
  const saved = localStorage.getItem("chatMessages");
  const timestamp = localStorage.getItem("chatTimestamp");
  
  if (!saved || !timestamp) return [];
  
  // Check if chat has expired
  const now = new Date().getTime();
  const savedTime = parseInt(timestamp);
  
  if (now - savedTime > CHAT_EXPIRY_TIME) {
    // Clear expired chat
    localStorage.removeItem("chatMessages");
    localStorage.removeItem("chatTimestamp");
    return [];
  }
  
  return JSON.parse(saved);
};

export const saveMessages = (messages: Message[]): void => {
  if (typeof window === "undefined") return;
  
  localStorage.setItem("chatMessages", JSON.stringify(messages));
  localStorage.setItem("chatTimestamp", new Date().getTime().toString());
};

export const generateResponse = async (
  message: string,
  messages: Message[]
): Promise<string> => {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: messages,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate response");
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
}; 