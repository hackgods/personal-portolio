import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-15 mb-20 snap-always snap-start"
      id="projects"
    >
      <h2
          className="text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mt-4 mb-8 p-2">
          Projects
        </h2>

      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 px-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}

      </div>
    </div>
  );
};

export default Projects;
