import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, CheckCircle2, GitCommit } from 'lucide-react';
import { experienceData } from '../../data/experience';

export const Experience = () => {
  return (
    <section 
      id="experience" 
      className="py-16 lg:py-24 border-t border-[#DCD3BE] bg-[#F1EBDD]/40 relative overflow-hidden"
      aria-label="Professional Experience Section"
    >
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#DCD3BE] gap-4">
          <div className="space-y-2">
            <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
              <span className="text-[#8A9399]">02 //</span>
              <span>PROFESSIONAL EXPERIENCE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14212B] tracking-tight">
              Engineering Log &amp; Industry Role
            </h2>
          </div>

          <div className="font-mono text-[11px] text-[#4C5C66] bg-[#FAF7F0] px-3 py-1.5 border border-[#DCD3BE] self-start md:self-auto">
            RECORD_COUNT // 01 VERIFIED ENTRY
          </div>
        </div>

        {/* Technical Log Timeline Container */}
        <div className="relative pl-4 sm:pl-8 border-l border-[#14212B]/30 space-y-12">
          
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Technical Node Marker */}
              <div className="absolute -left-[21px] sm:-left-[37px] top-0.5 w-4 h-4 bg-[#FAF7F0] border-2 border-[#14212B] flex items-center justify-center group-hover:border-[#B8863E] transition-colors">
                <div className="w-1.5 h-1.5 bg-[#B8863E]" />
              </div>

              {/* Log Entry Card */}
              <div className="border border-[#14212B] bg-[#FAF7F0] p-6 sm:p-8 shadow-xs relative">
                
                {/* Entry Metadata Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DCD3BE] pb-4 mb-6 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#33546C] text-[#FAF7F0] text-[10px] font-semibold tracking-wider uppercase">
                      {exp.type}
                    </span>
                    <span className="font-semibold text-[#14212B]">LOG_ID // {exp.id.toUpperCase()}</span>
                  </div>

                  <div className="flex items-center gap-4 text-[#4C5C66] text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B8863E]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#33546C]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Role Identity */}
                  <div className="lg:col-span-4 space-y-3">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#14212B]">
                        {exp.role}
                      </h3>
                      <div className="font-mono text-sm font-semibold text-[#33546C] mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <p className="font-body text-xs text-[#4C5C66] leading-relaxed border-t border-[#F1EBDD] pt-3">
                      {exp.summary}
                    </p>

                    {/* Technologies Tag Group */}
                    <div className="pt-2 space-y-1.5">
                      <span className="font-mono text-[10px] text-[#8A9399] tracking-wider uppercase block">
                        STACK // WORKFLOW TOOLS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] text-[#14212B] bg-[#F1EBDD] px-2 py-0.5 border border-[#DCD3BE]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Contributions Log */}
                  <div className="lg:col-span-8 space-y-4">
                    <span className="font-mono text-xs font-semibold text-[#14212B] uppercase tracking-wider block border-b border-[#DCD3BE] pb-2">
                      ENGINEERING CONTRIBUTIONS &amp; RESPONSIBILITIES
                    </span>

                    <ul className="space-y-3">
                      {exp.contributions.map((contribution, cIdx) => (
                        <li 
                          key={cIdx}
                          className="flex items-start gap-3 font-body text-xs sm:text-sm text-[#4C5C66] leading-relaxed"
                        >
                          <GitCommit className="w-4 h-4 text-[#B8863E] shrink-0 mt-0.5" />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Engineering Evidence Note */}
                    <div className="mt-4 p-3 border border-[#DCD3BE] bg-[#F1EBDD]/60 font-mono text-[11px] text-[#4C5C66] flex items-center justify-between">
                      <span>VERIFICATION // Standard Git workflow &bull; Code reviews &bull; API Integration</span>
                      <span className="text-[#4C7A5B] font-semibold">VALIDATED</span>
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
