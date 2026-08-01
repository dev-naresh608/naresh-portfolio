import React, { useState, useRef } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { sendContactEmail } from '../../services/email.service';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company_website: '' // Honeypot field for abuse protection
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [genericError, setGenericError] = useState('');
  const [cooldown, setCooldown] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear field-level validation error on user edit
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Name Validation
    if (!trimmedName) {
      errors.name = 'Please enter your name.';
    } else if (trimmedName.length > 80) {
      errors.name = 'Name must be under 80 characters.';
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.email = 'Please enter a valid email address.';
    } else if (trimmedEmail.length > 120) {
      errors.email = 'Email address is too long.';
    }

    // Message Validation
    if (!trimmedMessage) {
      errors.message = 'Please enter a message.';
    } else if (trimmedMessage.length < 10) {
      errors.message = 'Your message is too short (min 10 characters).';
    } else if (trimmedMessage.length > 2000) {
      errors.message = 'Message must be under 2000 characters.';
    }

    setFieldErrors(errors);

    // Focus first invalid field for accessibility
    if (errors.name && nameInputRef.current) {
      nameInputRef.current.focus();
    } else if (errors.email && emailInputRef.current) {
      emailInputRef.current.focus();
    } else if (errors.message && messageInputRef.current) {
      messageInputRef.current.focus();
    }

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ignore submit if currently submitting or in cooldown
    if (status === 'submitting' || cooldown) return;

    // Honeypot spam check: Silent abort if bot fills hidden field
    if (formData.company_website) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '', company_website: '' });
      return;
    }

    // Run client-side field validation
    if (!validateForm()) return;

    setStatus('submitting');
    setGenericError('');

    try {
      await sendContactEmail({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      // Clear form inputs only AFTER successful delivery
      setStatus('success');
      setFormData({ name: '', email: '', message: '', company_website: '' });
      setFieldErrors({});

      // Set client-side submission cooldown (15s)
      setCooldown(true);
      setTimeout(() => setCooldown(false), 15000);

    } catch {
      // PRESERVE user input in state upon error so user doesn't lose their text
      setStatus('error');
      setGenericError(
        `I couldn't send your message right now. Please try again, or email me directly at ${profileData.email}.`
      );
    }
  };

  const handleRetry = () => {
    setStatus('idle');
    setGenericError('');
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
                href={`mailto:${profileData.email}?subject=Portfolio%20Enquiry`}
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
                    {profileData.github.replace(/^https?:\/\//, '')}
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
                    {profileData.linkedin.replace(/^https?:\/\//, '')}
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
                <span className="text-[10px] text-[#8A9399]">EMAILJS INTEGRATED</span>
              </div>

              {/* Accessible Live Region for Screen Readers */}
              <div aria-live="polite" className="sr-only">
                {status === 'submitting' && 'Sending message...'}
                {status === 'success' && 'Message sent successfully.'}
                {status === 'error' && 'Unable to send message.'}
              </div>

              {/* Success Notification View */}
              {status === 'success' ? (
                <div className="p-6 border border-[#4C7A5B] bg-[#4C7A5B]/10 text-center space-y-3 font-mono text-xs">
                  <CheckCircle2 className="w-8 h-8 text-[#4C7A5B] mx-auto" />
                  <h3 className="font-bold text-sm text-[#14212B]">MESSAGE SENT SUCCESSFULLY</h3>
                  <p className="text-[#4C5C66] font-body text-xs sm:text-sm">
                    Thanks for reaching out. I&apos;ll get back to you as soon as I can.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-4 py-2 border border-[#14212B] bg-[#FAF7F0] text-[#14212B] uppercase text-[11px] font-semibold hover:bg-[#F1EBDD] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Error Notification & Fallback Box */}
                  {status === 'error' && (
                    <div className="p-4 border border-[#33546C] bg-[#F1EBDD] text-[#14212B] font-mono text-xs space-y-3">
                      <div className="flex items-start gap-2 text-[#96692B]">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{genericError}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-[#DCD3BE]">
                        <button
                          type="button"
                          onClick={handleRetry}
                          className="px-3 py-1.5 border border-[#14212B] bg-[#FAF7F0] text-[#14212B] font-semibold uppercase text-[10px] flex items-center gap-1 hover:bg-[#F1EBDD]"
                        >
                          <RefreshCw className="w-3 h-3 text-[#B8863E]" />
                          <span>Try Again</span>
                        </button>

                        <a
                          href={`mailto:${profileData.email}?subject=Portfolio%20Enquiry`}
                          className="px-3 py-1.5 border border-[#14212B] bg-[#14212B] text-[#FAF7F0] font-semibold uppercase text-[10px] flex items-center gap-1 hover:bg-[#33546C]"
                        >
                          <Mail className="w-3 h-3 text-[#E4C892]" />
                          <span>Email me directly</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Hidden Honeypot Field for Spam Protection */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <label htmlFor="company_website">Do not fill this</label>
                    <input
                      id="company_website"
                      name="company_website"
                      type="text"
                      tabIndex="-1"
                      value={formData.company_website}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1">
                    <label 
                      htmlFor="contact-name" 
                      className="font-mono text-xs font-semibold text-[#14212B] uppercase block"
                    >
                      Your Name <span className="text-[#B8863E]">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      className={`w-full px-3.5 py-2.5 border bg-[#F1EBDD]/50 font-body text-sm text-[#14212B] focus:bg-[#FAF7F0] focus-visible:outline-none transition-colors ${
                        fieldErrors.name ? 'border-[#33546C] bg-red-50/20' : 'border-[#DCD3BE] focus:border-[#14212B]'
                      }`}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="font-mono text-[11px] text-[#33546C] mt-0.5">
                        {fieldErrors.name}
                      </p>
                    )}
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
                      ref={emailInputRef}
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-3.5 py-2.5 border bg-[#F1EBDD]/50 font-body text-sm text-[#14212B] focus:bg-[#FAF7F0] focus-visible:outline-none transition-colors ${
                        fieldErrors.email ? 'border-[#33546C] bg-red-50/20' : 'border-[#DCD3BE] focus:border-[#14212B]'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="font-mono text-[11px] text-[#33546C] mt-0.5">
                        {fieldErrors.email}
                      </p>
                    )}
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
                      ref={messageInputRef}
                      id="contact-message"
                      name="message"
                      rows="4"
                      required
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your opportunity or inquiry..."
                      className={`w-full px-3.5 py-2.5 border bg-[#F1EBDD]/50 font-body text-sm text-[#14212B] focus:bg-[#FAF7F0] focus-visible:outline-none transition-colors resize-none ${
                        fieldErrors.message ? 'border-[#33546C] bg-red-50/20' : 'border-[#DCD3BE] focus:border-[#14212B]'
                      }`}
                    />
                    {fieldErrors.message && (
                      <p id="message-error" className="font-mono text-[11px] text-[#33546C] mt-0.5">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Action Button with Brass Accent */}
                  <button
                    type="submit"
                    disabled={status === 'submitting' || cooldown}
                    className="w-full py-3.5 border border-[#96692B] bg-[#B8863E] hover:bg-[#96692B] text-[#FAF7F0] font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14212B] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <span>SENDING...</span>
                    ) : cooldown ? (
                      <span>MESSAGE SENT (COOLDOWN)</span>
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
