import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { GithubIcon } from '../../components/common/Icons';
import { projectsData } from '../../data/projects';
import { isValidUrl } from '../../config/site.config';

export const SupplyNestCaseStudy = () => {
  const project = projectsData.find(p => p.slug === 'supplynest') || projectsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="py-12 sm:py-16 bg-[#FAF7F0] text-[#14212B] min-h-screen relative overflow-hidden">
      {/* Blueprint Grid Overlay Background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Navigation Bar Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DCD3BE] pb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#4C5C66] hover:text-[#14212B] transition-colors focus-visible:outline-none"
          >
            <ArrowLeft className="w-4 h-4 text-[#B8863E]" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[#8A9399]">DOC_REF // CASE-STUDY-01</span>
            {isValidUrl(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#14212B] bg-[#FAF7F0] hover:bg-[#14212B] text-[#14212B] hover:text-[#FAF7F0] font-semibold transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>VIEW REPO</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Header Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#B8863E] font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#B8863E]" />
            TECHNICAL CASE STUDY // BACKEND SYSTEM ARCHITECTURE
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#14212B] tracking-tight">
            SupplyNest <span className="text-[#33546C] font-normal italic">(Invora Platform)</span>
          </h1>

          <p className="font-mono text-sm sm:text-base text-[#4C5C66]">
            Enterprise-Oriented Distribution &amp; Inventory Management System
          </p>

          {/* Quick Technical Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 font-mono text-xs">
            <div className="p-3 border border-[#DCD3BE] bg-[#F1EBDD]/60">
              <span className="text-[10px] text-[#8A9399] block uppercase">ARCH PATTERN</span>
              Modular Domain Monolith
            </div>
            <div className="p-3 border border-[#DCD3BE] bg-[#F1EBDD]/60">
              <span className="text-[10px] text-[#8A9399] block uppercase">AUTH &amp; SECURITY</span>
              HTTP-Only JWT &amp; RBAC
            </div>
            <div className="p-3 border border-[#DCD3BE] bg-[#F1EBDD]/60">
              <span className="text-[10px] text-[#8A9399] block uppercase">VALIDATION</span>
              Zod Schema Enforcement
            </div>
            <div className="p-3 border border-[#DCD3BE] bg-[#F1EBDD]/60">
              <span className="text-[10px] text-[#8A9399] block uppercase">PERSISTENCE</span>
              MongoDB &amp; Mongoose
            </div>
          </div>
        </div>

        {/* SECTION 1: PROJECT OVERVIEW */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            01 // PROJECT OVERVIEW
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Background &amp; Scope</h2>
          <div className="font-body text-base text-[#4C5C66] leading-relaxed space-y-3">
            <p>
              SupplyNest (Invora Platform) was architected as an enterprise-oriented distribution and inventory tracking system. In multi-branch distribution, accurate stock visibility, transactional movement logging, and role-restricted operations are essential to prevent inventory drift and unauthorized state changes.
            </p>
            <p>
              The primary goal of this project was to establish a domain-isolated Node.js/Express backend capable of enforcing strict authentication, fine-grained access control, input payload validation, and immutable stock audit histories.
            </p>
          </div>
        </section>

        {/* SECTION 2: PROBLEM STATEMENT */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            02 // THE PROBLEM
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Operational Challenges in Inventory Systems</h2>
          <div className="p-5 border border-[#14212B] bg-[#F1EBDD]/50 space-y-3 font-body text-sm text-[#14212B]">
            <div className="font-mono text-xs font-semibold text-[#33546C]">KEY RISK FACTORS IDENTIFIED:</div>
            <ul className="list-disc list-inside space-y-1.5 text-[#4C5C66]">
              <li><strong>Permission Overreach:</strong> Unrestricted API endpoints allow unauthorized staff members to alter stock counts or delete product records.</li>
              <li><strong>Untracked Mutations:</strong> Inbound and outbound stock adjustments lacking atomic transaction logs lead to missing audit trails.</li>
              <li><strong>Payload Corruption:</strong> Malformed API payloads bypassing server validation compromise document database schemas.</li>
              <li><strong>Session Interception:</strong> Weak token storage (e.g. localStorage) exposes authorization tokens to XSS attacks.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 3: SYSTEM REQUIREMENTS */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            03 // REQUIREMENTS
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Functional &amp; Non-Functional Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 border border-[#DCD3BE] bg-[#FAF7F0]">
              <h3 className="font-mono text-xs font-semibold text-[#14212B] uppercase mb-2">Functional Requirements</h3>
              <ul className="font-body text-xs text-[#4C5C66] space-y-2">
                <li>&bull; User authentication with encrypted session credentials.</li>
                <li>&bull; 4-tier Role-Based Access Control (SuperAdmin, Admin, Manager, Staff).</li>
                <li>&bull; Multi-category product catalog with Cloudinary image upload.</li>
                <li>&bull; Stock movement recording with atomic transaction history.</li>
              </ul>
            </div>

            <div className="p-5 border border-[#DCD3BE] bg-[#FAF7F0]">
              <h3 className="font-mono text-xs font-semibold text-[#14212B] uppercase mb-2">Non-Functional Requirements</h3>
              <ul className="font-body text-xs text-[#4C5C66] space-y-2">
                <li>&bull; Defensive input payload validation via Zod schemas.</li>
                <li>&bull; Secure token management using HTTP-only cookies.</li>
                <li>&bull; Structured application logging using Winston.</li>
                <li>&bull; Hardened HTTP response headers with Helmet.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: SYSTEM ARCHITECTURE DIAGRAM */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            04 // SYSTEM ARCHITECTURE
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Layered Architecture Overview</h2>
          
          {/* Blueprint Diagram Card */}
          <div className="border border-[#14212B] bg-[#F1EBDD]/70 p-6 space-y-6 relative overflow-hidden font-mono text-xs">
            <div className="flex justify-between items-center border-b border-[#DCD3BE] pb-2 text-[10px] text-[#4C5C66]">
              <span>SCHEMATIC // ARCH-01 LAYER MAP</span>
              <span>SUPPLYNEST BACKEND</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 border border-[#14212B] bg-[#FAF7F0]">
                <div className="font-semibold text-[#14212B] text-xs">01 / CLIENT LAYER</div>
                <div className="text-[10px] text-[#4C5C66]">React 19 + Vite</div>
              </div>
              <div className="p-3 border border-[#33546C] bg-[#33546C] text-[#FAF7F0]">
                <div className="font-semibold text-xs">02 / GATEWAY &amp; AUTH</div>
                <div className="text-[10px] text-[#E4C892]">Zod &bull; JWT &bull; Helmet</div>
              </div>
              <div className="p-3 border border-[#14212B] bg-[#FAF7F0]">
                <div className="font-semibold text-[#14212B] text-xs">03 / DOMAIN SERVICES</div>
                <div className="text-[10px] text-[#4C5C66]">Auth, Product, Stock</div>
              </div>
              <div className="p-3 border border-[#14212B] bg-[#14212B] text-[#FAF7F0]">
                <div className="font-semibold text-xs">04 / DATA STORE</div>
                <div className="text-[10px] text-[#DCD3BE]">MongoDB / Mongoose</div>
              </div>
            </div>

            <div className="p-3 border border-[#DCD3BE] bg-[#FAF7F0] text-[11px] text-[#4C5C66] text-center">
              Request Flow: HTTP Client &rarr; Helmet/RateLimiter &rarr; JWT Cookie Verify &rarr; RBAC Middleware &rarr; Zod Validator &rarr; Controller Logic &rarr; Mongoose ODM &rarr; MongoDB
            </div>
          </div>
        </section>

        {/* SECTION 5: BACKEND MODULE STRUCTURE */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            05 // BACKEND MODULE STRUCTURE
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Domain-Oriented Isolation</h2>
          <p className="font-body text-sm text-[#4C5C66] leading-relaxed">
            The backend is decoupled into independent domain folders. Each module encapsulates its routes, controllers, services, and validation schemas:
          </p>

          <div className="p-4 border border-[#14212B] bg-[#FAF7F0] font-mono text-xs space-y-2">
            <div className="text-[#33546C] font-semibold">src/modules/</div>
            <div className="pl-4 space-y-1 text-[#14212B]">
              <div>├── <strong>auth/</strong> &bull; Registration, login, cookie management, password hash controllers</div>
              <div>├── <strong>users/</strong> &bull; User profile management and permission assignment</div>
              <div>├── <strong>products/</strong> &bull; SKU catalog, category relationships, Cloudinary upload</div>
              <div>├── <strong>inventory/</strong> &bull; Branch stock counts, reorder alerts</div>
              <div>└── <strong>transactions/</strong> &bull; Atomic stock movement ledgers (INBOUND / OUTBOUND)</div>
            </div>
          </div>
        </section>

        {/* SECTION 6: AUTHENTICATION FLOW */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            06 // AUTHENTICATION FLOW
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">HTTP-Only Cookie Security</h2>
          <div className="font-body text-sm text-[#4C5C66] leading-relaxed space-y-3">
            <p>
              Authentication utilizes JSON Web Tokens (JWT) issued upon successful password validation via bcrypt. Rather than storing JWT tokens in client-side localStorage, tokens are transmitted exclusively inside <code>HTTP-only</code>, <code>SameSite=Strict</code> cookies to mitigate Cross-Site Scripting (XSS) token theft.
            </p>
          </div>
        </section>

        {/* SECTION 7: AUTHORIZATION / RBAC */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            07 // AUTHORIZATION / RBAC
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">4-Tier Role Permission Matrix</h2>
          
          <div className="border border-[#14212B] bg-[#FAF7F0] overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-[#14212B] bg-[#F1EBDD] text-[#14212B]">
                  <th className="p-3">ROLE</th>
                  <th className="p-3">PRODUCT CATALOG</th>
                  <th className="p-3">STOCK MOVEMENTS</th>
                  <th className="p-3">USER MANAGEMENT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCD3BE] text-[#4C5C66]">
                <tr>
                  <td className="p-3 font-semibold text-[#14212B]">SuperAdmin</td>
                  <td className="p-3 text-[#4C7A5B]">Full Control</td>
                  <td className="p-3 text-[#4C7A5B]">Full Control</td>
                  <td className="p-3 text-[#4C7A5B]">Manage All Roles</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#14212B]">Admin</td>
                  <td className="p-3 text-[#4C7A5B]">Create / Edit / Delete</td>
                  <td className="p-3 text-[#4C7A5B]">Record / Approve</td>
                  <td className="p-3 text-[#33546C]">Manage Staff</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#14212B]">Manager</td>
                  <td className="p-3 text-[#33546C]">Create / Edit</td>
                  <td className="p-3 text-[#4C7A5B]">Record / Approve</td>
                  <td className="p-3 text-[#8A9399]">Read Only</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#14212B]">Staff</td>
                  <td className="p-3 text-[#8A9399]">Read Only</td>
                  <td className="p-3 text-[#33546C]">Record Transfer</td>
                  <td className="p-3 text-[#8A9399]">No Access</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 8: INVENTORY & STOCK TRANSACTION FLOW */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            08 // INVENTORY &amp; STOCK TRANSACTIONS
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Transactional Audit Trail</h2>
          <p className="font-body text-sm text-[#4C5C66] leading-relaxed">
            Every inventory modification (restock, dispatch, return) generates an immutable transaction record storing product SKU, previous quantity, updated quantity, initiating user ID, and timestamp.
          </p>
        </section>

        {/* SECTION 9: DATABASE DESIGN */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            09 // DATABASE DESIGN
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Document Schemas in MongoDB</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 border border-[#DCD3BE] bg-[#F1EBDD]/60 space-y-1">
              <strong className="text-[#14212B] block">User Schema</strong>
              <div className="text-[11px] text-[#4C5C66]">name, email, passwordHash, role, status, createdAt</div>
            </div>
            <div className="p-4 border border-[#DCD3BE] bg-[#F1EBDD]/60 space-y-1">
              <strong className="text-[#14212B] block">Product Schema</strong>
              <div className="text-[11px] text-[#4C5C66]">sku, title, categoryId, price, quantity, imageUrl</div>
            </div>
            <div className="p-4 border border-[#DCD3BE] bg-[#F1EBDD]/60 space-y-1">
              <strong className="text-[#14212B] block">Transaction Schema</strong>
              <div className="text-[11px] text-[#4C5C66]">productId, userId, type (IN/OUT), delta, timestamp</div>
            </div>
          </div>
        </section>

        {/* SECTION 10: API DESIGN */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            10 // API DESIGN
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">RESTful Endpoint Conventions</h2>
          <div className="p-4 border border-[#14212B] bg-[#FAF7F0] font-mono text-xs space-y-2 text-[#4C5C66]">
            <div><span className="text-[#33546C] font-semibold">POST</span> /api/v1/auth/login &bull; User Session Auth</div>
            <div><span className="text-[#4C7A5B] font-semibold">GET</span> /api/v1/products &bull; Paginated Product Catalog</div>
            <div><span className="text-[#33546C] font-semibold">POST</span> /api/v1/products &bull; Create Product (Admin/Manager)</div>
            <div><span className="text-[#33546C] font-semibold">POST</span> /api/v1/stock/transactions &bull; Record Stock Movement</div>
          </div>
        </section>

        {/* SECTION 11: VALIDATION */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            11 // VALIDATION
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Zod Schema Enforcement</h2>
          <p className="font-body text-sm text-[#4C5C66] leading-relaxed">
            All HTTP request bodies, URL params, and query strings pass through Zod schemas before hitting controllers, returning standardized 400 Bad Request error payloads if validation fails.
          </p>
        </section>

        {/* SECTION 12: SECURITY DECISIONS */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            12 // SECURITY DECISIONS
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Hardening &amp; Defense-in-Depth</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-[#14212B]">
            <div className="p-3 border border-[#DCD3BE] bg-[#F1EBDD]/60">&bull; Helmet security HTTP headers</div>
            <div className="p-3 border border-[#DCD3BE] bg-[#F1EBDD]/60">&bull; Rate limiting against brute-force logins</div>
            <div className="p-3 border border-[#DCD3BE] bg-[#F1EBDD]/60">&bull; Bcrypt password hashing (salt factor 10)</div>
            <div className="p-3 border border-[#DCD3BE] bg-[#F1EBDD]/60">&bull; No token exposure in localStorage</div>
          </div>
        </section>

        {/* SECTION 13: LOGGING / OBSERVABILITY */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            13 // OBSERVABILITY
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Winston Structured Logging</h2>
          <p className="font-body text-sm text-[#4C5C66] leading-relaxed">
            Application logs are categorized into <code>error.log</code> and <code>combined.log</code> with JSON formatting, timestamps, and request context for production debugging.
          </p>
        </section>

        {/* SECTION 14 & 15: CHALLENGES & TRADE-OFFS */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            14 &amp; 15 // CHALLENGES &amp; ENGINEERING TRADE-OFFS
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Trade-off Decisions</h2>
          <div className="p-5 border border-[#14212B] bg-[#FAF7F0] space-y-3 font-body text-sm text-[#4C5C66] leading-relaxed">
            <p>
              <strong>Monolith vs Microservices:</strong> Chosen a domain-oriented modular monolith architecture over microservices to eliminate inter-service network overhead while maintaining clean code boundaries for early-stage development.
            </p>
            <p>
              <strong>NoSQL vs SQL:</strong> MongoDB document schemas were chosen for rapid iteration, using Mongoose schema validation to emulate strict relational constraints where needed.
            </p>
          </div>
        </section>

        {/* SECTION 16 & 17: LESSONS & FUTURE IMPROVEMENTS */}
        <section className="space-y-4 border-t border-[#DCD3BE] pt-8">
          <div className="font-mono text-xs font-semibold text-[#33546C] tracking-wider uppercase">
            16 &amp; 17 // LESSONS &amp; NEXT STEPS
          </div>
          <h2 className="font-display text-2xl font-bold text-[#14212B]">Retrospective &amp; Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body text-sm text-[#4C5C66]">
            <div className="p-5 border border-[#DCD3BE] bg-[#F1EBDD]/60 space-y-2">
              <strong className="font-mono text-xs text-[#14212B] block uppercase">What I Learned</strong>
              <p className="text-xs leading-relaxed">
                Structuring backend applications around domain boundaries early simplifies adding permission checks and schema validation without refactoring core routes later.
              </p>
            </div>

            <div className="p-5 border border-[#DCD3BE] bg-[#F1EBDD]/60 space-y-2">
              <strong className="font-mono text-xs text-[#14212B] block uppercase">Future Improvements</strong>
              <p className="text-xs leading-relaxed">
                Add Redis caching layer for product catalog queries and implement WebSocket notifications for real-time stock alert thresholds.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 18: REPOSITORY CTA */}
        <section className="border-t border-[#DCD3BE] pt-12 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-3xl font-bold text-[#14212B]">Inspect the Source Code</h2>
            <p className="font-mono text-xs text-[#4C5C66]">
              SupplyNest repository is available on GitHub for code review.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {isValidUrl(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#14212B] bg-[#14212B] hover:bg-[#33546C] text-[#FAF7F0] font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <GithubIcon className="w-4 h-4 text-[#E4C892]" />
                <span>Explore SupplyNest Repository</span>
              </a>
            )}

            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#14212B] bg-[#FAF7F0] hover:bg-[#F1EBDD] text-[#14212B] font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
            >
              <ArrowLeft className="w-4 h-4 text-[#B8863E]" />
              <span>Back to Portfolio Home</span>
            </Link>
          </div>
        </section>

      </div>
    </article>
  );
};
