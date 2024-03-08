"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { personalData } from "@/constants";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-10 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white max-w-[600px] w-auto h-auto">
           
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase">
              {personalData.fName} {personalData.lName}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-2 max-w-[600px]">
            {personalData.description}
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 text-center text-stone-950/75 font-bold cursor-pointer rounded-lg max-w-[200px] bg-white"
        >
          Download CV
        </motion.a>
      </div>

      <div className="flex justify-center items-center">
            <motion.div
              variants={slideInFromRight(0.8)}
              className="my-5 flex justify-center items-center relative">
              <Image
                className="transform hover:scale-125 transition duration-500"
                src="/mainIconsdark.svg"
                alt="work icons"
                height={2000}
                width={2000}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  className="rounded-full transform hover:scale-125 transition duration-500"
                  src="/me.jpeg"
                  alt="me"
                  height={300}
                  width={300}
                />
              </div>
            </motion.div>
      </div>



    </motion.div>
  );
};

export default HeroContent;
