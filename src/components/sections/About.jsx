import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, Database, Layers, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';

export const About = () => {
  const engineeringPillars = [
    {
      code: "SYS-01",
      title: "Backend Architecture & APIs",
      description: "Designing modular REST APIs with strict domain boundaries, defensive parameter validation, and clear error handling contracts.",
      icon: Terminal,
      accentColor: "border-[#33546C] text-[#33546C]"
    },
    {
      code: "SYS-02",
      title: "Auth & Security Primitives",
      description: "Implementing defense-in-depth patterns using HTTP-only JWT cookies, bcrypt password hashing, granular RBAC, and rate limiting.",
      icon: Shield,
      accentColor: "border-[#B8863E] text-[#B8863E]"
    },
    {
      code: "SYS-03",
      title: "Data Modeling & Reliability",
      description: "Structuring document schemas in MongoDB/Mongoose with normalized relationships, atomic transaction logs, and Winston observability.",
      icon: Database,
      accentColor: "border-[#4C7A5B] text-[#4C7A5B]"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-16 lg:py-24 border-t border-[#DCD3BE] bg-[#FAF7F0] relative overflow-hidden"
      aria-label="About Section"
    >
      {/* Subtle Blueprint grid background line overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#DCD3BE] gap-4">
          <div className="space-y-2">
            <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
              <span className="text-[#8A9399]">01 //</span>
              <span>ENGINEERING MINDSET</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14212B] tracking-tight">
              About &amp; Technical Approach
            </h2>
          </div>

          <div className="font-mono text-[11px] text-[#4C5C66] bg-[#F1EBDD] px-3 py-1.5 border border-[#DCD3BE] self-start md:self-auto">
            FOCUS // FULL-STACK &amp; BACKEND ARCHITECTURE
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Concise Narrative (approx 120 words) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="font-display text-xl sm:text-2xl font-semibold text-[#14212B] leading-snug">
              I view software engineering as a discipline of structure, predictable boundaries, and clear trade-offs.
            </div>

            <div className="space-y-4 font-body text-base text-[#4C5C66] leading-relaxed">
              <p>
                Having developed full-stack applications with React, Node.js, Express, and MongoDB, my engineering curiosity centers on how data flows securely across distributed modules and RESTful interfaces.
              </p>
              <p>
                Rather than assembling quick feature prototypes, I prioritize schema validation, role-based access control (RBAC), HTTP security standards, and application logging. I am motivated by building software that remains maintainable under evolving requirements and failure conditions.
              </p>
            </div>

            {/* Quick Spec Metadata Box */}
            <div className="pt-2">
              <div className="p-4 border border-[#14212B] bg-[#F1EBDD]/60 space-y-3 font-mono text-xs text-[#14212B]">
                <div className="flex items-center justify-between border-b border-[#DCD3BE] pb-2 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#33546C]" />
                    TECHNICAL FOCUS AREAS
                  </span>
                  <span className="text-[10px] text-[#8A9399]">STATUS // ACTIVE</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#4C5C66]">
                  <div>&bull; Backend Architecture</div>
                  <div>&bull; API Design &amp; Zod</div>
                  <div>&bull; JWT &amp; Cookie Security</div>
                  <div>&bull; MongoDB Data Modeling</div>
                  <div>&bull; RBAC Permission Systems</div>
                  <div>&bull; Application Observability</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Pillars Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="font-mono text-xs text-[#8A9399] tracking-wider uppercase mb-2">
              CORE SYSTEM PRIORITIES
            </div>

            <div className="space-y-4">
              {engineeringPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.code}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 border border-[#DCD3BE] bg-[#FAF7F0] hover:border-[#14212B] transition-colors relative group"
                  >
                    {/* Top Blueprint Tag */}
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#8A9399] pb-2 border-b border-[#F1EBDD] mb-3">
                      <span className="font-semibold text-[#14212B]">{pillar.code}</span>
                      <span className="group-hover:text-[#B8863E] transition-colors">SPEC // 0{idx + 1}</span>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className={`p-2 border bg-[#F1EBDD] shrink-0 mt-0.5 ${pillar.accentColor}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-mono text-sm font-semibold text-[#14212B] group-hover:text-[#33546C] transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="font-body text-xs text-[#4C5C66] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
