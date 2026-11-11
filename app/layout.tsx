import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-website-chi-five-10.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
    template: `%s | ${PORTFOLIO_DATA.personal.name}`,
  },
  description: PORTFOLIO_DATA.personal.tagline,
  keywords: ["Muhammad Fahmi", "Full-Stack Developer", "Software Engineer", "PHP", "Laravel", "CodeIgniter", "React", "Next.js", "TypeScript"],
  authors: [{ name: PORTFOLIO_DATA.personal.name }],
  creator: PORTFOLIO_DATA.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
    description: PORTFOLIO_DATA.personal.tagline,
    siteName: `${PORTFOLIO_DATA.personal.name} Portfolio`,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-100`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-slate-950">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
