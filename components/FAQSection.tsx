"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is $GUAC?",
    answer:
      "$GUAC is a meme token inspired by everyone's favorite dip - guacamole! It's designed to bring fun, community, and a dash of flavor to the crypto world.",
  },
  {
    question: "How can I buy $GUAC?",
    answer:
      "You can buy $GUAC on KSPR Bot. Make sure you have some KASPA in your wallet, connect to KSPR Bot, and swap KASPA for $GUAC. Always double-check the contract address to ensure you're getting the real $GUAC!",
  },
  {
    question: "Is $GUAC safe?",
    answer:
      "While $GUAC is designed with fun in mind, we take security seriously. Our contract is audited, and liquidity is locked. However, always remember that crypto investments carry risks, so only invest what you can afford to lose.",
  },
  {
    question: "What makes $GUAC different from other meme tokens?",
    answer:
      "Unlike many meme tokens, $GUAC has a strong community focus and a roadmap for sustainable growth. We're not just here for a quick pump - we're building a whole ecosystem around our tasty token!",
  },
  {
    question: "Are there any fees when trading $GUAC?",
    answer: "No!",
  },
  {
    question: "How can I get involved in the $GUAC community?",
    answer:
      "Join our Telegram and Discord channels! We have active communities where you can chat with fellow $GUAC enthusiasts, participate in contests, and stay updated on the latest $GUAC news.",
  },
];

const GuacFAQ = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-green-800 mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-green-700 hover:text-green-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-green-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default GuacFAQ;
