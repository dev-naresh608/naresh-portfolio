import React from 'react';
import { profileData } from '../../data/profile';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#DCD3BE] bg-[#F1EBDD]/60 pt-12 pb-8 text-[#14212B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#DCD3BE]">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono font-semibold text-xs tracking-wider text-[#14212B] px-1.5 py-0.5 bg-[#FAF7F0] border border-[#14212B]">
                NC
              </span>
              <span className="font-display font-bold text-lg text-[#14212B]">
                Naresh Chaudhary
              </span>
            </div>
            <p className="font-mono text-xs text-[#4C5C66] max-w-sm leading-relaxed">
              Software Engineer specializing in full-stack web applications, backend services, REST APIs, and data modeling.
            </p>
            <div className="font-mono text-[11px] text-[#8A9399]">
              LOC // Gujarat, India &bull; IST (UTC+5:30)
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <span className="font-mono text-[11px] font-semibold text-[#8A9399] uppercase tracking-widest block mb-1">
              INDEX
            </span>
            <ul className="space-y-1.5 font-mono text-xs text-[#4C5C66]">
              <li><a href="#about" className="hover:text-[#14212B] transition-colors">01 / About</a></li>
              <li><a href="#experience" className="hover:text-[#14212B] transition-colors">02 / Experience</a></li>
              <li><a href="#projects" className="hover:text-[#14212B] transition-colors">03 / Selected Work</a></li>
              <li><a href="#skills" className="hover:text-[#14212B] transition-colors">04 / Technical Toolkit</a></li>
              <li><a href="#education" className="hover:text-[#14212B] transition-colors">05 / Education</a></li>
              <li><a href="#contact" className="hover:text-[#14212B] transition-colors">06 / Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-2">
            <span className="font-mono text-[11px] font-semibold text-[#8A9399] uppercase tracking-widest block mb-1">
              CHANNELS
            </span>
            <ul className="space-y-2 font-mono text-xs text-[#14212B]">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#B8863E] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#33546C]" />
                  <span>{profileData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#B8863E] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#14212B]" />
                  <span>github.com/dev-naresh608</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#B8863E] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#33546C]" />
                  <span>linkedin.com/in/naresh608</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#4C5C66]">
          <div>
            &copy; {currentYear} Naresh Chaudhary. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Designed & engineered by Naresh Chaudhary</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 border border-[#DCD3BE] bg-[#FAF7F0] hover:border-[#14212B] text-[#14212B] transition-colors focus-visible:outline-none"
              aria-label="Scroll back to top of page"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
