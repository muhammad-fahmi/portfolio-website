"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

export function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="section-space scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="section-heading">
          <p className="eyebrow">Career history</p>
          <h2 className="section-title">Professional <span className="text-cyan-300">experience</span></h2>
          <p className="section-description">
            Roles, responsibilities, and the applications I helped build or maintain.
          </p>
        </div>

        <div className="relative space-y-6 before:absolute before:bottom-8 before:left-[1.35rem] before:top-8 before:w-px before:bg-gradient-to-b before:from-cyan-300/40 before:via-white/10 before:to-transparent sm:before:left-[1.55rem]">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative pl-12 sm:pl-14"
            >
              <span className="absolute left-[0.72rem] top-7 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-200/50 bg-slate-950 sm:left-[0.93rem]">
                <span className="h-2 w-2 rounded-full bg-cyan-200" />
              </span>
              <div className="rounded-2xl border border-white/10 bg-slate-900/65 p-6 sm:p-8">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                      <p className="mt-1 text-sm font-medium text-cyan-200">{experience.company}</p>
                    </div>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {experience.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                      <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Projects involved</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.projects.map((project) => (
                      <span key={project} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">{project}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span key={technology} className="rounded-md bg-cyan-300/[0.07] px-2.5 py-1.5 text-xs text-cyan-100/80">{technology}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
