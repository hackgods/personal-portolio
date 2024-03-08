import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description,link }: Props) => {
  return (
    <div className="card z-20 row-span-1 relative overflow-hidden p-8 border border-black hover:border-white transition-colors duration-300 hover:border-2">
        <div className="h-full w-full mx-auto flex justify-between relative z-10">
          <div className="space-y-4 w-full text-center justify-around">
          <img className="w-96 h-52 rounded-3xl" src={src} alt={`${title} project img`} />
          <p className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-b to-neutral-200 from-neutral-400">
            {title}
          </p>

          <p className="text-md text-justify bg-clip-text text-transparent bg-gradient-to-b to-neutral-400 from-neutral-400">
            {description}
          </p>
          </div>
        </div>
        <div className="circle-blur-big rounded-3xl top-0 left-0 w-32 animate-pulse hover:animate-none"></div>
        <a href={link} className="link-full" title={`${title}`}
          target="_blank"></a>
      </div>
  );
};

export default ProjectCard;
