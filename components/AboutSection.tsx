"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Coins, Rocket, Users } from "lucide-react";

const aboutPoints = [
  {
    icon: Leaf,
    title: "Tasty Meme Token",
    description:
      "$GUAC is not just a token, it's a flavor explosion in the crypto world!",
  },
  {
    icon: Coins,
    title: "Community Driven",
    description:
      "Our community is the secret ingredient that makes $GUAC so special.",
  },
  {
    icon: Rocket,
    title: "Moon Mission",
    description:
      "We're not just going to the moon, we're making guacamole on it!",
  },
  {
    icon: Users,
    title: "Growing Ecosystem",
    description:
      "Join our ever-expanding family of guac lovers and crypto enthusiasts.",
  },
];

const GuacAbout = () => {
  return (
    <section className="py-16 bg-green-50 overflow-hidden">
      <div className="container mx-auto px-4 w-[80%]">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <Image
              src="/img_03.png"
              alt="$GUAC mascot"
              width={640}
              height={640}
              className="rounded-lg  mx-auto"
            />
          </motion.div>
          <div className="md:w-1/2 md:pl-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-green-800 mb-6"
            >
              About $GUAC
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-green-700 mb-8"
            >
              $GUAC is not your average meme token. We're here to add some zest
              to the crypto world and make your portfolio as tasty as a
              perfectly ripe avocado!
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <point.icon className="w-10 h-10 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-green-700">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuacAbout;
