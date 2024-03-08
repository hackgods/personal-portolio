import React from "react";
import HeroContent from "../sub/HeroContent";
import { StickyNav } from "../ui/sticky-navbar";
import { navItems } from "@/constants";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="home">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-100px] blur-3xl h-full w-full left-0 z-[1] object-cover opacity-70"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <StickyNav navItems={navItems} />
      <HeroContent />
    </div>
  );
};

export default Hero;
