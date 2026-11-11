"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-3">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Experience building and deploying web applications for operational needs.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                    <p className="text-cyan-300 font-semibold">{experience.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-400">
                  {experience.period && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {experience.period}
                    </span>
                  )}
                  {experience.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {experience.location}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-white/10">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
