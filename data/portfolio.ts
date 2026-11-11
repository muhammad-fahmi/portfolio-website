export interface Project {
  id: string;
  title: string;
  summary: string;
  contribution: string;
  category: "Business Systems" | "Internal Tools";
  tags: string[];
  githubUrl?: string;
  repositoryLabel?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  projects: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Fahmi",
    role: "Full-Stack Developer",
    tagline:
      "I turn operational requirements into practical web applications — from database design and backend APIs to usable interfaces and deployment.",
    bio:
      "Full-stack developer with 2+ years of professional experience. I have contributed to business applications across retail operations, document workflows, teacher allowance calculations, and sanitation management. My work spans frontend development, backend implementation, database design, debugging, and deployment.",
    location: "Tangerang, Banten, Indonesia",
    email: "fahmipradana4@gmail.com",
    github: "https://github.com/muhammad-fahmi",
    linkedin: "https://www.linkedin.com/in/muhammadfahmi1884/",
    status: "Open to meaningful software development opportunities",
  },
  skills: [
    {
      title: "Frontend",
      skills: [
        { name: "HTML & CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "jQuery" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP" },
        { name: "Laravel" },
        { name: "CodeIgniter" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST API" },
        { name: "FilamentPHP" },
      ],
    },
    {
      title: "Data & Tools",
      skills: [
        { name: "PostgreSQL" },
        { name: "MariaDB" },
        { name: "Docker" },
        { name: "Git & GitHub" },
        { name: "Python" },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "sanitation-management-system",
      title: "Sanitation Management System",
      summary:
        "An operational application for recording sanitation activities, validating submissions, handling revisions, and reviewing reports by date and location.",
      contribution:
        "Independently handled the frontend, database schema, backend APIs, and deployment, while translating operational needs into an operator-to-validator workflow.",
      category: "Business Systems",
      tags: ["CodeIgniter", "PHP", "MariaDB", "Bootstrap", "jQuery", "JavaScript"],
      githubUrl: "https://github.com/muhammad-fahmi/bionic-sanitation-management-system",
      featured: true,
    },
    {
      id: "docucast",
      title: "DocuCast",
      summary:
        "An internal document management application for organizing files and managing a structured document approval process.",
      contribution:
        "Designed the database structure and deployed the application. Authentication, role and permission management, and approval capabilities use FilamentPHP features; notifications use Laravel's built-in notification system.",
      category: "Internal Tools",
      tags: ["Laravel", "FilamentPHP", "PostgreSQL"],
      githubUrl: "https://github.com/muhammad-fahmi/bionic-docucast",
      featured: true,
    },
    {
      id: "e-bumdes",
      title: "E-BUMDes",
      summary:
        "A village-owned enterprise sales and inventory application with point-of-sale transactions, receipt printing, stock movements, pre-orders, and PDF/Excel reports.",
      contribution:
        "Contributed as a Programmer at CV. Echo Media, assisting the Tech Lead with bug fixes and feature updates.",
      category: "Business Systems",
      tags: ["CodeIgniter 3", "HMVC", "MariaDB"],
      githubUrl: "https://github.com/muhammad-fahmi/echo-media-e-bumdes-backup",
      repositoryLabel: "Repository archive",
      featured: true,
    },
    {
      id: "teacher-allowance",
      title: "Teacher Allowance System",
      summary:
        "A system for calculating teacher allowances based on applicable government regulations.",
      contribution:
        "Contributed to development and maintenance, including bug fixes and feature updates in coordination with the Tech Lead.",
      category: "Business Systems",
      tags: ["CodeIgniter 3", "jQuery"],
      githubUrl: "https://github.com/muhammad-fahmi/echo-sistem-tunjangan-guru",
      featured: true,
    },
    {
      id: "sikue",
      title: "SiKue",
      summary:
        "A project delivered during my time at CV. Echo Media. The public project scope and technical details are not documented here.",
      contribution:
        "Contributed to application maintenance, bug fixing, and feature updates as part of the development team.",
      category: "Business Systems",
      tags: [],
    },
    {
      id: "e-petrol",
      title: "E-Petrol",
      summary:
        "A project delivered during my time at CV. Echo Media. The public project scope and technical details are not documented here.",
      contribution:
        "Contributed to application maintenance, bug fixing, and feature updates as part of the development team.",
      category: "Business Systems",
      tags: [],
    },
  ] as Project[],
  experiences: [
    {
      id: "echo-media",
      role: "Programmer",
      company: "CV. Echo Media",
      period: "November 2023 – October 2025",
      description: [
        "Assisted the Tech Lead in maintaining and improving web applications by fixing bugs and modifying existing features.",
        "Contributed to projects across business operations, including E-BUMDes and Teacher Allowance System.",
      ],
      projects: ["E-BUMDes", "Teacher Allowance System", "SiKue", "E-Petrol"],
      technologies: ["PHP", "CodeIgniter 3", "HMVC", "MariaDB", "jQuery"],
    },
    {
      id: "bionic-natura",
      role: "Full-Stack Developer",
      company: "PT. Bionic Natura",
      period: "October 2025 – April 2026",
      description: [
        "Developed and deployed business applications independently, covering frontend implementation, database design, backend APIs, and deployment.",
        "Communicated directly with clients to understand operational requirements and translate them into application features.",
      ],
      projects: ["Sanitation Management System", "DocuCast"],
      technologies: [
        "PHP",
        "CodeIgniter",
        "Laravel",
        "FilamentPHP",
        "MariaDB",
        "PostgreSQL",
        "Bootstrap",
        "jQuery",
      ],
    },
  ] as Experience[],
};
