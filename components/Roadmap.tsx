"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Minting/Launch Platform",
    description: "Secure and user-friendly platform for token launch",
  },
  {
    phase: "Phase 2",
    title: "Custom KRC-20 Explorer",
    description: "Dedicated explorer for KRC-20 tokens",
  },
  {
    phase: "Phase 3",
    title: "Telegram Trending Platform",
    description: "Boost visibility and engagement on Telegram",
  },
  {
    phase: "Phase 4",
    title: "Swap/Mint/Deploy Platform",
    description: "All-in-one platform for token operations",
  },
];

export default function Roadmap() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-green-50"
      id="roadmap"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
          Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-green-600">
                    {item.phase}: {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
