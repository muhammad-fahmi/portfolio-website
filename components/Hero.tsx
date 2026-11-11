"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Code2, Database, Workflow, MapPin } from "lucide-react";

const focusAreas = [
  { label: "Frontend", detail: "Interfaces & experience", icon: Code2 },
  { label: "Backend", detail: "APIs & application logic", icon: Workflow },
  { label: "Data", detail: "Schema & persistence", icon: Database },
];

export function Hero() {
  const { name, role, tagline, status, github, linkedin, location } = PORTFOLIO_DATA.personal;

  return (
    <section id="home" className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-40">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-cyan-400/10 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3.5 py-2 text-xs font-medium tracking-wide text-cyan-200">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]" />
            <span>{status}</span>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Hello, I&apos;m</p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            {name}
            <span className="mt-3 block text-3xl font-medium tracking-[-0.035em] text-slate-300 sm:text-4xl lg:text-[2.7rem]">{role}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{tagline}</p>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-cyan-300" />
            {location}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Explore projects <ArrowDown className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-lg border border-white/10 p-3 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-200">
                <Github className="h-4 w-4" />
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-lg border border-white/10 p-3 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-200">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="relative mx-auto w-full max-w-[280px] lg:max-w-[300px]" aria-label="Profile and development focus">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-cyan-300/10 bg-cyan-300/[0.025] rotate-3" />
          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
            <div className="relative aspect-[4/5] max-h-[350px] w-full overflow-hidden bg-slate-800">
              <Image
                src="/images/profile-photo.jpg"
                alt="Portrait of Muhammad Fahmi"
                fill
                priority
                sizes="(max-width: 640px) 72vw, 300px"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Full-stack developer</p>
                <p className="mt-1 text-xl font-semibold text-white">{name}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
              {focusAreas.map(({ label, detail, icon: Icon }) => (
                <div key={label} className="px-3 py-4 text-center">
                  <Icon className="mx-auto h-4 w-4 text-cyan-200" />
                  <p className="mt-2 text-xs font-semibold text-slate-100">{label}</p>
                  <p className="mt-1 hidden text-[10px] text-slate-500 sm:block">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 shadow-xl">
            <p className="text-lg font-semibold text-white">2+ years</p>
            <p className="text-[11px] text-slate-500">Professional experience</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
