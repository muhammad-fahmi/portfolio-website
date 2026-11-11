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
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (!response.ok) { setStatus("error"); return; }
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
          <p className="eyebrow">04 / Get in touch</p>
          <h2 className="section-title">Have something to <span className="text-[#8dd8c5]">build?</span></h2>
          <p className="section-description">For software opportunities, project discussions, or questions, send a message or connect with me directly.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.aside initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="surface-panel flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex h-11 w-11 items-center justify-center border border-emerald-200/15 bg-emerald-200/[0.06] text-[#8dd8c5]"><Mail className="h-5 w-5" /></div>
              <h3 className="mt-5 text-xl font-semibold text-white">Start a conversation</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">Prefer email? Reach me directly at the address below.</p>
              <a href={`mailto:${email}`} className="mt-5 inline-flex break-all text-sm font-semibold text-[#a4e4d2] transition hover:text-white">{email}</a>
            </div>
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Find me online</p>
              <div className="flex gap-2">
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="border border-white/10 p-3 text-slate-400 transition hover:border-emerald-200/30 hover:text-[#b1eadb]"><Github className="h-5 w-5" /></a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="border border-white/10 p-3 text-slate-400 transition hover:border-emerald-200/30 hover:text-[#b1eadb]"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
          </motion.aside>

          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 }} className="surface-panel p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">Your name</label><input id="contact-name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Your name" className="w-full border border-white/10 bg-[#091119] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition focus:border-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-200/10" /></div>
                <div><label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="you@example.com" className="w-full border border-white/10 bg-[#091119] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition focus:border-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-200/10" /></div>
              </div>
              <div><label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">Message</label><textarea id="contact-message" name="message" required rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Tell me a little about what you have in mind..." className="w-full resize-y border border-white/10 bg-[#091119] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition focus:border-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-200/10" /></div>
              <button type="submit" disabled={status === "submitting"} className="inline-flex w-full items-center justify-center gap-2 bg-[#a4e4d2] px-5 py-3.5 text-sm font-semibold text-[#092019] transition hover:bg-[#c0f1e3] disabled:cursor-not-allowed disabled:opacity-60"><Send className="h-4 w-4" />{status === "submitting" ? "Sending..." : "Send message"}</button>
              {status === "success" && <p role="status" className="flex items-center gap-2 border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-sm text-emerald-100"><CheckCircle2 className="h-4 w-4 shrink-0" />Your message has been sent successfully.</p>}
              {status === "error" && <p role="alert" className="flex items-center gap-2 border border-rose-300/20 bg-rose-300/[0.06] p-3 text-sm text-rose-100"><AlertCircle className="h-4 w-4 shrink-0" />Something went wrong. Please contact me directly by email.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
