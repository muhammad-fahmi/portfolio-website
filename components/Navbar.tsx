"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
      isScrolled ? "border-white/10 bg-[#080d13]/90 py-3 backdrop-blur-xl" : "border-transparent bg-[#080d13]/35 py-5"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold tracking-tight text-white">
          {PORTFOLIO_DATA.personal.name.split(" ")[0]}<span className="text-[#8dd8c5]">.dev</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link, index) => (
            <a key={link.name} href={link.href} className="px-3.5 py-2 text-sm text-slate-400 transition hover:text-[#b1eadb]">
              <span className="mr-2 text-[10px] text-slate-600">0{index + 1}</span>{link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="inline-flex items-center gap-2 border border-emerald-200/25 px-4 py-2.5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-100/50 hover:bg-emerald-100/[0.07]">
            Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="border border-white/10 p-2 text-slate-300 transition hover:bg-white/5 hover:text-white md:hidden" aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav id="mobile-navigation" className="mx-4 mt-3 border border-white/10 bg-[#111d25] p-3 shadow-2xl md:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-sm text-slate-300 transition hover:bg-white/[0.04] hover:text-white">{link.name}</a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-2 flex items-center justify-center gap-2 bg-[#a4e4d2] px-3 py-3 text-sm font-semibold text-[#092019]">
            Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      )}
    </header>
  );
}
