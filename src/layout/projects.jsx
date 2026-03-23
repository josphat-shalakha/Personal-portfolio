import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DELTA ENERGY SYSTEM (K) LTD",
    description:
      "The project provides the best Energy power solutions and better backup systems.",
    image: "/project/project1.png",
    tags: ["React", "Laravel"],
    link: "https://www.deltaenergysystems.co.ke/",
    github: "https://github.com/josphat-shalakha",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-black">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-green-500 text-sm font-semibold tracking-widest uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Projects that{" "}
            <span className="text-green-500">make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay 200">
            A selection of my recent work,from complex web applications <br />to innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x200?text=No+Image")
                }
              />

              <div className="p-5">
                <h3 className="text-green-500 font-bold text-lg">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>

                <div className="flex gap-2 mt-3 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-500"
                  >
                    <ExternalLink size={18} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-500"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
  
