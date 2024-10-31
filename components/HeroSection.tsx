"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GuacHero = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 z-0" style={{ top: '10px', bottom: '-10px' }}>
        <Image
          src="/guac_banner.jpg"
          alt="Guacamole themed background"
          fill
          className="w-full h-full object-cover"
          quality={100}
          priority
          sizes="100vw"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-md">
          <div className="relative -mt-20 sm:-mt-25">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 8 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-green-900 px-5">
                Welcome to the World of{" "}
                <span className="text-green-600">$GUAC</span>
              </h1>
              <p className="mt-6 text-xl text-green-800 px-5">
                The tastiest meme token in the crypto universe. It's not just a
                coin, it's a whole bowl of fun!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 flex justify-center gap-x-6"
            >
              <a
                href="https://t.me/kspr_home_bot?start=WdRcvw"
                className="rounded-md bg-green-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-transform duration-200 hover:scale-105"
              >
                Buy $GUAC
              </a>
              <a
                href="#faq"
                className="rounded-md bg-green-100 px-8 py-3 text-lg font-semibold text-green-900 shadow-sm hover:bg-green-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100 transition-transform duration-200 hover:scale-105"
              >
                Learn More
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-20 -right-20 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuacHero;
