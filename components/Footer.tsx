import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-slate-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="text-xs text-slate-500">© {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500">
          <a href="#about" className="transition hover:text-cyan-200">About</a>
          <a href="#projects" className="transition hover:text-cyan-200">Projects</a>
          <a href="#experience" className="transition hover:text-cyan-200">Experience</a>
          <a href="#contact" className="transition hover:text-cyan-200">Contact</a>
        </nav>
        <a href="#home" aria-label="Back to top" className="rounded-lg border border-white/10 p-2.5 text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-200"><ArrowUp className="h-4 w-4" /></a>
      </div>
    </footer>
  );
}
