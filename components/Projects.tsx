import React from "react";
import { ThreeDCard } from "./ui/3dCard";
import { projects } from "@/data";

const Projects = () => {
  return (
    <>
      <div
        className="flex flex-1 w-full h-full min-h-[rem] justify-center pt-16"
        id="projects"
      >
        <h1 className="text-6xl font-bold text-slate-200">Recent Projects</h1>
      </div>
      <div className="grid md: grid-cols-1 md:grid-cols-3 gap-7 maxw-7xl mx-auto">
        {projects.map((project, i) => (
          <ThreeDCard
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
    </>
  );
};

export default Projects;
