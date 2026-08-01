import { siteConfig } from '../config/site.config';

export const profileData = {
  name: siteConfig.site.name,
  role: siteConfig.site.role,
  focus: "Full-Stack & Backend Engineering",
  availability: "AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES",
  tagline: `${siteConfig.site.role} building reliable full-stack systems.`,
  bioHeading: "Engineering Mindset & Systems Focus",
  bio: "I am a Software Engineer focused on building full-stack web applications with an emphasis on backend architecture, resilient REST APIs, schema design, security practices, and domain-oriented system modeling. I prioritize evidence over hype—writing clean code, understanding underlying trade-offs, and building software designed for reliability and maintainability.",
  email: siteConfig.contact.email,
  github: siteConfig.social.github,
  linkedin: siteConfig.social.linkedin,
  resumeUrl: siteConfig.resume.path,
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
