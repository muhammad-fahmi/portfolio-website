"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowDown, Github, Linkedin, Twitter, Sparkles, Send } from "lucide-react";

export function Hero() {
  const { name, role, tagline, status } = PORTFOLIO_DATA.personal;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{status}</span>
        </div>

        {/* Hero Title (LCP Element - Rendered immediately for high LCP score) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi, I'm <span className="gradient-text">{name}</span>
          <br />
          <span className="text-3xl sm:text-5xl md:text-6xl text-gray-300 font-bold block mt-2">
            {role}
          </span>
        </h1>

        {/* Hero Tagline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all"
          >
            Explore Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-gray-200 glass-panel glass-panel-hover rounded-full transition-all"
          >
            <Send className="w-4 h-4 text-cyan-400" />
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5 text-gray-400">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-panel glass-panel-hover rounded-full text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-panel glass-panel-hover rounded-full text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-panel glass-panel-hover rounded-full text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
