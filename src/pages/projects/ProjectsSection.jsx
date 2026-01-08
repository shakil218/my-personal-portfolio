import { useState } from "react";
// import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectData";
// import "./projects.css";

const categories = ["All", "Frontend", "Backend", "MERN"];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 pt-24 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="mb-12 md:max-w-xl md:mx-auto md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Projects
          </h2>
          <p className="text-gray-400">
            Some of my projects, including Frontend, Backend, and MERN stack
            applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full border transition ${
                selectedCategory === cat
                  ? "bg-cyan-400 text-black"
                  : "border-gray-500 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
