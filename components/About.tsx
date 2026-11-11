"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GraduationCap, MapPin, Mail, Code2, Server, Database } from "lucide-react";

const categoryIcons = [Code2, Server, Database];

export function About() {
  const { bio, location, email } = PORTFOLIO_DATA.personal;
  const categories = PORTFOLIO_DATA.skills;

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            A little <span className="gradient-text">about me</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            I enjoy understanding how a business works and translating its
            processes into useful software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-3 glass-panel p-7 sm:p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-8">{bio}</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-5 border-t border-white/10 text-sm">
              <span className="inline-flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {location}
              </span>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                {email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-2 grid grid-cols-1 gap-4"
          >
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">2+ years</p>
                <p className="text-sm text-gray-400">Web development experience</p>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-violet-500/10 text-violet-300 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">Informatics Graduate</p>
                <p className="text-sm text-gray-400">Universitas Udayana</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div id="skills" className="scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-3">
              Capabilities
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Technologies I <span className="gradient-text">work with</span>
            </h3>
            <p className="text-gray-400 mt-3">
              Tools and technologies used across my development work and projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categories.map((category, index) => {
              const Icon = categoryIcons[index] ?? Code2;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="glass-panel p-6 rounded-2xl border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {category.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 rounded-lg text-sm text-gray-300 bg-white/[0.04] border border-white/10"
                      >
                        {skill.name}
                      </span>
                    ))}
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
