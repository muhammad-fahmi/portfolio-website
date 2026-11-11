"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Code2, Database, GraduationCap, Mail, MapPin, Server } from "lucide-react";

const categoryIcons = [Code2, Server, Database];

export function About() {
  const { bio, location, email } = PORTFOLIO_DATA.personal;

  return (
    <section id="about" className="section-space scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <h2 className="section-title">Engineering with <span className="text-cyan-300">business context</span></h2>
          <p className="section-description">
            I enjoy understanding the problem behind a request, then building software that makes the workflow clearer and easier to manage.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-white">Profile</h3>
            <p className="mt-4 text-sm leading-8 text-slate-300 sm:text-base">{bio}</p>
            <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-6">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" />{location}</span>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 transition hover:text-cyan-200"><Mail className="h-4 w-4 text-cyan-300" />{email}</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1"
          >
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200"><Code2 className="h-5 w-5" /></div>
                <div><p className="text-2xl font-semibold text-white">2+ years</p><p className="text-xs text-slate-500">Professional experience</p></div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-300/10 text-violet-200"><GraduationCap className="h-5 w-5" /></div>
                <div><p className="text-base font-semibold text-white">Informatics</p><p className="text-xs text-slate-500">Universitas Udayana · Graduate</p></div>
              </div>
            </div>
          </motion.div>
        </div>

        <div id="skills" className="mt-20 scroll-mt-24">
          <div className="mb-8">
            <p className="eyebrow">Technical toolkit</p>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Technologies I work with</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {PORTFOLIO_DATA.skills.map((category, index) => {
              const Icon = categoryIcons[index] ?? Code2;
              return (
                <div key={category.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200"><Icon className="h-5 w-5" /></div>
                    <h4 className="font-semibold text-white">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill.name} className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-xs text-slate-300">{skill.name}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
