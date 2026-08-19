export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'AI / Cloud';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Fahmi",
    role: "Senior Full-Stack Engineer",
    tagline: "Architecting scalable web applications, modern UI systems, and cloud backend solutions.",
    bio: "Passionate Senior Full-Stack Engineer with 6+ years of experience building modern web applications, distributed cloud services, and interactive user interfaces. Specialized in React, Next.js, Node.js, TypeScript, and cloud-native architecture.",
    location: "San Francisco, CA (Open to Remote)",
    email: "alex.morgan.dev@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    status: "Available for high-impact roles & contract projects",
  },
  skills: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 88 },
        { name: "State Management (Zustand/Redux)", level: 85 },
      ],
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "Node.js / Express / NestJS", level: 90 },
        { name: "GraphQL & REST APIs", level: 92 },
        { name: "PostgreSQL & Prisma / Drizzle", level: 88 },
        { name: "Redis & Caching Strategies", level: 82 },
        { name: "Docker & AWS / Vercel Serverless", level: 84 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub Actions CI/CD", level: 90 },
        { name: "Vercel / Cloudflare Infrastructure", level: 92 },
        { name: "Jest / Cypress Testing", level: 82 },
        { name: "System Architecture", level: 86 },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "project-1",
      title: "PulseAnalytics - Realtime SaaS Platform",
      description: "An enterprise real-time analytics dashboard monitoring metrics, webhooks, and live traffic visualization.",
      longDescription: "Engineered high-throughput analytics pipeline handling over 1M daily events. Implemented server-sent events (SSE) for live stream updates, custom Chart.js & D3 visualizations, dynamic dark theme, and team workspace permissions.",
      category: "Full Stack",
      tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "project-2",
      title: "CognitiveAI - LLM Prompt Studio",
      description: "Interactive visual workspace for testing, chaining, and evaluating custom LLM prompts & agents.",
      longDescription: "Built node-based prompt engineering canvas allowing developers to visualize complex AI workflows, stream response tokens in real-time, benchmark output latency, and export API integrations.",
      category: "AI / Cloud",
      tags: ["React", "TypeScript", "Node.js", "OpenAI API", "Tailwind CSS", "Zustand"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "project-3",
      title: "Nexus Commerce - Headless E-Store",
      description: "Ultra-fast headless e-commerce storefront with instant page loads, sub-second search, and seamless checkout.",
      longDescription: "Leveraged Next.js App Router static site generation with Incremental Static Regeneration (ISR). Integrated Stripe API, Algolia instant search, multi-currency conversion, and Framer Motion micro-interactions.",
      category: "Frontend",
      tags: ["Next.js", "Tailwind CSS", "Stripe API", "GraphQL", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "project-4",
      title: "HyperFlow - Distributed Workflow Engine",
      description: "Fault-tolerant background job execution and task queue service for microservices.",
      longDescription: "Designed microservice orchestrator using Node.js, Redis Streams, and BullMQ capable of processing async job pipelines with automatic retries, rate limiting, and dashboard metrics.",
      category: "Backend",
      tags: ["Node.js", "Redis", "TypeScript", "Docker", "Express"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com",
      featured: false,
    },
  ] as Project[],
  experiences: [
    {
      id: "exp-1",
      role: "Lead Full-Stack Engineer",
      company: "Vanguard Tech Labs",
      period: "2023 - Present",
      location: "San Francisco, CA",
      description: [
        "Architected core Next.js & Node.js web platforms used by 250,000+ active monthly users.",
        "Improved initial page load speeds (LCP) by 45% through aggressive SSR caching and asset optimizations.",
        "Mentored a team of 6 engineers and established CI/CD automated test pipelines on GitHub Actions."
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS", "Docker"],
    },
    {
      id: "exp-2",
      role: "Senior Software Engineer",
      company: "CloudScale Systems",
      period: "2021 - 2023",
      location: "Remote",
      description: [
        "Developed micro-frontend architectures reducing cross-team deployment bottlenecks.",
        "Engineered real-time WebSocket messaging layer handling 50k concurrently connected sockets.",
        "Refactored legacy REST APIs into unified GraphQL services, reducing frontend network payloads by 30%."
      ],
      technologies: ["React", "Node.js", "GraphQL", "Redis", "Tailwind CSS"],
    },
    {
      id: "exp-3",
      role: "Frontend Engineer",
      company: "Apex Digital Agency",
      period: "2019 - 2021",
      location: "Austin, TX",
      description: [
        "Built responsive, accessible client web applications for Fortune 500 brands.",
        "Created custom design systems and UI component libraries used across 12 distinct projects."
      ],
      technologies: ["JavaScript (ES6+)", "React", "Sass / CSS Modules", "Webpack"],
    },
  ] as Experience[],
  blogs: [
    {
      id: "blog-1",
      title: "Building Ultra-Fast Next.js Apps with Server Actions & Suspense",
      excerpt: "A deep dive into Leveraging React Server Components, Streaming UI with Suspense, and mutation handling using Next.js 14 Server Actions.",
      date: "Jul 15, 2026",
      readTime: "6 min read",
      category: "Next.js",
      slug: "nextjs-server-actions-suspense",
    },
    {
      id: "blog-2",
      title: "Mastering Glassmorphism & Framer Motion Micro-Animations",
      excerpt: "How to craft modern, tactile dark UI aesthetics with smooth 60fps animations without degrading Web Vitals performance.",
      date: "Jun 28, 2026",
      readTime: "8 min read",
      category: "UI Design",
      slug: "glassmorphism-framer-motion",
    },
    {
      id: "blog-3",
      title: "Vercel Deployment Best Practices: Security Headers & Caching",
      excerpt: "Essential headers, CDN caching strategies, edge middleware, and environment configuration for production-ready Vercel apps.",
      date: "May 10, 2026",
      readTime: "5 min read",
      category: "DevOps",
      slug: "vercel-deployment-security-caching",
    },
  ] as BlogPost[],
};
