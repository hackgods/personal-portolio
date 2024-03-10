"use client"

import { Skill_data } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from "@/utils/motion";


const Skills = () => {
  const {ref, inView} = useInView({
    triggerOnce: true
})

  return (
    <section
      id="skills"
      className="py-20 z-30 snap-always snap-start flex flex-col justify-center items-center"
      style={{ transform: "scale(0.9" }}>
      
      <SkillText />

      <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      
      className="bg-zinc-950 border-4 border-zinc-800 rounded-3xl flex flex-col items-center justify-center gap-3 h-fit relative overflow-hidden p-10 w-fit">
          <div className="z-20 grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 flex-row justify-center flex-wrap mt-4 gap-3 md:gap-8 items-center">
            {Skill_data.map((image, index) => (
              <SkillDataProvider key={index} src={image.src} index={index} />
            ))}
          </div>
          <div className="circle-blur-big rounded-xl top-0 left-0 z-10"></div>
          <div className="absolute top-50 left-0 w-full h-full z-20">
              <img
                src="/overlay-4.svg"
                alt="Overlay"
                className="w-full h-full object-cover"
              />
          </div>
      </motion.div>
    </section>
  );
};

export default Skills;
