# Naresh Chaudhary — Software Engineer Portfolio

A production-focused personal portfolio showcasing my software engineering work, professional experience, technical skills, and engineering case studies.

The portfolio is designed around a simple principle:

> **Evidence over claims.**

Rather than functioning as a traditional developer landing page, it focuses on the systems I have built, the engineering decisions behind them, and the areas of software engineering I am actively developing deeper expertise in.

---

## Live Portfolio

**Portfolio:** [View Live Website](YOUR_PORTFOLIO_URL)

**Resume:** [View Web Resume](YOUR_PORTFOLIO_URL/resume)

**GitHub:** [github.com/dev-naresh608](https://github.com/dev-naresh608)

**LinkedIn:** [linkedin.com/in/naresh608](https://www.linkedin.com/in/naresh608)

---

## Contact Form Configuration

The portfolio contact form uses EmailJS for direct email transmission.

Required environment variables in `.env`:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

---

## About

I'm a Software Engineer with hands-on experience building full-stack applications using JavaScript, React, Node.js, Express.js, and MongoDB.

My current engineering focus includes backend architecture, API design, authentication and authorization, database design, security, reliability, and distributed-system fundamentals.

This portfolio brings together my professional experience and selected engineering projects in one place.

---

## Featured Engineering Projects

### 01 — SupplyNest

**Enterprise Distribution & Inventory Management System**

SupplyNest is an enterprise-oriented distribution and inventory management platform designed around modular backend architecture, fine-grained authorization, and auditable stock movement.

**Engineering highlights:**

- Domain-oriented modular backend architecture
- Role-Based Access Control (RBAC)
- SuperAdmin, Admin, Manager, and Staff roles
- Inventory and stock transaction tracking
- JWT authentication with HTTP-only cookies
- bcrypt password hashing
- Zod request validation
- Rate limiting and Helmet security headers
- Winston application logging
- Cloudinary media management

**Stack:** Node.js · Express.js · MongoDB · Mongoose · React · Vite · Zod · Winston · Cloudinary

[View Repository](https://github.com/dev-naresh608/supplyNest)

The portfolio also contains a dedicated technical case study covering the architecture and engineering decisions behind SupplyNest.

---

### 02 — edgeSync

**Distributed CDN & Reliability Exploration**

edgeSync explores concepts involved in distributed content delivery and resilient request handling.

Areas explored include:

- Distributed server architecture
- Resource distribution
- Request routing
- Retry and fallback strategies
- Failure handling
- Internal server authorization
- Distributed-system fundamentals

The project is presented as an engineering exploration rather than a production-scale CDN.

---

### 03 — Novexa

**Multi-Vendor E-Commerce Platform**

Novexa is a full-stack commerce platform built around multiple interacting user roles and business workflows.

The platform includes:

- Customer workflows
- Seller workflows
- Driver workflows
- Admin workflows
- JWT authentication
- Role-based authorization
- Product management
- Shopping cart functionality
- Order processing
- MongoDB data modeling
- Cloudinary media management

**Stack:** React · Node.js · Express.js · MongoDB · Mongoose · Tailwind CSS · Cloudinary · JWT

---

## Portfolio Features

### Engineering-Focused Project Presentation

Projects are presented around:

**Problem → Engineering Approach → Technical Decisions → Implementation**

instead of only screenshots and technology badges.

### SupplyNest Case Study

A dedicated project route documents:

- System architecture
- Backend module structure
- Authentication flow
- RBAC design
- Inventory workflow
- API design
- Database decisions
- Validation
- Security
- Logging
- Engineering trade-offs
- Future improvements

### Interactive Web Resume

The portfolio includes a dedicated:

```text
/resume
```

route containing a portfolio-native web representation of my professional resume.

The web resume is intentionally separate from the downloadable ATS-friendly PDF.

### Responsive Design

The interface is designed for:

- Desktop
- Laptop
- Tablet
- Mobile
- Small mobile devices

### Accessibility

The implementation considers:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Reduced-motion preferences
- Accessible forms
- Appropriate color contrast

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

---

## Design System

The portfolio uses a custom **engineering blueprint on warm drafting paper** visual system.

### Typography

- **Fraunces** — display typography
- **Inter** — interface and body text
- **IBM Plex Mono** — technical metadata

### Core Palette

```text
Paper       #FAF7F0
Paper Dim   #F1EBDD
Ink         #14212B
Ink Soft    #4C5C66
Brass       #B8863E
Slate       #33546C
```

The visual system intentionally uses restrained blueprint-inspired details rather than conventional dark/neon developer portfolio styling.

---

## Project Structure

```text
src/
├── assets/
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
│   └── projects/
│       └── SupplyNestCaseStudy.jsx
│
├── hooks/
├── utils/
├── styles/
├── App.jsx
└── main.jsx
```

> The exact structure may evolve as the application grows.

---

## Routes

| Route | Description |
|---|---|
| `/` | Main portfolio |
| `/resume` | Interactive web resume |
| `/projects/supplynest` | SupplyNest engineering case study |

---

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/dev-naresh608/naresh-portfolio.git
```

Navigate into the project:

```bash
cd naresh-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL displayed by Vite.

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Engineering Principles

This project follows a few principles that also reflect how I approach software development:

- Prefer maintainability over unnecessary abstraction
- Keep components focused and reusable
- Separate repeated content from presentation where useful
- Use semantic HTML before adding ARIA
- Treat accessibility as part of implementation
- Respect reduced-motion preferences
- Keep animations purposeful
- Optimize for real users rather than visual effects
- Avoid unsupported claims and artificial metrics

---

## Performance & Accessibility

The portfolio is designed with attention to:

- Responsive layouts
- Image optimization
- Lazy loading where appropriate
- Minimal unnecessary dependencies
- Accessible navigation
- Keyboard interaction
- Reduced-motion support
- Semantic page structure

Performance and accessibility should be validated before each production release.

---

## Resume

The portfolio provides two resume experiences:

**Web Resume**

```text
/resume
```

A responsive, interactive resume integrated with the portfolio design system.

**Downloadable Resume**

A conventional ATS-friendly PDF intended for job applications and recruiter workflows.

The themed web page is intentionally **not** converted into the downloadable PDF.

---

## Contact

**Naresh Chaudhary**

Software Engineer

- Email: [dev.naresh608@gmail.com](mailto:dev.naresh608@gmail.com)
- LinkedIn: [linkedin.com/in/naresh608](https://www.linkedin.com/in/naresh608)
- GitHub: [github.com/dev-naresh608](https://github.com/dev-naresh608)

---

## License

This repository contains the source code and design of my personal portfolio.

The source is publicly available for learning and reference. Please do not directly copy the portfolio's personal content, branding, or design and present it as your own.

---

<p align="center">
  <strong>Designed & engineered by Naresh Chaudhary.</strong>
</p>