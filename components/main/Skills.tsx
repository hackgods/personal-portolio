import {
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 z-30"
      style={{ transform: "scale(0.9" }}>
      <SkillText />

            <div className="bg-zinc-950 border-4 border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 h-fit relative overflow-hidden p-10">
        <div className="z-20 grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 flex-row justify-center flex-wrap mt-4 gap-10 items-center px-5">
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.src}
              index={index}
            />
          ))}
        </div>
        <div className="circle-blur-big rounded-xl top-0 left-0 z-10"></div>
        <div className="absolute top-50 left-0 w-full h-full z-20">
          <img src="/overlay-4.svg" alt="Overlay" className="w-full h-full object-cover" />
        </div>
      </div>



    </section>
  );
};

export default Skills;
