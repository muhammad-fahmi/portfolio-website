import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-website-chi-five-10.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
    template: `%s | ${PORTFOLIO_DATA.personal.name}`,
  },
  description: PORTFOLIO_DATA.personal.tagline,
  keywords: [
    "Muhammad Fahmi",
    "Software Developer",
    "Full-Stack Engineer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Portfolio",
  ],
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
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
    description: PORTFOLIO_DATA.personal.tagline,
    creator: "@muhammadfahmi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} min-h-screen bg-[#090d16]`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
