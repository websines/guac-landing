"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GuacHero = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img_02.png"
          alt="Guacamole themed background"
          layout="fill"
          className="w-full object-cover"
          quality={100}
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-green-900 sm:text-5xl md:text-6xl">
                Welcome to the World of{" "}
                <span className="text-green-600">$GUAC</span>
              </h1>
              <p className="mt-6 text-xl text-green-800">
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
                href="#buy"
                className="rounded-md bg-green-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-transform duration-200 hover:scale-105"
              >
                Buy $GUAC
              </a>
              <a
                href="#about"
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
              <Image
                src="/img_01.png"
                alt="$GUAC mascot"
                height={300}
                width={300}
                className="drop-shadow-2xl object-contain w-[100px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuacHero;
