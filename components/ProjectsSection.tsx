"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => {
        // fallback demo data if DB empty
        setProjects([
          {
            title: "AI Mock Interview",
            description:
              "AI-powered interview simulation with authentication and scalable backend.",
            techStack: ["Next.js", "MongoDB", "JWT", "OpenAI"],
            liveUrl: "#",
            githubUrl: "#",
          },

          {
            title: "Job Portal System",
            description:
              "MERN-based job platform with role-based access control and secure API architecture.",
          },
          {
            title: "Voting Backend API",
            description:
              "JWT-protected REST API with MongoDB and optimized performance handling.",
          },
        ]);
      });
  }, []);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layout
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 cursor-pointer"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                {project.description}
              </p>

              {/* Expandable Area */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 overflow-hidden"
                  >
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack?.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="text-sm text-blue-400 hover:underline"
                      >
                        Live Demo
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-sm text-purple-400 hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
