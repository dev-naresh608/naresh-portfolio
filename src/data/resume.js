import { siteConfig } from '../config/site.config';

const getHandle = (url) => (url ? url.replace(/^https?:\/\//, '') : '');

export const resumeData = {
  header: {
    label: "RESUME / 2026",
    name: siteConfig.site.name,
    title: siteConfig.site.role,
    subtitle: "Full-Stack Engineering · Backend Engineering · Reliable Systems",
    phone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    linkedin: siteConfig.social.linkedin,
    linkedinHandle: getHandle(siteConfig.social.linkedin),
    github: siteConfig.social.github,
    githubHandle: getHandle(siteConfig.social.github),
    pdfUrl: siteConfig.resume.path,
  },

  indexLinks: [
    { id: "profile", label: "00 PROFILE" },
    { id: "experience", label: "01 EXPERIENCE" },
    { id: "projects", label: "02 PROJECTS" },
    { id: "skills", label: "03 SKILLS" },
    { id: "education", label: "04 EDUCATION" },
    { id: "achievements", label: "05 ACHIEVEMENTS" },
  ],

  profile: {
    sectionId: "00 // PROFILE",
    title: "Professional Summary",
    summary:
      "Software Engineer with hands-on full-stack development experience and a growing depth in backend architecture, REST API design, security primitives, and database-backed applications. Experienced in developing component-driven user interfaces with React and Node.js backend services, enforcing schema validation, role-based authorization (RBAC), and transactional data modeling. Focused on building reliable, maintainable software with clean separation of concerns.",
  },

  experience: [
    {
      id: "exp-primary",
      isPrimary: true,
      period: "2026.01 — 2026.06",
      role: "Frontend Developer Intern",
      company: "Aavishkruti Solutions",
      type: "INTERNSHIP // PRIMARY",
      bullets: [
        "Built responsive, reusable React.js UI components deployed across multiple sections of production web applications.",
        "Integrated RESTful APIs into frontend components, partnering closely with backend developers to ship functional features.",
        "Followed industry-standard development practices, including component reusability, Git-based version control, and code review workflows.",
        "Handled client-side state management and error boundaries defensively to ensure UI stability under API failure states.",
      ],
    },
    {
      id: "exp-secondary-1",
      isPrimary: false,
      period: "2025.05 — 2025.06",
      role: "AI Fundamentals Intern",
      company: "Microsoft Azure",
      type: "INTERNSHIP // SECONDARY",
      bullets: [
        "Gained hands-on experience with Azure Cognitive Services and cloud-based AI deployment fundamentals.",
      ],
    },
    {
      id: "exp-secondary-2",
      isPrimary: false,
      period: "2025.07",
      role: "AI Intern",
      company: "IBM SkillsBuild",
      type: "INTERNSHIP // SECONDARY",
      bullets: [
        "Implemented foundational ML models and performed data preprocessing on real-world datasets.",
      ],
    },
  ],

  projects: [
    {
      id: "PROJECT / 01",
      name: "SupplyNest",
      subtitle: "Invora Platform",
      tagline: "Enterprise Distribution & Inventory Management System",
      type: "INVENTORY SYSTEM // DOMAIN BACKEND",
      repo: siteConfig.projects.supplyNest.repository,
      caseStudyUrl: "/projects/supplynest",
      stack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "React",
        "Vite",
        "Zod",
        "Cloudinary",
        "Winston",
      ],
      bullets: [
        "Architected a domain-oriented modular backend decoupling Auth, Inventory, Product Catalog, RBAC, and Stock Transactions.",
        "Enforced 4-tier Role-Based Access Control (SuperAdmin, Admin, Manager, Staff) with HTTP-only JWT cookies, bcrypt, rate limiting, and Helmet headers.",
        "Built transactional stock movement logging with immutable audit trails and Zod schema payload validation.",
        "Implemented structured Winston application logging for production observability.",
      ],
    },
    {
      id: "PROJECT / 02",
      name: "EdgeSync",
      subtitle: "Distributed Systems Prototype",
      tagline:
        "Geographically Separated Edge Content Routing & Failover Architecture",
      type: "ROUTING & FAILOVER // PROTOTYPE",
      repo: siteConfig.projects.edgeSync.repository,
      caseStudyUrl: null,
      stack: [
        "Node.js",
        "Express.js",
        "JavaScript",
        "HTTP Routing",
        "Distributed Concepts",
      ],
      bullets: [
        "Explored distributed request routing primitives by simulating geographically separated server nodes.",
        "Implemented automated heartbeat health-checking and failover retry handling when primary edge nodes experience downtime.",
        "Utilized internal server authorization tokens to validate inter-node HTTP header requests.",
      ],
    },
    {
      id: "PROJECT / 03",
      name: "Novexa",
      subtitle: "Multi-Vendor Commerce Engine",
      tagline:
        "Multi-Role E-Commerce Platform for Customers, Sellers, Drivers, and Admins",
      type: "COMMERCE PLATFORM // MULTI-ROLE",
      repo: siteConfig.projects.novexa.repository,
      caseStudyUrl: null,
      stack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Cloudinary",
        "JWT",
      ],
      bullets: [
        "Structured multi-role business workflows unifying Customers, Sellers, Drivers, and Administrators.",
        "Designed RESTful APIs and normalized MongoDB document relationships for product catalogs, cart calculations, and stateful order transitions.",
      ],
    },
  ],

  skills: [
    {
      category: "LANGUAGES & CORE",
      items: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      category: "FRONTEND STACK",
      items: ["React.js", "Vite", "Tailwind CSS", "React Router", "Framer Motion"],
    },
    {
      category: "BACKEND & APIS",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Zod Validation", "Winston"],
    },
    {
      category: "DATABASE",
      items: ["MongoDB", "Mongoose ODM"],
    },
    {
      category: "TOOLS & SECURITY",
      items: ["Git", "GitHub", "Postman", "Cloudinary", "Helmet Security"],
    },
  ],

  education: {
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    institution: "Government Engineering College, Modasa",
    period: "2022 — 2026",
    cgpa: "7.77 / 10.0",
    location: "Modasa, Gujarat, India",
  },

  achievements: [
    {
      title: "Full-Stack Project Deployments",
      detail:
        "Engineered and launched production full-stack web applications featuring domain backend architecture, role authorizations, and transactional MongoDB ledgers.",
    },
    {
      title: "Academic Excellence in IT",
      detail:
        "Maintained consistent 7.77 CGPA across core Computer Science and Information Technology coursework.",
    },
  ],
};
