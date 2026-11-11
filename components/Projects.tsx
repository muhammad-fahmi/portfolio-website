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
          <p className="eyebrow">02 / Selected work</p>
          <h2 className="section-title">Projects & <span className="text-[#8dd8c5]">repositories.</span></h2>
          <p className="section-description">Business applications and internal tools I have helped build or maintain, with an emphasis on the problem, contribution, and implementation context.</p>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-white/10 pb-5" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dd8c5] ${
              activeCategory === category ? "border-[#8dd8c5]/50 bg-[#8dd8c5]/10 text-[#b1eadb]" : "border-white/10 text-slate-400 hover:border-white/25 hover:text-white"
            }`}>
              {category}
            </button>
          ))}
          <span className="ml-auto self-center text-xs tabular-nums text-slate-500">{filteredProjects.length} projects</span>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article layout key={project.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.3, delay: index * 0.035 }} className="group flex min-h-full flex-col border border-white/10 bg-[#101922] p-6 transition-colors duration-300 hover:border-emerald-200/30 hover:bg-[#13212a] sm:p-7">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-emerald-200/15 bg-emerald-200/[0.06] text-[#8dd8c5]"><Layers3 className="h-5 w-5" /></div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{project.category}</span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white transition-colors group-hover:text-[#b1eadb] sm:text-2xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.summary}</p>
                <div className="mt-5 border-l-2 border-emerald-200/40 bg-white/[0.025] px-4 py-3">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8dd8c5]">My contribution</p>
                  <p className="text-sm leading-6 text-slate-300">{project.contribution}</p>
                </div>
              </div>

              {project.tags.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-white/[0.08] px-2.5 py-1.5 text-[11px] text-slate-400">{tag}</span>)}</div>}

              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} GitHub repository`} className="mt-7 inline-flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-slate-300 transition hover:text-[#b1eadb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dd8c5]">
                  <span className="inline-flex items-center gap-2"><Github className="h-4 w-4" />{project.repositoryLabel ?? "View repository"}</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : <p className="mt-7 border-t border-white/10 pt-4 text-xs text-slate-500">Project details available upon request</p>}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
