"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "@/types/chat";
import { loadMessages, saveMessages, generateResponse } from "@/utils/chat";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const preWrittenQuestions = [
  "What is $GUAC?",
  "How can I buy $GUAC?",
  "What are $GUAC's tokenomics?",
  "Why should I invest in $GUAC?",
];

const LoadingDots = () => (
  <div className="flex space-x-1.5">
    {[1, 2, 3].map((dot) => (
      <motion.span
        key={dot}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: dot * 0.1,
        }}
        className="h-1.5 w-1.5 bg-green-600 rounded-full"
      />
    ))}
  </div>
);

export default function GuacChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedMessages = loadMessages();
    if (savedMessages.length === 0) {
      setMessages([
        {
          id: 1,
          content:
            "Hello! I'm the $GUAC AI assistant. How can I help you today?",
          role: "assistant",
          createdAt: new Date(),
        },
      ]);
    } else {
      setMessages(savedMessages);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      saveMessages(messages);
    }
  }, [messages]);

  useEffect(() => {
    const checkExpiry = setInterval(() => {
      const savedMessages = loadMessages();
      // If messages were cleared due to expiry, reset to initial state
      if (savedMessages.length === 0 && messages.length > 0) {
        setMessages([
          {
            id: 1,
            content:
              "Hello! I'm the $GUAC AI assistant. How can I help you today?",
            role: "assistant",
            createdAt: new Date(),
          },
        ]);
      }
    }, 60000); // Check every minute

    return () => clearInterval(checkExpiry);
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now(),
      content,
      role: "user",
      createdAt: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await generateResponse(content, updatedMessages);
      const botMessage: Message = {
        id: Date.now() + 1,
        content: response,
        role: "assistant",
        createdAt: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        content: "Sorry, I encountered an error. Please try again.",
        role: "assistant",
        createdAt: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="rounded-full w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <span
                role="img"
                aria-label="Avocado"
                className="text-2xl filter drop-shadow-md"
              >
                🥑
              </span>
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Card className="w-80 h-[28rem] flex flex-col shadow-2xl border-2 border-green-400/50 backdrop-blur-sm bg-white/95">
              <CardHeader className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-md">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl font-bold">$GUAC Chatbot</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-green-600 rounded-full"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden p-4 bg-gradient-to-b from-green-50/50 to-white">
                <ScrollArea
                  className="h-full pr-4 scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent"
                  id="chat-content"
                >
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      } mb-4`}
                    >
                      <div
                        className={`flex items-end ${
                          message.role === "user"
                            ? "flex-row-reverse"
                            : "flex-row"
                        }`}
                      >
                        <Avatar
                          className={`${
                            message.role === "user" ? "ml-2" : "mr-2"
                          } w-8 h-8`}
                        >
                          <AvatarFallback>
                            {message.role === "user" ? "👤" : "🥑"}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`rounded-lg p-2.5 max-w-[80%] ${
                            message.role === "user"
                              ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md text-sm lg:text-base"
                              : "bg-white/90 border border-green-300 text-green-800 shadow-sm text-sm lg:text-base"
                          }`}
                        >
                          {message.isTyping ? (
                            <div className="flex space-x-1.5 p-2">
                              <motion.span
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 1.2, repeat: Infinity }}
                                className="h-1.5 w-1.5 bg-green-600 rounded-full"
                              />
                              <motion.span
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{
                                  duration: 1.2,
                                  repeat: Infinity,
                                  delay: 0.2,
                                }}
                                className="h-1.5 w-1.5 bg-green-600 rounded-full"
                              />
                              <motion.span
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{
                                  duration: 1.2,
                                  repeat: Infinity,
                                  delay: 0.4,
                                }}
                                className="h-1.5 w-1.5 bg-green-600 rounded-full"
                              />
                            </div>
                          ) : (
                            <p className="text-sm">{message.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start mb-4">
                      <div className="flex items-end flex-row">
                        <Avatar className="mr-2 w-8 h-8">
                          <AvatarFallback>🥑</AvatarFallback>
                        </Avatar>
                        <div className="rounded-lg p-3 bg-white/90 border border-green-300 text-green-800 shadow-sm">
                          <LoadingDots />
                        </div>
                      </div>
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
              <CardFooter className="p-2.5 bg-white/90 border-t border-green-100">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(input);
                  }}
                  className="flex w-full space-x-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about $GUAC..."
                    className="flex-grow border-green-300 focus:ring-green-500 text-sm bg-white/90 placeholder-green-400/70 shadow-inner"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md transition-all duration-200"
                  >
                    Send
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute bottom-0 right-full mb-2 mr-2 p-3 bg-green-100/90 backdrop-blur-sm rounded-lg shadow-xl w-64 border border-green-300"
          >
            <p className="text-xs font-semibold text-green-800 mb-3">
              Quick Questions:
            </p>
            <div className="flex flex-col gap-2">
              {preWrittenQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    handleSendMessage(question);
                    setIsDrawerOpen(false);
                  }}
                  className="text-xs bg-white/90 text-green-700 border-green-300 hover:bg-green-50 hover:border-green-400 justify-start font-normal transition-all duration-200 shadow-sm"
                >
                  {question}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
