"use client";

import { personalData } from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-20 mt-10 w-full z-[20]">
      

      <motion.div
              variants={slideInFromRight(0.8)}
              className="block sm:hidden justify-center items-center relative mt-10">
              <Image
                className="w-screen transform hover:scale-125 transition duration-500"
                src="/mainIconsdark.svg"
                alt="work icons"
                height={2000}
                width={2000}
                loading="eager"
              />
              <div className="w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  className="rounded-full transform hover:scale-125 transition duration-500"
                  src="/me.jpeg"
                  alt="me"
                  height={300}
                  width={300}
                  loading="eager"
                />
              </div>
      </motion.div>


      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white max-w-[600px] w-auto h-auto">
           
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase">
              {personalData.fName} {personalData.lName}
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-2 max-w-[600px]">
            {personalData.description}
        </motion.p>

        <div className="flex flex-row gap-6">
            <motion.a
            href={personalData.resumeLink}
              variants={slideInFromLeft(1)}
              className="p-2 text-center text-stone-950/75 font-bold cursor-pointer rounded-lg max-w-[200px] bg-white"
            >
                Download CV
            </motion.a>

            <motion.a
            href={`mailto:${personalData.email}`}
              variants={slideInFromLeft(1)}
              className="p-2 text-center text-stone-100 cursor-pointer rounded-lg max-w-[200px] bg-zinc-700/70 border border-white"
            >
                Get In Touch
            </motion.a>
        </div>
      </div>

      <motion.div
              variants={slideInFromRight(0.8)}
              className="hidden md:flex justify-center items-center relative my-5">
              <Image
                className="w-screen transform hover:scale-125 transition duration-500"
                src="/mainIconsdark.svg"
                alt="work icons"
                height={2000}
                width={2000}
                loading="eager"
              />
              <div className="w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  className="rounded-full transform hover:scale-125 transition duration-500"
                  src="/me.jpeg"
                  alt="me"
                  height={300}
                  width={300}
                  loading="eager"
                />
              </div>
      </motion.div>


    </motion.div>
  );
};

export default HeroContent;
