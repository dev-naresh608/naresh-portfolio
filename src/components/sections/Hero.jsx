import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowDown, Mail, ExternalLink, ShieldCheck, Database, Server, Cpu, Activity } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-5rem)] flex items-center pt-8 pb-16 lg:py-20 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Blueprint Grid Highlight */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      {/* Decorative Technical Drafting Axis Lines */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-[#DCD3BE]/60 hidden sm:block pointer-events-none">
        <span className="absolute top-12 -left-2 font-mono text-[9px] text-[#8A9399] -rotate-90">AXIS // X-01</span>
      </div>
      <div className="absolute right-4 sm:right-8 top-0 bottom-0 w-px bg-[#DCD3BE]/60 hidden sm:block pointer-events-none">
        <span className="absolute bottom-12 -right-2 font-mono text-[9px] text-[#8A9399] rotate-90">REF // Y-08</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Technical Positioning & Core CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Availability / Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#DCD3BE] bg-[#F1EBDD]/80 backdrop-blur-xs rounded-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4C7A5B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4C7A5B]" />
              </span>
              <span className="font-mono text-[11px] font-medium tracking-wider text-[#14212B] uppercase">
                {profileData.availability}
              </span>
            </motion.div>

            {/* Headline Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
                <span className="inline-block w-4 h-px bg-[#B8863E]" />
                {profileData.name} &bull; {profileData.role}
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14212B] leading-[1.12] tracking-tight text-balance">
                Software Engineer <br />
                <span className="italic font-normal text-[#33546C]">building reliable</span> full-stack systems.
              </h1>
            </motion.div>

            {/* Supporting Positioning Copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="font-body text-base sm:text-lg text-[#4C5C66] leading-relaxed">
                I build full-stack web applications with a focus on backend architecture, resilient REST APIs, data modeling, security standards, and domain-driven system design.
              </p>

              {/* Engineering Highlights Annotation Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-[11px] text-[#14212B]">
                <div className="p-2 border border-[#DCD3BE] bg-[#F1EBDD]/40 rounded-xs">
                  <span className="text-[#8A9399] block text-[9px] uppercase">ARCH</span>
                  Domain Modular
                </div>
                <div className="p-2 border border-[#DCD3BE] bg-[#F1EBDD]/40 rounded-xs">
                  <span className="text-[#8A9399] block text-[9px] uppercase">SECURITY</span>
                  JWT &amp; RBAC
                </div>
                <div className="p-2 border border-[#DCD3BE] bg-[#F1EBDD]/40 rounded-xs">
                  <span className="text-[#8A9399] block text-[9px] uppercase">APIS</span>
                  REST &amp; Schema
                </div>
                <div className="p-2 border border-[#DCD3BE] bg-[#F1EBDD]/40 rounded-xs">
                  <span className="text-[#8A9399] block text-[9px] uppercase">DATA</span>
                  NoSQL Modeling
                </div>
              </div>
            </motion.div>

            {/* Call to Actions & Social Channels */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#14212B] bg-[#14212B] hover:bg-[#33546C] text-[#FAF7F0] font-mono text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-[#E4C892]" />
              </a>

              {/* Secondary CTA */}
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#14212B] bg-[#FAF7F0] hover:bg-[#F1EBDD] text-[#14212B] font-mono text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
              >
                <FileText className="w-4 h-4 text-[#B8863E]" />
                <span>Download Resume</span>
              </a>

              {/* Social Channels Divider */}
              <div className="h-8 w-px bg-[#DCD3BE] hidden sm:block mx-1" />

              {/* Icon Links */}
              <div className="flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/60 hover:border-[#14212B] text-[#14212B] transition-colors rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/60 hover:border-[#14212B] text-[#33546C] transition-colors rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/60 hover:border-[#14212B] text-[#14212B] transition-colors rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

            </motion.div>

          </div>

          {/* Right Column: Architectural Blueprint Diagrammatic Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Drafting Card Container */}
            <div className="border border-[#14212B] bg-[#FAF7F0] p-5 sm:p-6 shadow-md relative overflow-hidden">
              
              {/* Technical Drawing Header Bar */}
              <div className="flex items-center justify-between border-b border-[#DCD3BE] pb-3 mb-5 font-mono text-[10px] text-[#4C5C66]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#B8863E] inline-block" />
                  <span className="font-semibold text-[#14212B]">SCHEMATIC // SYS-ARCH-01</span>
                </div>
                <span>SCALE: 1:1</span>
              </div>

              {/* Blueprint Dense Grid */}
              <div className="absolute inset-x-0 top-12 bottom-0 bg-blueprint-grid-dense opacity-20 pointer-events-none" />

              {/* Interactive Technical Nodes Schematic */}
              <div className="space-y-4 relative z-10">

                {/* Node 1: Client Gateway / HTTPS Protocol */}
                <div className="border border-[#DCD3BE] bg-[#F1EBDD]/90 p-3 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-[#FAF7F0] border border-[#14212B] flex items-center justify-center text-[#14212B]">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#14212B]">CLIENT / REQ GATEWAY</div>
                      <div className="text-[10px] text-[#4C5C66]">PROTOCOL // HTTPS REST</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-[#4C7A5B] bg-[#FAF7F0] px-1.5 py-0.5 border border-[#4C7A5B]/30">
                    200 OK
                  </span>
                </div>

                {/* Connecting Vector Line 1 */}
                <div className="flex justify-center -my-2 relative">
                  <div className="h-6 w-px bg-dashed border-l border-dashed border-[#14212B]/40" />
                  <span className="absolute top-1 font-mono text-[8px] text-[#8A9399] bg-[#FAF7F0] px-1">
                    ZOD SCHEMA
                  </span>
                </div>

                {/* Node 2: API Security & Role RBAC Engine */}
                <div className="border border-[#33546C] bg-[#FAF7F0] p-3 flex items-center justify-between font-mono text-xs shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-[#33546C] text-[#FAF7F0] flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#14212B]">AUTH &amp; SECURITY ENGINE</div>
                      <div className="text-[10px] text-[#4C5C66]">JWT COOKIE // HELMET &bull; RBAC</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#33546C] bg-[#F1EBDD] px-1.5 py-0.5 border border-[#33546C]/30">
                    ENFORCED
                  </span>
                </div>

                {/* Connecting Vector Line 2 */}
                <div className="flex justify-center -my-2 relative">
                  <div className="h-6 w-px border-l border-dashed border-[#14212B]/40" />
                  <span className="absolute top-1 font-mono text-[8px] text-[#8A9399] bg-[#FAF7F0] px-1">
                    CONTROLLER / LOGIC
                  </span>
                </div>

                {/* Node 3: Backend Domain Services */}
                <div className="border border-[#DCD3BE] bg-[#F1EBDD]/90 p-3 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-[#FAF7F0] border border-[#14212B] flex items-center justify-center text-[#14212B]">
                      <Server className="w-3.5 h-3.5 text-[#B8863E]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#14212B]">DOMAIN MODULES</div>
                      <div className="text-[10px] text-[#4C5C66]">INVENTORY &bull; ORDERS &bull; AUDIT</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#B8863E] bg-[#FAF7F0] px-1.5 py-0.5 border border-[#B8863E]/30">
                    WINSTON LOG
                  </span>
                </div>

                {/* Connecting Vector Line 3 */}
                <div className="flex justify-center -my-2 relative">
                  <div className="h-6 w-px border-l border-dashed border-[#14212B]/40" />
                  <span className="absolute top-1 font-mono text-[8px] text-[#8A9399] bg-[#FAF7F0] px-1">
                    MONGOOSE ODM
                  </span>
                </div>

                {/* Node 4: Persistence / Mongo DB Store */}
                <div className="border border-[#14212B] bg-[#14212B] text-[#FAF7F0] p-3 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-[#FAF7F0] text-[#14212B] flex items-center justify-center">
                      <Database className="w-3.5 h-3.5 text-[#33546C]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#FAF7F0]">DOCUMENT DATASTORE</div>
                      <div className="text-[10px] text-[#8A9399]">MONGODB // ATOMIC TRANSACTIONS</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#E4C892] bg-[#33546C] px-1.5 py-0.5">
                    PERSISTED
                  </span>
                </div>

              </div>

              {/* Diagram Footer Annotations */}
              <div className="mt-5 pt-3 border-t border-[#DCD3BE] flex items-center justify-between font-mono text-[9px] text-[#8A9399]">
                <span>CONF // HIGH-RELIABILITY ARCHITECTURE</span>
                <span>REV // 2026.08</span>
              </div>

            </div>

            {/* Subtle Blueprint Dimension Ticks */}
            <div className="absolute -bottom-3 left-4 right-4 flex justify-between font-mono text-[9px] text-[#8A9399]">
              <span>|&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; 420px &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;|</span>
              <span>NODE_COUNT: 04</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
