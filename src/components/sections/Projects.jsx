import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Database, Layers, FileCode, RefreshCw, CheckCircle2, AlertTriangle, ShoppingBag, Truck, Store, UserCheck } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { GithubIcon } from '../common/Icons';
import { isValidUrl } from '../../config/site.config';

export const Projects = () => {
  const supplyNest = projectsData.find(p => p.slug === 'supplynest') || projectsData[0];
  const edgeSync = projectsData.find(p => p.slug === 'edgesync') || projectsData[1];
  const novexa = projectsData.find(p => p.slug === 'novexa') || projectsData[2];

  return (
    <section 
      id="projects" 
      className="py-16 lg:py-24 border-t border-[#DCD3BE] bg-[#FAF7F0] relative overflow-hidden"
      aria-label="Selected Work Section"
    >
      {/* Background Blueprint Grid Line Overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#DCD3BE] gap-4">
          <div className="space-y-2">
            <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
              <span className="text-[#8A9399]">03 //</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14212B] tracking-tight">
              Featured Systems &amp; Projects
            </h2>
          </div>

          <div className="font-mono text-[11px] text-[#4C5C66] bg-[#F1EBDD] px-3 py-1.5 border border-[#DCD3BE] self-start md:self-auto">
            SHOWCASE // DOMAIN ARCHITECTURE &amp; FULL-STACK
          </div>
        </div>

        {/* Projects Stack */}
        <div className="space-y-16">
          
          {/* ========================================================================= */}
          {/* PROJECT 01: SUPPLYNEST */}
          {/* ========================================================================= */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-2 border-[#14212B] bg-[#FAF7F0] p-6 sm:p-8 lg:p-10 shadow-md relative"
          >
            {/* Top Project Tag Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DCD3BE] pb-4 mb-8 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#14212B] text-[#FAF7F0] font-bold tracking-widest uppercase">
                  PROJECT / 01
                </span>
                <span className="font-semibold text-[#B8863E]">FEATURED SYSTEM ARCHITECTURE</span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#4C5C66]">
                <span className="w-2 h-2 rounded-full bg-[#4C7A5B]" />
                <span>DOMAIN-DRIVEN BACKEND</span>
                <span className="text-[#8A9399] ml-2">CONF // ENTERPRISE-ORIENTED</span>
              </div>
            </div>

            {/* Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="font-mono text-xs font-semibold text-[#33546C] uppercase tracking-wider mb-1">
                    {supplyNest.subtitle}
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#14212B] tracking-tight">
                    {supplyNest.name}
                  </h3>
                  <p className="font-mono text-xs text-[#B8863E] font-medium mt-1">
                    {supplyNest.tagline}
                  </p>
                </div>

                <div className="space-y-3 font-body text-sm sm:text-base text-[#4C5C66] leading-relaxed">
                  <p>
                    <strong className="font-semibold text-[#14212B]">The Challenge:</strong> Distribution logistics require granular permission hierarchies, strict stock transaction auditability, and isolated domain boundaries to prevent unauthorized inventory state mutations and data corruption.
                  </p>
                  <p>
                    <strong className="font-semibold text-[#14212B]">Engineering Solution:</strong> Architected a domain-oriented modular backend in Node.js/Express, decoupling business logic across five isolated modules: Authentication, Inventory Management, Product Catalog, Role Authorization (RBAC), and Stock Transactions.
                  </p>
                </div>

                <div className="space-y-3 border-t border-b border-[#DCD3BE] py-4 my-4">
                  <span className="font-mono text-xs font-semibold text-[#14212B] uppercase tracking-wider block">
                    KEY ARCHITECTURAL CAPABILITIES
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-[#14212B]">
                    <div className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/60 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#33546C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#14212B]">Defense-in-Depth Auth</strong>
                        <span className="text-[11px] text-[#4C5C66]">JWT in HTTP-only cookies, bcrypt, rate limiting &amp; Helmet.</span>
                      </div>
                    </div>

                    <div className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/60 flex items-start gap-2">
                      <Layers className="w-4 h-4 text-[#B8863E] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#14212B]">4-Tier RBAC Engine</strong>
                        <span className="text-[11px] text-[#4C5C66]">SuperAdmin, Admin, Manager, and Staff permission scopes.</span>
                      </div>
                    </div>

                    <div className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/60 flex items-start gap-2">
                      <Database className="w-4 h-4 text-[#4C7A5B] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#14212B]">Atomic Stock Ledger</strong>
                        <span className="text-[11px] text-[#4C5C66]">Transactional stock movements with immutable audit records.</span>
                      </div>
                    </div>

                    <div className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/60 flex items-start gap-2">
                      <FileCode className="w-4 h-4 text-[#33546C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#14212B]">Zod &amp; Winston Stack</strong>
                        <span className="text-[11px] text-[#4C5C66]">Rigorous input schema validation &amp; structured logging.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-[#8A9399] tracking-wider uppercase block">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {supplyNest.stack.map(tech => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 border border-[#14212B] bg-[#F1EBDD] text-[#14212B] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to={supplyNest.caseStudyUrl}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#14212B] bg-[#14212B] hover:bg-[#33546C] text-[#FAF7F0] font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 text-[#E4C892]" />
                  </Link>

                  {isValidUrl(supplyNest.github) && (
                    <a
                      href={supplyNest.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#14212B] bg-[#FAF7F0] hover:bg-[#F1EBDD] text-[#14212B] font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Repository</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="border border-[#14212B] bg-[#F1EBDD]/80 p-5 relative overflow-hidden shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#DCD3BE] pb-3 mb-4 font-mono text-[10px] text-[#4C5C66]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#4C7A5B] inline-block" />
                      <span className="font-semibold text-[#14212B]">DOMAINS // BACKEND MODULE MAP</span>
                    </div>
                    <span>SUPPLYNEST_V1</span>
                  </div>

                  <div className="absolute inset-0 bg-blueprint-grid-dense opacity-25 pointer-events-none" />

                  <div className="space-y-3 relative z-10 font-mono text-xs">
                    <div className="p-3 border border-[#DCD3BE] bg-[#FAF7F0]">
                      <div className="flex items-center justify-between font-semibold text-[#14212B] mb-1">
                        <span>01 / AUTHENTICATION MODULE</span>
                        <span className="text-[10px] text-[#33546C]">COOKIE JWT</span>
                      </div>
                      <p className="text-[11px] text-[#4C5C66]">
                        Handles user sessions, cookie tokens, password hashing, and token invalidation.
                      </p>
                    </div>

                    <div className="p-3 border border-[#33546C] bg-[#FAF7F0]">
                      <div className="flex items-center justify-between font-semibold text-[#14212B] mb-1">
                        <span>02 / RBAC AUTHORIZATION</span>
                        <span className="text-[10px] text-[#B8863E]">4-TIER ROLES</span>
                      </div>
                      <p className="text-[11px] text-[#4C5C66]">
                        Middleware mapping permissions across SuperAdmin, Admin, Manager, and Staff.
                      </p>
                    </div>

                    <div className="p-3 border border-[#DCD3BE] bg-[#FAF7F0]">
                      <div className="flex items-center justify-between font-semibold text-[#14212B] mb-1">
                        <span>03 / PRODUCT &amp; INVENTORY</span>
                        <span className="text-[10px] text-[#4C7A5B]">CLOUDINARY</span>
                      </div>
                      <p className="text-[11px] text-[#4C5C66]">
                        Product catalogs, categories, SKU tracking, and image asset pipeline.
                      </p>
                    </div>

                    <div className="p-3 border border-[#14212B] bg-[#14212B] text-[#FAF7F0]">
                      <div className="flex items-center justify-between font-semibold text-[#FAF7F0] mb-1">
                        <span>04 / STOCK LEDGER &amp; AUDIT</span>
                        <span className="text-[10px] text-[#E4C892]">TRANSACTIONAL</span>
                      </div>
                      <p className="text-[11px] text-[#DCD3BE]">
                        Records inbound/outbound stock transfers with timestamped audit trail.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#DCD3BE] flex items-center justify-between font-mono text-[9px] text-[#8A9399]">
                    <span>STATUS // MODULE ISOLATION ENFORCED</span>
                    <span>WINSTON LOGGING</span>
                  </div>
                </div>

                <div className="p-3 border border-[#DCD3BE] bg-[#FAF7F0] font-mono text-[11px] text-[#4C5C66] leading-relaxed">
                  <span className="font-semibold text-[#14212B] block mb-0.5">ARCHITECTURAL NOTE:</span>
                  Designed with domain-driven separation of concerns. All input payloads pass Zod schema validation before reaching controller handlers.
                </div>
              </div>

            </div>
          </motion.article>


          {/* ========================================================================= */}
          {/* PROJECT 02: EDGESYNC */}
          {/* ========================================================================= */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-[#14212B] bg-[#FAF7F0] p-6 sm:p-8 lg:p-10 shadow-xs relative"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DCD3BE] pb-4 mb-8 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#33546C] text-[#FAF7F0] font-bold tracking-widest uppercase">
                  PROJECT / 02
                </span>
                <span className="font-semibold text-[#33546C]">DISTRIBUTED SYSTEMS PROTOTYPE</span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#4C5C66]">
                <span className="w-2 h-2 rounded-full bg-[#B8863E]" />
                <span>CONCEPT &amp; EXPERIMENTATION</span>
                <span className="text-[#8A9399] ml-2">STATUS // ARCHITECTURAL PROTOTYPE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
                <div className="border border-[#14212B] bg-[#F1EBDD]/90 p-5 relative overflow-hidden shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#DCD3BE] pb-3 mb-4 font-mono text-[10px] text-[#4C5C66]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#33546C] inline-block" />
                      <span className="font-semibold text-[#14212B]">SCHEMATIC // FAILOVER &amp; ROUTING</span>
                    </div>
                    <span>EDGESYNC_NET</span>
                  </div>

                  <div className="absolute inset-0 bg-blueprint-grid-dense opacity-20 pointer-events-none" />

                  <div className="space-y-3 relative z-10 font-mono text-xs">
                    <div className="p-3 border border-[#14212B] bg-[#14212B] text-[#FAF7F0] flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-[#FAF7F0]">ENTRY ROUTER / GATEWAY</div>
                        <div className="text-[10px] text-[#8A9399]">REQUEST INGEST &bull; HEALTH ROUTING</div>
                      </div>
                      <span className="text-[10px] font-mono text-[#E4C892] bg-[#33546C] px-1.5 py-0.5">
                        INGRESS
                      </span>
                    </div>

                    <div className="flex justify-between items-center px-4 font-mono text-[9px] text-[#4C5C66]">
                      <span>&darr; Primary Path</span>
                      <span className="px-1.5 py-0.5 bg-[#FAF7F0] border border-[#DCD3BE] text-[#B8863E]">
                        HEARTBEAT POLLING
                      </span>
                      <span>&darr; Failover</span>
                    </div>

                    <div className="p-3 border border-[#4C7A5B] bg-[#FAF7F0]">
                      <div className="flex items-center justify-between font-semibold text-[#14212B] mb-1">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4C7A5B]" />
                          NODE A (EU-WEST EDGE)
                        </span>
                        <span className="text-[10px] text-[#4C7A5B] bg-[#F1EBDD] px-1 border border-[#4C7A5B]/30">
                          PRIMARY // HEALTHY
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4C5C66]">
                        Routes client request with internal server token verification.
                      </p>
                    </div>

                    <div className="p-3 border border-[#B8863E] bg-[#FAF7F0]">
                      <div className="flex items-center justify-between font-semibold text-[#14212B] mb-1">
                        <span className="flex items-center gap-1.5">
                          <RefreshCw className="w-3.5 h-3.5 text-[#B8863E]" />
                          NODE B (US-EAST FALLBACK)
                        </span>
                        <span className="text-[10px] text-[#B8863E] bg-[#F1EBDD] px-1 border border-[#B8863E]/30">
                          STANDBY // RETRY READY
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4C5C66]">
                        Receives rerouted payload if Primary Node experiences simulated latency/outage.
                      </p>
                    </div>

                    <div className="p-2.5 border border-[#8A9399] bg-[#F1EBDD]/40 text-[#8A9399] opacity-75">
                      <div className="flex items-center justify-between text-[11px] font-semibold mb-0.5">
                        <span className="flex items-center gap-1.5">
                          <AlertTriangle className="w-3 h-3 text-[#8A9399]" />
                          NODE C (SIMULATED DOWNTIME)
                        </span>
                        <span className="text-[9px]">DROPPED // RETRIED</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#DCD3BE] flex items-center justify-between font-mono text-[9px] text-[#8A9399]">
                    <span>AUTH // INTER-NODE TOKEN HEADERS</span>
                    <span>EXP // PROTOTYPE</span>
                  </div>
                </div>

                <div className="p-3 border border-[#DCD3BE] bg-[#FAF7F0] font-mono text-[11px] text-[#4C5C66] leading-relaxed">
                  <span className="font-semibold text-[#14212B] block mb-0.5">DISCLOSURE:</span>
                  This is an experimental architectural prototype built to investigate failure handling and HTTP routing mechanics, not a production-deployed global CDN.
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div>
                  <div className="font-mono text-xs font-semibold text-[#33546C] uppercase tracking-wider mb-1">
                    {edgeSync.subtitle}
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#14212B] tracking-tight">
                    {edgeSync.name}
                  </h3>
                  <p className="font-mono text-xs text-[#33546C] font-medium mt-1">
                    {edgeSync.tagline}
                  </p>
                </div>

                <div className="space-y-3 font-body text-sm sm:text-base text-[#4C5C66] leading-relaxed">
                  <p>
                    <strong className="font-semibold text-[#14212B]">The Engineering Question:</strong> How do distributed routing proxies evaluate upstream server health, handle unexpected node downtime, and maintain inter-node security without dropping incoming client requests?
                  </p>
                  <p>
                    <strong className="font-semibold text-[#14212B]">Architectural Prototype:</strong> Developed a multi-node HTTP routing experiment in Node.js/Express simulating geographically separated server nodes, automated health-checking heartbeats, and failover retry handling.
                  </p>
                </div>

                <div className="space-y-3 border-t border-b border-[#DCD3BE] py-4 my-4">
                  <span className="font-mono text-xs font-semibold text-[#14212B] uppercase tracking-wider block">
                    EXPLORATION HIGHLIGHTS &amp; MECHANICS
                  </span>
                  
                  <div className="space-y-2 font-mono text-xs text-[#14212B]">
                    {edgeSync.highlights.map((item, idx) => (
                      <div key={idx} className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/50 flex items-start gap-2.5">
                        <span className="text-[#33546C] font-bold text-[11px] shrink-0 mt-0.5">
                          0{idx + 1} /
                        </span>
                        <div>
                          <strong className="block text-[#14212B]">{item.title}</strong>
                          <span className="text-[11px] text-[#4C5C66]">{item.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-[#8A9399] tracking-wider uppercase block">
                    TECHNOLOGIES &amp; CONCEPTS
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {edgeSync.stack.map(tech => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 border border-[#DCD3BE] bg-[#F1EBDD] text-[#14212B] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  {isValidUrl(edgeSync.github) && (
                    <a
                      href={edgeSync.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#14212B] bg-[#14212B] hover:bg-[#33546C] text-[#FAF7F0] font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
                    >
                      <GithubIcon className="w-4 h-4 text-[#E4C892]" />
                      <span>View Repository</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </motion.article>


          {/* ========================================================================= */}
          {/* PROJECT 03: NOVEXA */}
          {/* ========================================================================= */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-[#14212B] bg-[#FAF7F0] p-6 sm:p-8 lg:p-10 shadow-xs relative"
          >
            {/* Top Project Tag Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DCD3BE] pb-4 mb-8 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#4C7A5B] text-[#FAF7F0] font-bold tracking-widest uppercase">
                  PROJECT / 03
                </span>
                <span className="font-semibold text-[#4C7A5B]">MULTI-VENDOR COMMERCE ENGINE</span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#4C5C66]">
                <span className="w-2 h-2 rounded-full bg-[#33546C]" />
                <span>QUAD-ROLE BUSINESS DOMAINS</span>
                <span className="text-[#8A9399] ml-2">ARCH // MULTI-ACTOR</span>
              </div>
            </div>

            {/* Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Details & Narrative */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <div className="font-mono text-xs font-semibold text-[#4C7A5B] uppercase tracking-wider mb-1">
                    {novexa.subtitle}
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#14212B] tracking-tight">
                    {novexa.name}
                  </h3>
                  <p className="font-mono text-xs text-[#4C7A5B] font-medium mt-1">
                    {novexa.tagline}
                  </p>
                </div>

                {/* Problem, Domain Complexity & Engineering Approach */}
                <div className="space-y-3 font-body text-sm sm:text-base text-[#4C5C66] leading-relaxed">
                  <p>
                    <strong className="font-semibold text-[#14212B]">Domain Complexity:</strong> Rather than a single-store CRUD catalog, Novexa handles intersecting workflows across four distinct actors—Customers, Sellers, Fulfillment Drivers, and System Administrators.
                  </p>
                  <p>
                    <strong className="font-semibold text-[#14212B]">Engineering Approach:</strong> Structured normalized Mongoose document relationships linking multi-vendor product inventories, dynamic cart state calculations, order state transitions, and role-restricted API authorizations.
                  </p>
                </div>

                {/* Quad-Role Workflows Grid */}
                <div className="space-y-3 border-t border-b border-[#DCD3BE] py-4 my-4">
                  <span className="font-mono text-xs font-semibold text-[#14212B] uppercase tracking-wider block">
                    INTERACTING BUSINESS ROLE WORKFLOWS
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-[#14212B]">
                    <div className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/60 flex items-start gap-2.5">
                      <ShoppingBag className="w-4 h-4 text-[#33546C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#14212B]">Customer Domain</strong>
                        <span className="text-[11px] text-[#4C5C66]">Multi-store browsing, cart state calculations &amp; checkout.</span>
                      </div>
                    </div>

                    <div className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/60 flex items-start gap-2.5">
                      <Store className="w-4 h-4 text-[#B8863E] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#14212B]">Seller Operations</strong>
                        <span className="text-[11px] text-[#4C5C66]">Store inventory management &amp; order dispatch pipeline.</span>
                      </div>
                    </div>

                    <div className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/60 flex items-start gap-2.5">
                      <Truck className="w-4 h-4 text-[#4C7A5B] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#14212B]">Driver Dispatch</strong>
                        <span className="text-[11px] text-[#4C5C66]">Fulfillment tracking &amp; delivery state confirmation.</span>
                      </div>
                    </div>

                    <div className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/60 flex items-start gap-2.5">
                      <UserCheck className="w-4 h-4 text-[#33546C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#14212B]">Admin Moderation</strong>
                        <span className="text-[11px] text-[#4C5C66]">Vendor verification, platform analytics &amp; user governance.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-[#8A9399] tracking-wider uppercase block">
                    CORE STACK &amp; MEDIA PIPELINE
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {novexa.stack.map(tech => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 border border-[#14212B] bg-[#F1EBDD] text-[#14212B] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  {isValidUrl(novexa.github) && (
                    <a
                      href={novexa.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#14212B] bg-[#14212B] hover:bg-[#33546C] text-[#FAF7F0] font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
                    >
                      <GithubIcon className="w-4 h-4 text-[#E4C892]" />
                      <span>View Repository</span>
                    </a>
                  )}
                </div>

              </div>

              {/* Right Schematic Visual: Quad-Role Workflow Diagram */}
              <div className="lg:col-span-5 space-y-4">
                <div className="border border-[#14212B] bg-[#F1EBDD]/80 p-5 relative overflow-hidden shadow-xs">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-[#DCD3BE] pb-3 mb-4 font-mono text-[10px] text-[#4C5C66]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#4C7A5B] inline-block" />
                      <span className="font-semibold text-[#14212B]">WORKFLOWS // MULTI-ROLE DISPATCH</span>
                    </div>
                    <span>NOVEXA_V1</span>
                  </div>

                  <div className="absolute inset-0 bg-blueprint-grid-dense opacity-20 pointer-events-none" />

                  {/* Quad-Role Nodes Map */}
                  <div className="space-y-3 relative z-10 font-mono text-xs">
                    
                    <div className="p-3 border border-[#DCD3BE] bg-[#FAF7F0]">
                      <div className="flex items-center justify-between font-semibold text-[#14212B] mb-1">
                        <span>01 / CUSTOMER API</span>
                        <span className="text-[10px] text-[#33546C]">CART &bull; CHECKOUT</span>
                      </div>
                      <p className="text-[11px] text-[#4C5C66]">
                        Product browsing, atomic cart operations, and order placement.
                      </p>
                    </div>

                    <div className="p-3 border border-[#B8863E] bg-[#FAF7F0]">
                      <div className="flex items-center justify-between font-semibold text-[#14212B] mb-1">
                        <span>02 / SELLER ENGINE</span>
                        <span className="text-[10px] text-[#B8863E]">INVENTORY &bull; DISPATCH</span>
                      </div>
                      <p className="text-[11px] text-[#4C5C66]">
                        Vendor product uploads via Cloudinary and order fulfillment requests.
                      </p>
                    </div>

                    <div className="p-3 border border-[#4C7A5B] bg-[#FAF7F0]">
                      <div className="flex items-center justify-between font-semibold text-[#14212B] mb-1">
                        <span>03 / DRIVER DISPATCH</span>
                        <span className="text-[10px] text-[#4C7A5B]">FULFILLMENT TRACKING</span>
                      </div>
                      <p className="text-[11px] text-[#4C5C66]">
                        Order assignment, route tracking, and final delivery confirmations.
                      </p>
                    </div>

                    <div className="p-3 border border-[#14212B] bg-[#14212B] text-[#FAF7F0]">
                      <div className="flex items-center justify-between font-semibold text-[#FAF7F0] mb-1">
                        <span>04 / ADMIN GOVERNANCE</span>
                        <span className="text-[10px] text-[#E4C892]">PLATFORM AUDIT</span>
                      </div>
                      <p className="text-[11px] text-[#DCD3BE]">
                        System-wide moderation, store verification, and transactional analytics.
                      </p>
                    </div>

                  </div>

                  {/* Card Footer */}
                  <div className="mt-4 pt-3 border-t border-[#DCD3BE] flex items-center justify-between font-mono text-[9px] text-[#8A9399]">
                    <span>MODELS // MONGOOSE RELATIONAL</span>
                    <span>JWT PROTECTED</span>
                  </div>

                </div>

                <div className="p-3 border border-[#DCD3BE] bg-[#FAF7F0] font-mono text-[11px] text-[#4C5C66] leading-relaxed">
                  <span className="font-semibold text-[#14212B] block mb-0.5">ARCHITECTURAL FOCUS:</span>
                  Demonstrates the ability to structure software handling multi-actor business domains and relational data modeling in MongoDB.
                </div>
              </div>

            </div>
          </motion.article>

        </div>

        {/* Section Closing CTA Banner */}
        <div className="mt-16 pt-8 border-t border-[#DCD3BE] flex flex-col sm:flex-row items-center justify-between gap-6 p-6 border border-[#14212B] bg-[#F1EBDD]/60">
          <div className="space-y-1">
            <span className="font-mono text-xs font-semibold text-[#B8863E] uppercase tracking-wider block">
              DEEP-DIVE CASE STUDY AVAILABLE
            </span>
            <p className="font-body text-sm text-[#14212B]">
              Inspect the comprehensive architecture design, security decisions, and database schemas for <strong>SupplyNest</strong>.
            </p>
          </div>

          <Link
            to="/projects/supplynest"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#14212B] bg-[#14212B] hover:bg-[#33546C] text-[#FAF7F0] font-mono text-xs font-semibold uppercase tracking-wider shrink-0 transition-colors shadow-xs"
          >
            <span>Read SupplyNest Case Study</span>
            <ArrowRight className="w-4 h-4 text-[#E4C892]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
