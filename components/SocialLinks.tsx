"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart2, DollarSign } from "lucide-react";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";

const socialLinks = [
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "https://x.com/GuacKrc20",
    color: "bg-blue-400",
  },
  {
    name: "Telegram",
    icon: FaTelegramPlane,
    href: "https://t.me/guac_swap",
    color: "bg-blue-500",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    href: "https://discord.gg/d2QzKP5r8j",
    color: "bg-blue-500",
  },
  {
    name: "GUAC Swap",
    icon: DollarSign,
    href: "https://swap.guac.fyi/token/guac",
    color: "bg-green-500",
  },
  // { name: "Chart", icon: BarChart2, href: "#", color: "bg-yellow-400" },
];

const GuacSocial = () => {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-600 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex flex-wrap justify-center items-center py-4 px-2 sm:px-6 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`flex items-center justify-center ${link.color} text-white rounded-full w-12 h-12 m-2 transition-transform duration-200 ease-in-out hover:scale-110`}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-4 text-green-800"
        >
          Join the $GUAC community and stay updated!
        </motion.p>
      </div>
    </section>
  );
};

export default GuacSocial;
