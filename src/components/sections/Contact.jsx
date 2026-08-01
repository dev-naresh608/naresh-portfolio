import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulating form handling state safely (ready for EmailJS/API backend endpoint integration)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section 
      id="contact" 
      className="py-16 lg:py-24 border-t border-[#DCD3BE] bg-[#FAF7F0] relative overflow-hidden"
      aria-label="Contact Section"
    >
      {/* Background Blueprint Grid Line Overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#DCD3BE] gap-4">
          <div className="space-y-2">
            <div className="font-mono text-xs font-semibold text-[#B8863E] tracking-widest uppercase flex items-center gap-2">
              <span className="text-[#8A9399]">06 //</span>
              <span>CONTACT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14212B] tracking-tight">
              Let&apos;s build something meaningful.
            </h2>
          </div>

          <div className="font-mono text-[11px] text-[#4C5C66] bg-[#F1EBDD] px-3 py-1.5 border border-[#DCD3BE] self-start md:self-auto">
            DIRECT CHANNEL // INQUIRIES &amp; OPPORTUNITIES
          </div>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Connect Info */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-body text-base text-[#4C5C66] leading-relaxed">
              I am actively open for Software Engineering opportunities, backend architecture discussions, and full-stack development projects. Feel free to reach out directly via email or LinkedIn.
            </p>

            <div className="space-y-4 pt-2">
              
              {/* Direct Email Card */}
              <a
                href={`mailto:${profileData.email}`}
                className="p-4 border border-[#14212B] bg-[#FAF7F0] hover:bg-[#F1EBDD] flex items-center gap-4 transition-colors group block"
              >
                <div className="p-3 bg-[#B8863E] text-[#FAF7F0] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="font-mono text-[10px] text-[#8A9399] uppercase tracking-wider block">
                    PRIMARY EMAIL
                  </span>
                  <span className="font-mono text-sm font-semibold text-[#14212B] group-hover:text-[#B8863E] transition-colors truncate block">
                    {profileData.email}
                  </span>
                </div>
              </a>

              {/* Direct GitHub Card */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-[#DCD3BE] bg-[#FAF7F0] hover:border-[#14212B] flex items-center gap-4 transition-colors group block"
              >
                <div className="p-3 bg-[#14212B] text-[#FAF7F0] shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#8A9399] uppercase tracking-wider block">
                    GITHUB REPOSITORIES
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#14212B] group-hover:text-[#33546C] transition-colors">
                    github.com/dev-naresh608
                  </span>
                </div>
              </a>

              {/* Direct LinkedIn Card */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-[#DCD3BE] bg-[#FAF7F0] hover:border-[#14212B] flex items-center gap-4 transition-colors group block"
              >
                <div className="p-3 bg-[#33546C] text-[#FAF7F0] shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#8A9399] uppercase tracking-wider block">
                    LINKEDIN PROFILE
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#14212B] group-hover:text-[#33546C] transition-colors">
                    linkedin.com/in/naresh608
                  </span>
                </div>
              </a>

            </div>
          </div>

          {/* Right Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="border border-[#14212B] bg-[#FAF7F0] p-6 sm:p-8 shadow-xs relative">
              
              <div className="flex items-center justify-between border-b border-[#DCD3BE] pb-3 mb-6 font-mono text-xs">
                <span className="font-semibold text-[#14212B]">FORM // TRANSMIT DIRECT MESSAGE</span>
                <span className="text-[10px] text-[#8A9399]">3 REQUIRED FIELDS</span>
              </div>

              {status === 'success' ? (
                <div className="p-6 border border-[#4C7A5B] bg-[#4C7A5B]/10 text-center space-y-3 font-mono text-xs">
                  <CheckCircle2 className="w-8 h-8 text-[#4C7A5B] mx-auto" />
                  <h3 className="font-bold text-sm text-[#14212B]">MESSAGE RECEIVED</h3>
                  <p className="text-[#4C5C66]">
                    Thank you for writing. I will respond to your email at my earliest opportunity.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-4 py-2 border border-[#14212B] bg-[#FAF7F0] text-[#14212B] uppercase text-[11px] font-semibold hover:bg-[#F1EBDD]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {status === 'error' && (
                    <div className="p-3 border border-[#96692B] bg-[#B8863E]/10 text-[#96692B] font-mono text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-1">
                    <label 
                      htmlFor="contact-name" 
                      className="font-mono text-xs font-semibold text-[#14212B] uppercase block"
                    >
                      Your Name <span className="text-[#B8863E]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-3.5 py-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/50 font-body text-sm text-[#14212B] focus:border-[#14212B] focus:bg-[#FAF7F0] focus-visible:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label 
                      htmlFor="contact-email" 
                      className="font-mono text-xs font-semibold text-[#14212B] uppercase block"
                    >
                      Email Address <span className="text-[#B8863E]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/50 font-body text-sm text-[#14212B] focus:border-[#14212B] focus:bg-[#FAF7F0] focus-visible:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label 
                      htmlFor="contact-message" 
                      className="font-mono text-xs font-semibold text-[#14212B] uppercase block"
                    >
                      Message <span className="text-[#B8863E]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your opportunity or inquiry..."
                      className="w-full px-3.5 py-2.5 border border-[#DCD3BE] bg-[#F1EBDD]/50 font-body text-sm text-[#14212B] focus:border-[#14212B] focus:bg-[#FAF7F0] focus-visible:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Action Button with Brass Accent */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 border border-[#96692B] bg-[#B8863E] hover:bg-[#96692B] text-[#FAF7F0] font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14212B]"
                  >
                    {status === 'submitting' ? (
                      <span>TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
