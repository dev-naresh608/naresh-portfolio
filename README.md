# Naresh Chaudhary — Software Engineer Portfolio

Personal software engineering portfolio built to showcase my professional experience, engineering projects, technical skills, and project case studies.

The portfolio focuses on **engineering evidence over generic claims**, with detailed project presentations covering architecture, backend systems, APIs, authentication, authorization, databases, security, and reliability.

---

## Overview

This portfolio serves as my primary professional website for software engineering opportunities.

It includes:

- Professional experience
- Selected engineering projects
- Technical skills
- Engineering interests
- Education and achievements
- Interactive web resume
- Downloadable ATS-friendly resume
- Detailed SupplyNest engineering case study
- Contact form powered by EmailJS
- Responsive and accessible UI

---

## Environment Configuration

Copy `.env.example` to `.env` and fill in your environment variables:

```env
VITE_SITE_URL=
VITE_SITE_NAME=
VITE_SITE_ROLE=

VITE_CONTACT_EMAIL=
VITE_CONTACT_PHONE=
VITE_CONTACT_LOCATION=

VITE_GITHUB_URL=
VITE_LINKEDIN_URL=

VITE_SUPPLYNEST_REPO_URL=
VITE_EDGESYNC_REPO_URL=
VITE_NOVEXA_REPO_URL=

VITE_RESUME_PATH=

VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

### Steps:
1. Copy `.env.example` to `.env` in the project root.
2. Fill browser-safe configuration values.
3. Never commit `.env` to git (it is listed in `.gitignore`).
4. Configure the exact same required variables in Vercel project environment settings.

---

## Featured Projects

### 01 — SupplyNest

**Enterprise Distribution & Inventory Management System**

SupplyNest is an enterprise-oriented inventory and distribution platform built around modular backend architecture, role-based access control, and auditable stock movement.

#### Engineering Highlights

- Domain-oriented modular backend architecture
- Role-Based Access Control (RBAC)
- SuperAdmin, Admin, Manager, and Staff roles
- Inventory and stock transaction tracking
- JWT authentication
- HTTP-only cookies
- bcrypt password hashing
- Zod validation
- Rate limiting
- Helmet security headers
- Winston logging
- Cloudinary media management

#### Stack

`Node.js` `Express.js` `MongoDB` `Mongoose` `React` `Vite` `Zod` `Winston` `Cloudinary`

Repository:

https://github.com/dev-naresh608/supplyNest

The portfolio also includes a dedicated SupplyNest technical case study.

---

### 02 — edgeSync

**Distributed CDN & Reliability Exploration**

edgeSync explores concepts involved in distributed content delivery and resilient request handling.

Engineering areas explored include:

- Distributed server architecture
- Geographically separated servers
- Resource distribution
- Request routing
- Retry and fallback strategies
- Failure handling
- Internal server authorization
- Reliability fundamentals

The project is presented as an engineering exploration rather than a production-scale CDN.

---

### 03 — Novexa

**Multi-Vendor E-Commerce Platform**

Novexa is a full-stack commerce platform built around multiple interacting user roles and business workflows.

#### Core Capabilities

- Customer workflows
- Seller workflows
- Driver workflows
- Admin workflows
- Authentication
- Role-based authorization
- Product management
- Cart management
- Order processing
- MongoDB data modeling
- Cloudinary media management

#### Stack

`React` `Node.js` `Express.js` `MongoDB` `Mongoose` `Tailwind CSS` `Cloudinary` `JWT`

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React

### Development

- Git
- GitHub
- npm
- ESLint

### Integrations

- EmailJS

---

## Design System

The portfolio uses a custom visual direction inspired by an:

> **Engineering blueprint on warm drafting paper**

The goal is to create a technical and professional visual identity without relying on the typical dark/neon developer portfolio aesthetic.

### Typography

| Font | Usage |
|---|---|
| Fraunces | Display headings |
| Inter | Body and interface |
| IBM Plex Mono | Technical metadata |

### Color Palette

| Token | Color |
|---|---|
| Paper | `#FAF7F0` |
| Paper Dim | `#F1EBDD` |
| Paper Line | `#DCD3BE` |
| Ink | `#14212B` |
| Ink Soft | `#4C5C66` |
| Brass | `#B8863E` |
| Slate | `#33546C` |
| Success | `#4C7A5B` |

Brass is intentionally used as a restrained accent rather than a dominant color.

---

## Application Routes

| Route | Purpose |
|---|---|
| `/` | Main portfolio |
| `/resume` | Interactive themed web resume |
| `/projects/supplynest` | SupplyNest engineering case study |
| `*` | Custom 404 page |

---

## Resume Architecture

The portfolio intentionally provides two separate resume experiences.

### View Resume

```text
/resume
```

This route provides a responsive web representation of my resume using the portfolio design system.

### Download Resume

The Download Resume action serves the standard ATS-friendly PDF resume.

```text
public/
└── Naresh_Resume.pdf
```

The themed web resume is **not converted into the downloadable PDF**.

This keeps the web experience visually consistent while preserving a conventional resume format for job applications and ATS systems.

---

## Contact Form

The portfolio contact form uses EmailJS.

### Features

- Client-side validation
- Loading state
- Success state
- Error handling
- Duplicate-submit prevention
- Direct-email fallback
- Accessible status feedback
- Honeypot spam protection
- Preserves user input when sending fails

### Required Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Do not commit the real `.env` file.

An `.env.example` file should contain:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

### EmailJS Template Variables

The EmailJS template expects:

```text
from_name
from_email
reply_to
message
```

### Security Note

`VITE_*` environment variables are bundled into the frontend application and must not contain private server-side secrets.

The EmailJS Public Key is client-side configuration.

Never place private API secrets or server credentials in Vite environment variables.

---

## Project Structure

The exact structure may evolve, but the application follows approximately:

```text
src/
├── assets/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── data/
│   ├── projects.js
│   ├── experience.js
│   ├── skills.js
│   └── resume.js
│
├── pages/
│   ├── Home.jsx
│   ├── Resume.jsx
│   ├── NotFound.jsx
│   │
│   └── projects/
│       └── SupplyNestCaseStudy.jsx
│
├── services/
│   └── email.service.js
│
├── hooks/
├── utils/
├── styles/
├── App.jsx
└── main.jsx

public/
├── Naresh_Resume.pdf
├── favicon.*
├── robots.txt
└── sitemap.xml
```

Update this section if the actual project structure differs.

---

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

### Clone Repository

Because this is a private repository, the GitHub account cloning it must have repository access.

```bash
git clone https://github.com/dev-naresh608/naresh-portfolio.git
```

Move into the project:

```bash
cd naresh-portfolio
```

Install dependencies:

```bash
npm install
```

---

## Environment Setup

Create:

```text
.env
```

Add the required EmailJS configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Never commit real environment values.

---

## Development

Start the Vite development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

---

## Production Build

Generate a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production build must complete successfully before deployment.

---

## Deployment

The portfolio is deployed using Vercel.

Architecture:

```text
Private GitHub Repository
          │
          ▼
       Vercel
          │
     Build & Deploy
          │
          ▼
   Public Portfolio
```

The GitHub repository can remain private while the deployed website remains publicly accessible.

---

## Vercel Environment Variables

The local `.env` file is not automatically transferred to Vercel.

Configure these variables manually in the Vercel project:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

After changing production environment variables, redeploy the application if required.

Never add private server credentials to `VITE_*` variables.

---

## SPA Routing

Because the application uses React Router, direct navigation to routes such as:

```text
/resume

/projects/supplynest
```

must continue to work after deployment and browser refresh.

Vercel should be configured to correctly serve the SPA entry point for client-side routes where required.

---

## Accessibility

The portfolio is designed with attention to:

- Semantic HTML
- Logical heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible forms
- Reduced-motion preferences
- Appropriate color contrast
- Responsive navigation
- Descriptive links

Accessibility should be treated as part of implementation rather than a post-build feature.

---

## Performance

Production implementation should prioritize:

- Optimized images
- Lazy loading where appropriate
- Route-level code splitting
- Minimal unnecessary dependencies
- Efficient animation
- Reduced-motion support
- Proper image dimensions
- Clean production bundles

Decorative effects should never take priority over usability or performance.

---

## Engineering Principles

This portfolio follows several principles that reflect how I approach software development:

- Evidence over claims
- Maintainability over unnecessary abstraction
- Clear component responsibilities
- Reusable data-driven UI where appropriate
- Semantic HTML before unnecessary ARIA
- Accessibility as an implementation requirement
- Purposeful animation
- Honest representation of project maturity
- No fake engineering metrics
- No unsupported scalability claims

---

## Git Workflow

Recommended development flow:

```text
main
  │
  ├── feature/*
  ├── fix/*
  └── refactor/*
```

Examples:

```text
feature/resume-page
feature/supplynest-case-study
feature/emailjs-contact
fix/mobile-navigation
fix/responsive-project-layout
refactor/project-data
```

Keep commits focused and descriptive.

Examples:

```text
feat: add interactive resume route

feat: integrate EmailJS contact form

feat: add SupplyNest project case study

fix: resolve mobile navigation overflow

fix: preserve contact form data on email failure

refactor: move project content into shared data
```

Avoid commit messages such as:

```text
update

changes

final

final2

fix

done
```

---

## Pre-Deployment Checklist

Before deploying a production version:

- [ ] Production build passes
- [ ] All routes work
- [ ] Direct route refresh works
- [ ] Resume PDF opens/downloads correctly
- [ ] GitHub links work
- [ ] LinkedIn link works
- [ ] Email links work
- [ ] EmailJS form sends successfully
- [ ] Contact failure fallback works
- [ ] Environment variables configured in Vercel
- [ ] No `.env` committed
- [ ] No secrets in frontend source
- [ ] Mobile navigation works
- [ ] No horizontal overflow
- [ ] Keyboard navigation works
- [ ] Reduced-motion behavior works
- [ ] Images optimized
- [ ] Metadata configured
- [ ] Favicon configured
- [ ] `robots.txt` configured
- [ ] `sitemap.xml` configured
- [ ] Custom 404 works
- [ ] No placeholder content remains
- [ ] No debug `console.log` statements remain

---

## Repository Visibility

This repository is intentionally maintained as a **private repository**.

The production portfolio is publicly accessible through Vercel, while the portfolio source code remains private.

Selected engineering project repositories may be publicly available separately for technical review.

---

## Contact

**Naresh Chaudhary**  
Software Engineer

Email:  
`dev.naresh608@gmail.com`

GitHub:  
`github.com/dev-naresh608`

LinkedIn:  
`linkedin.com/in/naresh608`

---

## Maintenance

When updating the portfolio, keep information synchronized across:

- Homepage
- Web resume
- Downloadable resume
- Project case studies
- GitHub repositories
- LinkedIn

Avoid allowing project descriptions, dates, technologies, or professional positioning to become inconsistent across these surfaces.

---

**Naresh Chaudhary — Software Engineer**