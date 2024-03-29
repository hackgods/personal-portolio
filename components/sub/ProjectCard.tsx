"use client"

import { fadeUp } from "@/utils/motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description,link }: Props) => {
  const {ref, inView} = useInView({
    triggerOnce: true
})

  return (
    <motion.div
    ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp} 
    className="card z-20 row-span-1 relative overflow-hidden p-8 border border-black hover:border-white transition-colors duration-300 hover:border-2">
        <div className="h-full w-full mx-auto flex flex-col relative z-10 space-y-4 text-center justify-around items-center">

              <Image
              width={300}
              height={0}
              className="w-full h-64 rounded-3xl"
              src={src}
              alt={`${title} project img`} />
          <p className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-b to-neutral-200 from-neutral-400">
            {title}
          </p>

          <p className="text-md text-justify bg-clip-text text-transparent bg-gradient-to-b to-neutral-400 from-neutral-400">
            {description}
          </p>
          
        </div>
        <div className="circle-blur-big rounded-3xl top-0 left-0 w-32 animate-pulse hover:animate-none"></div>
        <a href={link} className="link-full" title={`${title}`}
          target="_blank"></a>
      </motion.div>
  );
};

export default ProjectCard;
