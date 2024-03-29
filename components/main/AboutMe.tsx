"use client";

import { BackgroundBeams } from "../ui/background-beams";
import Bento from "../ui/bento";

const About = () => {
  return (
    <div className="flex flex-col relative items-center min-h-screen w-full h-full bg-neutral-950 z-[20] snap-always snap-start" id="about-me">
        <h2
          className="text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mt-4">
          About Me
        </h2>

        <div 
          className="flex flex-row h-full w-full p-4 justify-center items-center">
          <div className="w-10/12 h-fit p-4 z-[20] ">
            <Bento/>
          </div>
        </div>
        

      {/* <div className="flex flex-col items-center justify-center absolute z-[20] w-auto h-auto">
        <div className="w-2/3 text-justify">
          <h1 className="text-slate-50 font-medium text-xl">
          With a Master&apos;s in Advanced Computer Science from Newcastle University, I bring over three years of hands-on experience in software engineering. Proficient in a myriad of languages and platforms, my expertise shines particularly in frontend development. From React and Next.js to Vue.js and Flutter, I excel in crafting intuitive and visually stunning user interfaces. My portfolio showcases a commitment to excellence, with projects demonstrating seamless integration of frontend technologies for optimal user experiences. Adept at leveraging backend technologies such as NodeJS, I ensure robust functionality to complement frontend designs. Whether independently or as part of a collaborative team, I thrive in environments where creativity meets technical precision. With a keen eye for responsive design and a passion for innovation, I am dedicated to pushing boundaries and delivering solutions that exceed expectations. 
          <br/><br/>
          Get in touch with me to discuss how I can contribute to your projects.
          </h1>
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute blur-2xl">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div> */}
       <BackgroundBeams />
    </div>
  );
};

export default About;
