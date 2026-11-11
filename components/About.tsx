"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Code2, Database, GraduationCap, Mail, MapPin, Server } from "lucide-react";

const categoryIcons = [Code2, Server, Database];

export function About() {
  const { bio, location, email } = PORTFOLIO_DATA.personal;

  return (
    <section id="about" className="section-space scroll-mt-24 border-y border-white/[0.06] bg-white/[0.012]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <p className="eyebrow">01 / About</p>
          <h2 className="section-title">Software shaped around <span className="text-[#8dd8c5]">real workflows.</span></h2>
          <p className="section-description">I work across the application stack, with a practical focus on translating business requirements into maintainable software.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="surface-panel p-6 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8dd8c5]">Profile</p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">{bio}</p>
            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-7">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#8dd8c5]" />{location}</span>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 transition hover:text-[#b1eadb]"><Mail className="h-4 w-4 text-[#8dd8c5]" />{email}</a>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="surface-panel flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-emerald-200/15 bg-emerald-200/[0.06] text-[#8dd8c5]"><Code2 className="h-5 w-5" /></div>
              <div><p className="text-2xl font-semibold tracking-tight text-white">2+ years</p><p className="mt-1 text-xs text-slate-400">Professional experience</p></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.06 }} className="surface-panel flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-emerald-200/15 bg-emerald-200/[0.06] text-[#8dd8c5]"><GraduationCap className="h-5 w-5" /></div>
              <div><p className="text-base font-semibold text-white">Informatics</p><p className="mt-1 text-xs text-slate-400">Universitas Udayana · Graduate</p></div>
            </motion.div>
          </div>
        </div>

        <div id="skills" className="mt-20 scroll-mt-24">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="eyebrow">Technical toolkit</p><h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">Tools I work with</h3></div>
            <p className="max-w-md text-sm leading-6 text-slate-500">A practical toolkit across frontend, backend, databases, and development workflows.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {PORTFOLIO_DATA.skills.map((category, index) => {
              const Icon = categoryIcons[index] ?? Code2;
              return (
                <motion.div key={category.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} className="border border-white/10 bg-[#101922] p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-emerald-200/15 bg-emerald-200/[0.06] text-[#8dd8c5]"><Icon className="h-5 w-5" /></div>
                    <h4 className="font-semibold text-white">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => <span key={skill.name} className="border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-xs text-slate-300">{skill.name}</span>)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
