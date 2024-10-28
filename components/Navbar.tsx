"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  //   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const navigationMenuTriggerStyle = () => {
  return "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";
};

const GuacNavbar = () => {
  const pathname = usePathname();
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOverlayOpen]);

  useEffect(() => {
    setOverlayOpen(false);
  }, [pathname]);

  const handleOverlayToggle = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  return (
    <nav className="w-full top-0 p-4 bg-transparent z-50">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center space-x-2 ml-4 z-50">
          <motion.div
            className="rounded-full p-4 bg-green-100 cursor-pointer relative hover:scale-105 hover:bg-green-200 z-50"
            onClick={handleOverlayToggle}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-green-800"
            >
              {isOverlayOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              )}
            </svg>
          </motion.div>
          {!isOverlayOpen && (
            <Link href="/">
              <span className="text-2xl font-bold text-green-700">$GUAC</span>
            </Link>
          )}
        </div>
        <div className="w-[50%] justify-center items-center mx-auto">
          <ul className="hidden md:flex flex-row justify-evenly items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavItem href="/">Home</NavItem>
                <NavItem href="#about">About</NavItem>
                <NavItem href="#why-guac">Why $GUAC</NavItem>
                <NavItem href="#tokenomics">Tokenomics</NavItem>
                <NavItem href="#buy">Buy on KSPR Bot</NavItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ul>
        </div>
        <Link
          href="#buy"
          className="px-8 w-[70%] sm:w-auto py-4 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-700 text-sm transition duration-200 ease-in-out hover:scale-105 flex flex-row items-center justify-center"
        >
          Buy $GUAC
        </Link>
      </div>

      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            className="fixed inset-0 bg-green-900 bg-opacity-95 flex items-center justify-center z-40"
            style={{ maxHeight: "100vh" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col w-full p-16 items-start justify-start h-full text-white">
              <div className="h-[10%] sm:h-[20%] bg-transparent" />
              <div className="flex flex-col sm:mt-4 justify-start items-start p-4 w-full sm:w-[40%]">
                <ul className="text-xl font-semibold w-full">
                  <OverlayNavItem href="/" number="01">
                    Home
                  </OverlayNavItem>
                  <OverlayNavItem href="#about" number="02">
                    About
                  </OverlayNavItem>
                  <OverlayNavItem href="#why-guac" number="03">
                    Why $GUAC
                  </OverlayNavItem>
                  <OverlayNavItem href="#tokenomics" number="04">
                    Tokenomics
                  </OverlayNavItem>
                  <OverlayNavItem href="#buy" number="05">
                    Buy on KSPR Bot
                  </OverlayNavItem>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <NavigationMenuItem className="hover:bg-green-600 rounded-[10px] hover:bg-opacity-20 text-green-800">
    <Link href={href}>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {children}
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
);

const OverlayNavItem = ({
  href,
  number,
  children,
}: {
  href: string;
  number: string;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <li className="p-4 hover:bg-green-500 hover:bg-opacity-25 rounded-xl w-full flex flex-row items-baseline space-x-3">
      <span className="text-sm font-semibold">{number}. </span>
      <span className="font-bold tracking-wide">{children}</span>
    </li>
  </Link>
);

export default GuacNavbar;
