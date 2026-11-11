"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUpRight, FolderGit2, Github } from "lucide-react";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Projects <span className="gradient-text"> & Repositories</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            A selection of applications I have worked on. Open a repository to
            explore its source code and implementation details.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === category
                  ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/40"
                  : "text-gray-400 border-white/10 hover:text-white hover:border-white/25"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} GitHub repository`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="group glass-panel rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col min-h-full hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 border border-white/10 rounded-full px-3 py-1.5">
                  <Github className="w-3.5 h-3.5" />
                  GitHub Repository
                </span>
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400 mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.contribution}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] text-gray-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-sm font-semibold">
                <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">
                  View source code
                </span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
