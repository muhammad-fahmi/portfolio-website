"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { BookOpen, Clock, ArrowUpRight } from "lucide-react";

export function Blog() {
  const { blogs } = PORTFOLIO_DATA;

  return (
    <section id="articles" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Articles & <span className="gradient-text">Insights</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base sm:text-lg">
            Thoughts on modern web development, software engineering architecture, and cloud technology.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 font-semibold border border-violet-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-gray-400 font-medium">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-1 text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Read Article
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
