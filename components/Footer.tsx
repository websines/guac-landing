"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaTelegram, FaDiscord, FaGithub } from "react-icons/fa";

const socialLinks = [
  { name: "Twitter", icon: FaTwitter, href: "https://x.com/GuacKrc20" },
  { name: "Telegram", icon: FaTelegram, href: "https://t.me/guac_swap" },
  { name: "Discord", icon: FaDiscord, href: "https://discord.gg/d2QzKP5r8j" },
  { name: "Github", icon: FaGithub, href: "#" },
];

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "FAQ", href: "#faq" },
  { name: "Buy $GUAC", href: "#buy" },
];

const GuacFooter = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4 w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">$GUAC</h3>
            <p className="text-green-200">
              The tastiest meme token in the crypto world. Join us on our
              mission to make finance fun and flavorful!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-green-200 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-green-700 text-center text-green-200"
        >
          <p>
            &copy; {new Date().getFullYear()} $GUAC Token. All rights reserved.
          </p>
          <p className="mt-2 text-sm">Disclaimer: Not an investment vehicle.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default GuacFooter;
