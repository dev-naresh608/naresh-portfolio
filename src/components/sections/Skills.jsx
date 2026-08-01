import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export const Skills = () => {
  const skillToolkit = [
    {
      category: "LANGUAGES",
      items: ["JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      category: "FRONTEND",
      items: ["React 19", "Vite", "Tailwind CSS", "React Router", "Framer Motion"]
    },
    {
      category: "BACKEND & APIS",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Zod Validation", "Winston Logging"]
    },
    {
      category: "DATABASE",
      items: ["MongoDB", "Mongoose ODM"]
    },
    {
      category: "TOOLS & INFRASTRUCTURE",
      items: ["Git", "GitHub", "Postman", "Cloudinary", "Helmet Security"]
    }
  ];

  const exploringTopics = [
    "Backend Architecture",
    "API Design",
    "Authentication & Authorization",
    "Database Indexing",
    "Transactions",
    "Caching",
    "Concurrency & Race Conditions",
    "Rate Limiting",
    "Idempotency",
    "WebSockets",
    "Distributed Systems",
    "System Design",
    "Performance",
    "Reliability"
  ];

  return (
    <section 
      id="skills" 
      className="py-16 lg:py-24 border-t border-[#DCD3BE] bg-[#FAF7F0] relative overflow-hidden"
      aria-label="Technical Skills Section"
    >
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ========================================================================= */}
        {/* TECHNICAL TOOLKIT */}
        {/* ========================================================================= */}
        <div className="space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#DCD3BE] gap-4">
            <div className="space-y-2">
              <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
                <span className="text-[#8A9399]">04 //</span>
                <span>ENGINEERING TOOLKIT</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14212B] tracking-tight">
                Technical Stack Inventory
              </h2>
            </div>

            <div className="font-mono text-[11px] text-[#4C5C66] bg-[#F1EBDD] px-3 py-1.5 border border-[#DCD3BE] self-start md:self-auto">
              INVENTORY // VERIFIED SKILLS &amp; TECHNOLOGIES
            </div>
          </div>

          {/* Skill Inventory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillToolkit.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border border-[#14212B] bg-[#FAF7F0] p-5 relative shadow-xs group hover:border-[#33546C] transition-colors"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-[#DCD3BE] pb-3 mb-4 font-mono text-xs">
                  <span className="font-bold text-[#14212B] tracking-wider uppercase">{group.category}</span>
                  <span className="text-[10px] text-[#8A9399]">CAT_ID // 0{idx + 1}</span>
                </div>

                {/* Tech Pills List */}
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-[#F1EBDD] border border-[#DCD3BE] text-[#14212B] group-hover:border-[#14212B] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CURRENTLY EXPLORING / ENGINEERING INTERESTS */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-[#DCD3BE] space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="font-mono text-xs font-semibold text-[#33546C] tracking-widest uppercase flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#B8863E]" />
                <span>CURRENTLY EXPLORING</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#14212B]">
                Engineering Topics &amp; Systems Curiosity
              </h3>
            </div>

            <div className="font-mono text-[11px] text-[#8A9399]">
              NOTE // REPRESENTS ACTIVE EXPLORATION &bull; NOT MASTERED SKILLS
            </div>
          </div>

          {/* Blueprint Technical Index Grid */}
          <div className="p-6 border border-[#14212B] bg-[#F1EBDD]/60 relative overflow-hidden">
            <div className="font-mono text-[10px] text-[#4C5C66] border-b border-[#DCD3BE] pb-2 mb-4 flex justify-between">
              <span>INDEX // SYSTEMS INTERESTS &amp; CURIOSITY TOPICS</span>
              <span>TYPE // NON-RANKED INDEX</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 font-mono text-xs text-[#14212B]">
              {exploringTopics.map((topic, i) => (
                <div 
                  key={topic}
                  className="p-2.5 border border-[#DCD3BE] bg-[#FAF7F0] flex items-center gap-2 text-[11px] text-[#14212B] hover:border-[#33546C] transition-colors"
                >
                  <span className="text-[#8A9399] text-[9px] font-bold">[{i + 1 < 10 ? `0${i + 1}` : i + 1}]</span>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
