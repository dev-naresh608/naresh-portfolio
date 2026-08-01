import { Menu, X, FileText, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { profileData, navLinks } from '../../data/profile';
import { useState,useEffect } from 'react';
import { useLocation,Link } from 'react-router-dom';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF7F0]/90 backdrop-blur-md border-b border-[#DCD3BE] shadow-xs'
          : 'bg-[#FAF7F0]/60 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Monogram / Branding */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Naresh Chaudhary Homepage"
          >
            <div className="w-9 h-9 border border-[#14212B] bg-[#F1EBDD] flex items-center justify-center font-mono font-semibold text-xs tracking-wider text-[#14212B] group-hover:border-[#B8863E] group-hover:text-[#B8863E] transition-colors relative">
              <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#B8863E] opacity-0 group-hover:opacity-100 transition-opacity" />
              NC
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-base sm:text-lg text-[#14212B] leading-none tracking-tight group-hover:text-[#B8863E] transition-colors">
                Naresh Chaudhary
              </span>
              <span className="font-mono text-[10px] text-[#4C5C66] tracking-wider uppercase mt-0.5">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const href = isHomePage ? link.href : `/${link.href}`;
              return (
                <a
                  key={link.name}
                  href={href}
                  className="font-mono text-xs text-[#4C5C66] hover:text-[#14212B] tracking-wide uppercase transition-colors relative py-1 focus-visible:outline-none focus-visible:text-[#B8863E]"
                >
                  <span className="text-[#8A9399] mr-1 select-none">/</span>
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#4C5C66] hover:text-[#14212B] transition-colors rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <Link
              to="/resume"
              className="px-3 py-1.5 border border-[#DCD3BE] bg-[#F1EBDD] hover:border-[#14212B] text-[#14212B] font-mono text-xs font-medium tracking-wide transition-all duration-150 focus-visible:outline-none"
            >
              Resume
            </Link>

            <a
              href="/Naresh_Resume.html"
              download="Naresh_Chaudhary_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#14212B] bg-[#14212B] hover:bg-[#33546C] text-[#FAF7F0] font-mono text-xs font-medium tracking-wide transition-all duration-150 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8863E]"
              aria-label="Download Resume ATS PDF"
            >
              <FileText className="w-3.5 h-3.5 text-[#E4C892]" />
              <span>PDF</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/resume"
              className="px-2 py-1 border border-[#DCD3BE] bg-[#F1EBDD] font-mono text-[11px] text-[#14212B]"
            >
              Resume
            </Link>

            <a
              href="/Naresh_Resume.html"
              download="Naresh_Chaudhary_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 border border-[#14212B] bg-[#14212B] text-[#FAF7F0] font-mono text-[11px]"
            >
              <FileText className="w-3 h-3 text-[#E4C892]" />
              <span>PDF</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#DCD3BE] bg-[#F1EBDD] text-[#14212B] hover:border-[#14212B] focus-visible:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#DCD3BE] bg-[#FAF7F0] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="font-mono text-[10px] text-[#8A9399] tracking-widest uppercase pb-1 border-b border-[#DCD3BE]">
            SYSTEM NAVIGATION
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const href = isHomePage ? link.href : `/${link.href}`;
              return (
                <a
                  key={link.name}
                  href={href}
                  onClick={closeMobileMenu}
                  className="font-mono text-sm text-[#14212B] hover:text-[#B8863E] py-1.5 border-b border-[#F1EBDD] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#8A9399]">→</span>
                </a>
              );
            })}
          </nav>

          <div className="pt-2 flex items-center justify-between gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex-1 py-2 border border-[#DCD3BE] bg-[#F1EBDD] flex items-center justify-center gap-2 font-mono text-xs text-[#14212B]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex-1 py-2 border border-[#DCD3BE] bg-[#F1EBDD] flex items-center justify-center gap-2 font-mono text-xs text-[#14212B]"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#33546C]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
