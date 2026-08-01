import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Mail, Phone, MapPin, ShieldCheck, Database, Layers, Terminal, CheckCircle2, GitCommit } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { resumeData } from '../data/resume';
import { siteConfig, isValidUrl } from '../config/site.config';

export const Resume = () => {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#14212B] py-8 sm:py-12 relative overflow-hidden selection:bg-[#E4C892] selection:text-[#14212B]">
      {/* Background Blueprint Grid Line Overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none" />

      {/* Decorative Technical Axis Lines */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[#DCD3BE]/50 hidden lg:block pointer-events-none" />
      <div className="absolute right-4 top-0 bottom-0 w-px bg-[#DCD3BE]/50 hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* PAGE HEADER */}
        {/* ========================================================================= */}
        <header className="border-b-2 border-[#14212B] bg-[#FAF7F0] p-6 sm:p-8 lg:p-10 shadow-xs relative">
          
          {/* Top Label & Nav Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#DCD3BE] font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B8863E] inline-block" />
              <span className="font-semibold tracking-widest text-[#14212B] uppercase">{resumeData.header.label}</span>
              <span className="text-[#8A9399] ml-2 hidden sm:inline">TECHNICAL DOSSIER // VERIFIED</span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#DCD3BE] bg-[#F1EBDD] hover:border-[#14212B] text-[#14212B] transition-colors focus-visible:outline-none"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#B8863E]" />
                <span>Portfolio</span>
              </Link>

              {/* Download ATS PDF Action */}
              <a
                href={resumeData.header.pdfUrl}
                download="Naresh_Chaudhary_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#14212B] bg-[#14212B] hover:bg-[#33546C] text-[#FAF7F0] font-semibold tracking-wider uppercase transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
              >
                <Download className="w-3.5 h-3.5 text-[#E4C892]" />
                <span>DOWNLOAD PDF</span>
              </a>
            </div>
          </div>

          {/* Main Identity & Titles */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            <div className="lg:col-span-8 space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14212B] tracking-tight">
                {resumeData.header.name}
              </h1>
              <div className="font-mono text-sm sm:text-base font-semibold text-[#33546C]">
                {resumeData.header.title}
              </div>
              <p className="font-mono text-xs text-[#B8863E] font-medium tracking-wide">
                {resumeData.header.subtitle}
              </p>
            </div>

            {/* Direct Contact Channels Column */}
            <div className="lg:col-span-4 space-y-2 font-mono text-xs text-[#14212B] bg-[#F1EBDD]/60 p-4 border border-[#DCD3BE]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#33546C]" />
                <span>{resumeData.header.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#33546C]" />
                <a href={`mailto:${resumeData.header.email}`} className="hover:text-[#B8863E] transition-colors">
                  {resumeData.header.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#33546C]" />
                <a href={resumeData.header.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#B8863E] transition-colors truncate">
                  {resumeData.header.linkedinHandle}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-[#14212B]" />
                <a href={resumeData.header.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#B8863E] transition-colors truncate">
                  {resumeData.header.githubHandle}
                </a>
              </div>
            </div>

          </div>

        </header>


        {/* ========================================================================= */}
        {/* MAIN RESUME CONTENT WITH STICKY INDEX (DESKTOP) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Sticky Index Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-2 font-mono text-xs text-[#4C5C66]">
            <div className="text-[10px] font-semibold text-[#8A9399] uppercase tracking-widest pb-2 border-b border-[#DCD3BE] mb-2">
              RESUME INDEX
            </div>
            {resumeData.indexLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left py-1.5 px-2 transition-colors border-l-2 flex items-center justify-between ${
                  activeSection === link.id
                    ? 'border-[#B8863E] text-[#14212B] font-semibold bg-[#F1EBDD]'
                    : 'border-transparent hover:border-[#DCD3BE] hover:text-[#14212B]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[#8A9399]">&rarr;</span>
              </button>
            ))}

            <div className="pt-6 border-t border-[#DCD3BE]">
              <a
                href={resumeData.header.pdfUrl}
                download="Naresh_Chaudhary_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 border border-[#14212B] bg-[#14212B] text-[#FAF7F0] font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#33546C] transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#E4C892]" />
                <span>DOWNLOAD ATS PDF</span>
              </a>
            </div>
          </aside>


          {/* Main Resume Sections Stack */}
          <main className="lg:col-span-9 space-y-12">
            
            {/* 00 / PROFILE */}
            <section id="profile" className="space-y-4 border-b border-[#DCD3BE] pb-8">
              <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
                <span>{resumeData.profile.sectionId}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#14212B]">
                {resumeData.profile.title}
              </h2>
              <div className="font-body text-base text-[#4C5C66] leading-relaxed p-5 border border-[#DCD3BE] bg-[#F1EBDD]/40">
                {resumeData.profile.summary}
              </div>
            </section>


            {/* 01 / EXPERIENCE */}
            <section id="experience" className="space-y-6 border-b border-[#DCD3BE] pb-8">
              <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
                <span>01 // PROFESSIONAL EXPERIENCE</span>
              </div>

              <div className="space-y-6">
                {resumeData.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className={`p-6 border ${
                      exp.isPrimary
                        ? 'border-[#14212B] bg-[#FAF7F0] shadow-xs'
                        : 'border-[#DCD3BE] bg-[#F1EBDD]/40'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCD3BE] pb-3 mb-4 font-mono text-xs">
                      <span className="font-bold text-[#33546C]">{exp.period}</span>
                      <span className="text-[10px] text-[#8A9399] bg-[#FAF7F0] px-2 py-0.5 border border-[#DCD3BE]">
                        {exp.type}
                      </span>
                    </div>

                    <div className="mb-3">
                      <h3 className="font-display text-xl font-bold text-[#14212B]">
                        {exp.role}
                      </h3>
                      <div className="font-mono text-sm font-semibold text-[#33546C]">
                        {exp.company}
                      </div>
                    </div>

                    <ul className="space-y-2 font-body text-xs sm:text-sm text-[#4C5C66] leading-relaxed">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <GitCommit className="w-3.5 h-3.5 text-[#B8863E] shrink-0 mt-1" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>


            {/* 02 / SELECTED PROJECTS */}
            <section id="projects" className="space-y-6 border-b border-[#DCD3BE] pb-8">
              <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
                <span>02 // SELECTED ENGINEERING PROJECTS</span>
              </div>

              <div className="space-y-6">
                {resumeData.projects.map((proj) => (
                  <article
                    key={proj.id}
                    className="p-6 sm:p-8 border border-[#14212B] bg-[#FAF7F0] shadow-xs space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCD3BE] pb-3 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-[#14212B] text-[#FAF7F0] font-bold text-[11px]">
                          {proj.id}
                        </span>
                        <span className="font-semibold text-[#B8863E]">{proj.name}</span>
                      </div>
                      <span className="text-[10px] text-[#8A9399]">{proj.type}</span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-bold text-[#14212B]">
                        {proj.name} <span className="text-[#33546C] text-lg font-normal italic">({proj.subtitle})</span>
                      </h3>
                      <p className="font-mono text-xs text-[#33546C] font-medium mt-0.5">
                        {proj.tagline}
                      </p>
                    </div>

                    <ul className="space-y-2 font-body text-xs sm:text-sm text-[#4C5C66] leading-relaxed">
                      {proj.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-[#33546C] font-mono font-bold text-xs shrink-0 mt-0.5">&bull;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack & Links Footer */}
                    <div className="pt-3 border-t border-[#DCD3BE] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.map((st) => (
                          <span key={st} className="px-2 py-0.5 bg-[#F1EBDD] border border-[#DCD3BE] text-[#14212B] text-[11px]">
                            {st}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {proj.caseStudyUrl && (
                          <Link to={proj.caseStudyUrl} className="text-[#33546C] hover:text-[#14212B] font-semibold underline underline-offset-2">
                            Case Study
                          </Link>
                        )}
                        {isValidUrl(proj.repo) && (
                          <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="text-[#14212B] hover:text-[#B8863E] font-semibold inline-flex items-center gap-1">
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Repo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>


            {/* 03 / TECHNICAL SKILLS */}
            <section id="skills" className="space-y-4 border-b border-[#DCD3BE] pb-8">
              <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
                <span>03 // TECHNICAL SKILLS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
                {resumeData.skills.map((group) => (
                  <div key={group.category} className="p-4 border border-[#DCD3BE] bg-[#F1EBDD]/60 space-y-2">
                    <div className="font-bold text-[#14212B] uppercase border-b border-[#DCD3BE] pb-1">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map(item => (
                        <span key={item} className="px-2 py-0.5 bg-[#FAF7F0] border border-[#DCD3BE] text-[11px] text-[#14212B]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>


            {/* 04 / EDUCATION & 05 / ACHIEVEMENTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* 04 / EDUCATION */}
              <section id="education" className="space-y-4">
                <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
                  <span>04 // EDUCATION</span>
                </div>

                <div className="p-5 border border-[#14212B] bg-[#FAF7F0] space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-[#8A9399] border-b border-[#DCD3BE] pb-2 text-[10px]">
                    <span>DEGREE // B.E. IT</span>
                    <span>{resumeData.education.period}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#14212B]">
                    {resumeData.education.degree} — {resumeData.education.field}
                  </h3>
                  
                  <div className="text-[#33546C] font-semibold">
                    {resumeData.education.institution}
                  </div>

                  <div className="pt-2 text-[11px] text-[#4C5C66]">
                    CGPA SCORE: <strong className="text-[#14212B]">{resumeData.education.cgpa}</strong>
                  </div>
                </div>
              </section>

              {/* 05 / ACHIEVEMENTS */}
              <section id="achievements" className="space-y-4">
                <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
                  <span>05 // ACHIEVEMENTS</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {resumeData.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="p-4 border border-[#DCD3BE] bg-[#F1EBDD]/60 space-y-1">
                      <strong className="text-[#14212B] block">{ach.title}</strong>
                      <p className="font-body text-xs text-[#4C5C66]">{ach.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

          </main>

        </div>


        {/* ========================================================================= */}
        {/* RESUME PAGE FOOTER */}
        {/* ========================================================================= */}
        <footer className="mt-16 pt-8 border-t-2 border-[#14212B] flex flex-col sm:flex-row items-center justify-between gap-6 p-6 border border-[#14212B] bg-[#F1EBDD]/80">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-mono text-xs font-semibold text-[#4C7A5B] uppercase tracking-wider block">
              AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES
            </span>
            <div className="font-display font-bold text-lg text-[#14212B]">
              Naresh Chaudhary
            </div>
            <div className="font-mono text-xs text-[#4C5C66]">
              {siteConfig.contact.location} &bull; {siteConfig.contact.email}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <Link
              to="/"
              className="px-4 py-2 border border-[#14212B] bg-[#FAF7F0] text-[#14212B] hover:bg-[#F1EBDD] uppercase font-semibold"
            >
              Back to Portfolio
            </Link>
            <a
              href={resumeData.header.pdfUrl}
              download="Naresh_Chaudhary_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#14212B] bg-[#14212B] text-[#FAF7F0] hover:bg-[#33546C] uppercase font-semibold flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[#E4C892]" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
};
