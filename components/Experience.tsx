"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

export function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="section-space scroll-mt-24 border-y border-white/[0.06] bg-white/[0.012]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="section-heading">
          <p className="eyebrow">03 / Career history</p>
          <h2 className="section-title">Professional <span className="text-[#8dd8c5]">experience.</span></h2>
          <p className="section-description">A concise view of my roles, responsibilities, and the products I contributed to.</p>
        </div>

        <div className="relative space-y-5 before:absolute before:bottom-8 before:left-[1.35rem] before:top-8 before:w-px before:bg-gradient-to-b before:from-emerald-200/50 before:via-white/10 before:to-transparent sm:before:left-[1.55rem]">
          {experiences.map((experience, index) => (
            <motion.article key={experience.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35, delay: index * 0.06 }} className="relative pl-12 sm:pl-14">
              <span className="absolute left-[0.72rem] top-7 z-10 flex h-5 w-5 items-center justify-center border border-emerald-200/50 bg-[#080d13] sm:left-[0.93rem]"><span className="h-1.5 w-1.5 bg-[#8dd8c5]" /></span>
              <div className="surface-panel p-6 sm:p-8">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-emerald-200/15 bg-emerald-200/[0.06] text-[#8dd8c5]"><BriefcaseBusiness className="h-5 w-5" /></div>
                    <div><h3 className="text-xl font-semibold tracking-tight text-white">{experience.role}</h3><p className="mt-1 text-sm font-medium text-[#a4e4d2]">{experience.company}</p></div>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 border border-white/10 px-3 py-2 text-xs text-slate-400"><CalendarDays className="h-3.5 w-3.5 text-[#8dd8c5]" />{experience.period}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {experience.description.map((item, itemIndex) => <li key={itemIndex} className="flex items-start gap-3 text-sm leading-7 text-slate-300"><span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 bg-[#8dd8c5]" />{item}</li>)}
                </ul>

                <div className="mt-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Projects involved</p>
                  <div className="flex flex-wrap gap-2">{experience.projects.map((project) => <span key={project} className="border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300">{project}</span>)}</div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Technologies</p>
                  <div className="flex flex-wrap gap-2">{experience.technologies.map((technology) => <span key={technology} className="bg-emerald-200/[0.06] px-2.5 py-1.5 text-xs text-[#b1eadb]">{technology}</span>)}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
