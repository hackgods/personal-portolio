"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";


export const StickyNav = ({
    navItems,
    className,
  }: {
    navItems: {
      name: string;
      link: string;
      icon?: JSX.Element;
    }[];
    className?: string;
  }) => {
    const { scrollYProgress } = useScroll();
  
    const [visible, setVisible] = useState(true); // Change initial state to true
  
    useMotionValueEvent(scrollYProgress, "change", (current) => {
      if (typeof current === "number") {
        const SCROLL_DOWN_THRESHOLD = 0.05; // Adjust this threshold as needed
  
        if (current > SCROLL_DOWN_THRESHOLD) { // If scrolling down beyond threshold
          setVisible(false); // Hide the navigation bar
        } else {
          setVisible(true); // Otherwise, keep it visible
        }
      }
    });
  
    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit mx-auto fixed top-5 inset-x-0 border border-white/[0.5] rounded-full bg-zinc-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-4  items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
              )}
            >
              <span>{navItem.icon}</span>
              <span className="text-sm">{navItem.name}</span>
            </Link>
          ))}
          <div className="px-1">
            
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };
  