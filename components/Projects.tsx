import React from "react";
import { ThreeDCard } from "./ui/3dCard";
import { projects } from "@/data";

const Projects = () => {
  return (
    <>
      <div
        className="flex flex-col w-full h-full justify-center py-16 items-center gap-8 px-10"
        id="projects"
      >
        <h1 className="text-3xl md:text-6xl font-bold text-neutral-700 dark:text-slate-200">
          Recent Projects
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <ThreeDCard
              data-umami-event={project.title}
              key={i}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              gitlink={project.gitlink}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
