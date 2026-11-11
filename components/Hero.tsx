"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Code2, Database, Workflow, MapPin } from "lucide-react";

const focusAreas = [
  { label: "Frontend", icon: Code2 },
  { label: "Backend", icon: Workflow },
  { label: "Data", icon: Database },
];

export function Hero() {
  const { name, role, tagline, status, github, linkedin, location } = PORTFOLIO_DATA.personal;

  return (
    <section id="home" className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-40">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="pointer-events-none absolute -right-48 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-emerald-300/[0.07] blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-8 inline-flex max-w-full items-center gap-3 border border-emerald-200/15 bg-emerald-200/[0.06] px-3.5 py-2 text-xs font-medium tracking-wide text-emerald-100">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
            <span>{status}</span>
          </div>

          <p className="mb-4 text-sm font-medium tracking-wide text-slate-400">Hello, I&apos;m</p>
          <h1 className="max-w-4xl text-[clamp(3.25rem,8vw,6.6rem)] font-semibold leading-[0.98] tracking-[-0.075em] text-[#f2f7f5]">
            {name.split(" ")[0]} <span className="text-[#8dd8c5]">{name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mt-6 text-xl font-medium tracking-[-0.025em] text-slate-200 sm:text-2xl">{role}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{tagline}</p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-200" />{location}</span>
            <span className="inline-flex items-center gap-2"><span className="h-px w-5 bg-slate-600" />2+ years professional experience</span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-3 bg-[#a4e4d2] px-5 py-3.5 text-sm font-semibold text-[#092019] transition hover:bg-[#c0f1e3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200">
              Explore selected work <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-white/15 px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/35 hover:bg-white/[0.04]">
              Contact me <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="flex items-center gap-2 pl-1">
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="border border-white/10 p-3 text-slate-400 transition hover:border-emerald-200/40 hover:text-emerald-100"><Github className="h-4 w-4" /></a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="border border-white/10 p-3 text-slate-400 transition hover:border-emerald-200/40 hover:text-emerald-100"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative mx-auto w-full max-w-[270px] sm:max-w-[290px] lg:max-w-[300px]" aria-label="Profile portrait and development focus">
          <div className="absolute -inset-3 -z-10 border border-emerald-200/15" />
          <div className="relative overflow-hidden border border-white/10 bg-[#111d25]">
            <div className="relative aspect-[4/5] max-h-[350px] w-full overflow-hidden">
              <Image src="/images/profile-photo.jpg" alt="Portrait of Muhammad Fahmi" fill priority sizes="(max-width: 640px) 76vw, 300px" className="object-cover object-center" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08110f]/90 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200">Developer profile</p>
                <p className="mt-1 text-lg font-semibold text-white">{name}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
              {focusAreas.map(({ label, icon: Icon }) => (
                <div key={label} className="px-2 py-4 text-center">
                  <Icon className="mx-auto h-4 w-4 text-emerald-200" />
                  <p className="mt-2 text-xs font-medium text-slate-200">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 border border-white/10 bg-[#14232b] px-4 py-3 shadow-xl shadow-black/30">
            <p className="text-lg font-semibold text-white">End-to-end</p>
            <p className="text-[11px] text-slate-400">From data to interface</p>
          </div>
        </motion.aside>
      </div>
      <div className="mx-auto mt-20 flex max-w-7xl items-center gap-4 px-5 sm:px-8">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Scroll to explore</span>
        <span className="h-px w-16 bg-slate-700" />
        <span className="text-xs text-slate-600">01 / 05</span>
      </div>
    </section>
  );
}
