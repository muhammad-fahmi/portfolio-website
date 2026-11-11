export interface Project {
  id: string;
  title: string;
  description: string;
  contribution: string;
  category: "Full Stack" | "Frontend" | "Backend" | "AI / Cloud";
  tags: string[];
  githubUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period?: string;
  location?: string;
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
    role: "Full-Stack Developer",
    tagline:
      "I build practical web applications by connecting thoughtful frontend experiences with reliable backend systems.",
    bio:
      "Full-stack developer with 2+ years of experience building web applications. I have worked across frontend development, backend APIs, database design, and deployment, with a focus on turning business workflows into maintainable software.",
    location: "Tangerang, Banten, Indonesia",
    email: "fahmipradana4@gmail.com",
    github: "https://github.com/muhammad-fahmi",
    linkedin: "https://www.linkedin.com/in/muhammadfahmi1884/",
    status: "Focused on building useful, maintainable web applications",
  },
  skills: [
    {
      title: "Frontend Development",
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
      title: "Backend Development",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "PHP" },
        { name: "Laravel" },
        { name: "CodeIgniter 4" },
        { name: "FilamentPHP" },
        { name: "REST API" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
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
      description:
        "A web-based system for managing sanitation activities, tracking task completion, reviewing submissions, and generating operational reports.",
      contribution:
        "Worked on the application frontend, database structure, backend APIs, and deployment. The repository documents task tracking, verification workflows, role-based access, and report exports.",
      category: "Full Stack",
      tags: [
        "CodeIgniter 4",
        "PHP 8.3",
        "PostgreSQL",
        "Bootstrap",
        "jQuery",
        "JavaScript",
      ],
      githubUrl:
        "https://github.com/muhammad-fahmi/bionic-sanitation-management-system",
      featured: true,
    },
    {
      id: "docucast",
      title: "DocuCast",
      description:
        "An internal document management application designed to organize documents and support a structured approval workflow.",
      contribution:
        "Built the database structure and deployed the application. The implementation uses FilamentPHP capabilities for authentication, roles and permissions, and approval workflow, together with Laravel notifications.",
      category: "Full Stack",
      tags: ["Laravel", "FilamentPHP", "PostgreSQL"],
      githubUrl: "https://github.com/muhammad-fahmi/bionic-docucast",
      featured: true,
    },
  ] as Project[],
  experiences: [
    {
      id: "bionic-natura",
      role: "Full-Stack Developer",
      company: "PT. Bionic Natura",
      description: [
        "Developed web application features based on operational requirements, working across frontend interfaces, backend APIs, and database structure.",
        "Contributed to the Sanitation Management System and DocuCast, including deployment and workflow implementation.",
      ],
      technologies: [
        "JavaScript",
        "PHP",
        "CodeIgniter 4",
        "Laravel",
        "FilamentPHP",
        "PostgreSQL",
      ],
    },
  ] as Experience[],
  blogs: [] as BlogPost[],
};
