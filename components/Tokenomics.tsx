"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart,
  Pie as RechartsPie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import {
  Coins,
  Flame,
  DollarSign,
  PieChart as PieChartIcon,
} from "lucide-react";

const tokenomicsData = [
  {
    title: "Distribution",
    icon: PieChartIcon,
    content: "Total Supply: 1,000,000,000 $GUAC",
    funFact: "That's enough $GUAC for every avocado toast in Brooklyn!",
    chart: [
      { name: "Liquidity Pool", value: 50, color: "#4CAF50" },
      { name: "Team", value: 20, color: "#2196F3" },
      { name: "Marketing", value: 15, color: "#FFC107" },
      { name: "Community Rewards", value: 15, color: "#FF5722" },
    ],
  },
  {
    title: "Taxes",
    icon: Coins,
    content: "5% Buy Tax | 5% Sell Tax",
    funFact: "Our taxes are lower than the cost of extra guac at Chipotle!",
    details: [
      "2% to Liquidity Pool",
      "2% to Marketing Wallet",
      "1% to Community Rewards",
    ],
  },
  {
    title: "Liquidity",
    icon: DollarSign,
    content: "Initial Liquidity: $100,000",
    funFact: "That's like 20,000 large guacamole orders!",
    details: ["Locked for 1 year", "Automatic LP generation from taxes"],
  },
  {
    title: "Burning",
    icon: Flame,
    content: "Deflationary Mechanism",
    funFact: "We're making $GUAC tokens rarer than a perfectly ripe avocado!",
    details: [
      "1% of every transaction is burned",
      "Periodic manual burns based on milestones",
    ],
  },
];

const TabButton = ({
  isActive,
  onClick,
  children,
  Icon,
}: {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  Icon: React.ElementType;
}) => (
  <motion.button
    className={`px-4 py-2 rounded-t-lg font-semibold transition-colors duration-200 flex items-center space-x-2 ${
      isActive
        ? "bg-green-600 text-white"
        : "bg-green-200 text-green-800 hover:bg-green-300"
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={20} />
    <span>{children}</span>
  </motion.button>
);

const GuacTokenomics = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 w-[80%]">
        <motion.h2
          className="text-4xl font-bold text-center text-green-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          $GUAC Tokenomics: The Spiciest Financials in Town!
        </motion.h2>
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* <Image
              src="/img_01.png"
              alt="$GUAC mascot"
              width={200}
              height={200}
              className="transform -scale-x-100"
            /> */}
          </motion.div>
          <div className="flex flex-wrap justify-center border-b border-green-200 pt-16 md:pt-0">
            {tokenomicsData.map((tab, index) => (
              <TabButton
                key={tab.title}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
                Icon={tab.icon}
              >
                {tab.title}
              </TabButton>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                {tokenomicsData[activeTab].title}
              </h3>
              <p className="text-lg text-green-800 mb-4">
                {tokenomicsData[activeTab].content}
              </p>
              <motion.p
                className="text-md text-green-600 italic mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Fun fact: {tokenomicsData[activeTab].funFact}
              </motion.p>
              {tokenomicsData[activeTab].details && (
                <ul className="list-disc list-inside text-green-700 mb-4">
                  {tokenomicsData[activeTab].details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              )}
              {tokenomicsData[activeTab].chart && (
                <motion.div
                  className="w-full h-64"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <RechartsPie
                        data={tokenomicsData[activeTab].chart}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        labelLine={false}
                        animationBegin={0}
                        animationDuration={1000}
                      >
                        {tokenomicsData[activeTab].chart.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </RechartsPie>
                    </PieChart>
                  </ResponsiveContainer>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GuacTokenomics;
