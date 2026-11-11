"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Code2, Database, Workflow } from "lucide-react";

const focusAreas = [
  { label: "Frontend", detail: "Interfaces & experience", icon: Code2 },
  { label: "Backend", detail: "APIs & application logic", icon: Workflow },
  { label: "Data", detail: "Schema & persistence", icon: Database },
];

export function Hero() {
  const { name, role, tagline, status, github, linkedin } = PORTFOLIO_DATA.personal;

  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-[-10rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-cyan-400/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-12rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3.5 py-2 text-xs font-medium tracking-wide text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]" />
            {status}
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Hello, I&apos;m
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            {name}
            <span className="mt-3 block text-3xl font-medium tracking-[-0.035em] text-slate-300 sm:text-4xl lg:text-[2.7rem]">
              {role}
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {tagline}
          </p>

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

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative"
          aria-label="Development focus areas"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-900/75 p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-6">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">What I do</p>
                <p className="mt-1 text-lg font-semibold text-white">Build useful software</p>
              </div>
              <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 font-mono text-xs text-cyan-200">FULL STACK</span>
            </div>
            <div className="space-y-3">
              {focusAreas.map(({ label, detail, icon: Icon }, index) => (
                <div key={label} className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-100">{label}</p>
                    <p className="mt-0.5 text-sm text-slate-500">{detail}</p>
                  </div>
                  <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-500">
              <span>2+ years professional experience</span>
              <span>Indonesia</span>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-2xl border border-cyan-300/15" />
        </motion.aside>
      </div>
    </section>
  );
}
