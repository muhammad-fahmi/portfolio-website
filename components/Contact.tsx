"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { AlertCircle, CheckCircle2, Github, Linkedin, Mail, Send } from "lucide-react";

export function Contact() {
  const { email, github, linkedin } = PORTFOLIO_DATA.personal;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-space scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">Let&apos;s talk about <span className="text-cyan-300">your next project</span></h2>
          <p className="section-description">
            Have a project, opportunity, or question? Send a message or connect with me directly.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><Mail className="h-5 w-5" /></div>
              <h3 className="mt-5 text-xl font-semibold text-white">Direct contact</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">Prefer email? You can reach me directly at the address below.</p>
              <a href={`mailto:${email}`} className="mt-5 inline-flex break-all text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">{email}</a>
            </div>
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Find me online</p>
              <div className="flex gap-2">
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-lg border border-white/10 p-3 text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-200"><Github className="h-5 w-5" /></a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-lg border border-white/10 p-3 text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-200"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">Your name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/10" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">Email address</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="you@example.com" className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/10" />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                <textarea id="contact-message" name="message" required rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Tell me a little about what you have in mind..." className="w-full resize-y rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/10" />
              </div>

              <button type="submit" disabled={status === "submitting"} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">
                <Send className="h-4 w-4" />
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>

              {status === "success" && <p role="status" className="flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.07] p-3 text-sm text-emerald-200"><CheckCircle2 className="h-4 w-4 shrink-0" />Your message has been sent successfully.</p>}
              {status === "error" && <p role="alert" className="flex items-center gap-2 rounded-lg border border-rose-400/20 bg-rose-400/[0.07] p-3 text-sm text-rose-200"><AlertCircle className="h-4 w-4 shrink-0" />Something went wrong. Please contact me directly by email.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
