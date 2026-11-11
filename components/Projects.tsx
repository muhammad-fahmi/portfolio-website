"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUpRight, Github, Layers3 } from "lucide-react";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = useMemo(
    () => activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory),
    [activeCategory, projects],
  );

  return (
    <section id="projects" className="section-space scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Projects <span className="text-cyan-300">& repositories</span></h2>
          <p className="section-description">
            A selection of business applications I have contributed to, with a focus on solving real operational workflows.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-2" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                activeCategory === category
                  ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100"
                  : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
          <span className="ml-auto text-xs text-slate-500">{filteredProjects.length} projects</span>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="project-card group flex min-h-full flex-col rounded-2xl border border-white/10 bg-slate-900/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/85 sm:p-7"
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200">
                  <Layers3 className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
                  {project.category}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold tracking-tight text-white transition group-hover:text-cyan-100 sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.summary}</p>
                <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-200/80">My contribution</p>
                  <p className="text-sm leading-6 text-slate-300">{project.contribution}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-slate-400">{tag}</span>
                ))}
              </div>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} GitHub repository`}
                  className="mt-7 inline-flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-slate-200 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    {project.repositoryLabel ?? "View GitHub repository"}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <div className="mt-7 border-t border-white/10 pt-4 text-xs text-slate-500">
                  Repository link not available
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
