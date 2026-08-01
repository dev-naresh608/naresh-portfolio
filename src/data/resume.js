export const resumeData = {
  header: {
    label: "RESUME / 2026",
    name: "Naresh Chaudhary",
    title: "Software Engineer",
    subtitle: "Full-Stack Engineering · Backend Engineering · Reliable Systems",
    phone: "+91 7990039450",
    email: "dev.naresh608@gmail.com",
    linkedin: "https://www.linkedin.com/in/naresh608",
    linkedinHandle: "linkedin.com/in/naresh608",
    github: "https://github.com/dev-naresh608",
    githubHandle: "github.com/dev-naresh608",
    pdfUrl: "/Naresh_Resume.html",
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
      repo: "https://github.com/dev-naresh608/supplyNest",
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
      repo: "https://github.com/dev-naresh608",
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
      repo: "https://github.com/dev-naresh608",
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
        "Integrated Cloudinary image pipeline giving sellers independent control over product media assets.",
      ],
    },
  ],

  skills: [
    {
      category: "LANGUAGES",
      items: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      category: "FRONTEND",
      items: [
        "React.js",
        "Component Architecture",
        "Responsive Design",
        "Tailwind CSS",
        "Bootstrap",
        "Axios",
      ],
    },
    {
      category: "BACKEND",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "RBAC",
        "Error Handling",
      ],
    },
    {
      category: "DATABASE",
      items: ["MongoDB", "MySQL", "Mongoose ODM", "Database Design"],
    },
    {
      category: "TOOLS",
      items: ["Git", "GitHub", "Postman", "Cloudinary", "VS Code", "npm"],
    },
    {
      category: "ENGINEERING",
      items: [
        "API Integration",
        "Full-Stack Development",
        "Clean Code",
        "MVC concepts",
        "SDLC",
      ],
    },
  ],

  education: {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Information Technology",
    institution: "Vishwakarma Government Engineering College",
    period: "2022 — 2026",
    cgpa: "7.7 / 10",
  },

  achievements: [
    {
      title: "Smart India Hackathon 2024 Participant",
      detail:
        "Collaborated in an intensive hackathon environment to engineer a functional technical solution under time constraints.",
    },
    {
      title: "6-Month Frontend Developer Internship",
      detail:
        "Completed a 6-month developer internship at Aavishkruti Solutions, contributing reusable UI components to production web applications.",
    },
  ],
};
