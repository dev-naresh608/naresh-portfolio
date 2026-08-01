import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData, achievementsData } from '../../data/education';

export const Education = () => {
  return (
    <section 
      id="education" 
      className="py-16 lg:py-24 border-t border-[#DCD3BE] bg-[#F1EBDD]/40 relative overflow-hidden"
      aria-label="Education & Achievements Section"
    >
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#DCD3BE] gap-4">
          <div className="space-y-2">
            <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
              <span className="text-[#8A9399]">05 //</span>
              <span>BACKGROUND</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14212B] tracking-tight">
              Education &amp; Key Milestones
            </h2>
          </div>

          <div className="font-mono text-[11px] text-[#4C5C66] bg-[#FAF7F0] px-3 py-1.5 border border-[#DCD3BE] self-start md:self-auto">
            ACADEMIC RECORD // B.E. INFORMATION TECHNOLOGY
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs font-semibold text-[#14212B] uppercase tracking-wider block mb-2">
              ACADEMIC DEGREE
            </span>

            {educationData.map((edu) => (
              <div 
                key={edu.id}
                className="border border-[#14212B] bg-[#FAF7F0] p-6 shadow-xs space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCD3BE] pb-3 font-mono text-xs">
                  <span className="font-bold text-[#14212B] flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#33546C]" />
                    DEGREE_ID // B.E. IT
                  </span>
                  <span className="text-[#B8863E] font-semibold">GRADUATION // {edu.graduationYear}</span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-[#14212B]">
                    {edu.degree}
                  </h3>
                  <div className="font-mono text-sm font-semibold text-[#33546C] mt-0.5">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 font-mono text-xs border-t border-b border-[#F1EBDD] py-3 text-[#4C5C66]">
                  <div>
                    <span className="text-[#8A9399] block text-[10px] uppercase">TIMELINE</span>
                    {edu.period}
                  </div>
                  <div>
                    <span className="text-[#8A9399] block text-[10px] uppercase">SCORE / CGPA</span>
                    <span className="font-semibold text-[#14212B]">{edu.cgpa}</span>
                  </div>
                  <div>
                    <span className="text-[#8A9399] block text-[10px] uppercase">LOCATION</span>
                    {edu.location}
                  </div>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <span className="text-[#8A9399] text-[10px] uppercase block">CORE SUBJECTS</span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coreSubjects.map(sub => (
                      <span key={sub} className="px-2 py-0.5 bg-[#F1EBDD] border border-[#DCD3BE] text-[#14212B] text-[11px]">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs font-semibold text-[#14212B] uppercase tracking-wider block mb-2">
              ENGINEERING ACHIEVEMENTS
            </span>

            <div className="space-y-4">
              {achievementsData.map((ach) => (
                <div 
                  key={ach.id}
                  className="border border-[#DCD3BE] bg-[#FAF7F0] p-5 space-y-2 hover:border-[#14212B] transition-colors"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#8A9399] pb-1.5 border-b border-[#F1EBDD]">
                    <span className="font-semibold text-[#4C7A5B] flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#B8863E]" />
                      {ach.category}
                    </span>
                    <span>{ach.date}</span>
                  </div>

                  <h4 className="font-mono text-sm font-semibold text-[#14212B]">
                    {ach.title}
                  </h4>

                  <p className="font-body text-xs text-[#4C5C66] leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
