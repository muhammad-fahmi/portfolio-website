"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { User, MapPin, Mail, Code2, Cpu, Wrench } from "lucide-react";

export function About() {
  const { bio, location, email } = PORTFOLIO_DATA.personal;
  const categories = PORTFOLIO_DATA.skills;

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            About <span className="gradient-text">Mee</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Crafting elegant code, scalable systems, and intuitive user experiences.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Who I Am</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-base mb-6">
              {bio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-sm">
              <div className="flex items-center gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <Mail className="w-4 h-4 text-violet-400" />
                <a href={`mailto:${email}`} className="hover:text-cyan-400 transition-colors">
                  {email}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center border border-white/10">
              <span className="text-4xl font-extrabold gradient-text mb-2">6+</span>
              <span className="text-sm font-medium text-gray-400">Years Experience</span>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center border border-white/10">
              <span className="text-4xl font-extrabold gradient-text mb-2">25+</span>
              <span className="text-sm font-medium text-gray-400">Projects Completed</span>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center border border-white/10">
              <span className="text-4xl font-extrabold gradient-text mb-2">100k+</span>
              <span className="text-sm font-medium text-gray-400">Active Users</span>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center border border-white/10">
              <span className="text-4xl font-extrabold gradient-text mb-2">99.9%</span>
              <span className="text-sm font-medium text-gray-400">Code Quality</span>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="pt-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Tech Stack & <span className="gradient-text">Proficiency</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-violet-500/10 text-violet-400 rounded-lg">
                    {catIdx === 0 ? (
                      <Code2 className="w-5 h-5" />
                    ) : catIdx === 1 ? (
                      <Cpu className="w-5 h-5" />
                    ) : (
                      <Wrench className="w-5 h-5" />
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{cat.title}</h4>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-gray-300">{skill.name}</span>
                        <span className="text-xs text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800/80 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="bg-gradient-to-r from-cyan-500 to-violet-500 h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
