/**
 * Contact Page — CoLogic Technologies
 * Design: Structured Modernism
 * Typography: Apple system font stack
 * - Split layout: left contact details (dark panel) / right form
 * - Contact info: plain text display only, non-clickable
 * - No fabricated phone numbers, addresses, or office locations
 */

import { useState } from 'react';
import { Mail, Clock, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { toast } from 'sonner';

const SYSTEM_FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif";
const BODY_FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif";

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const serviceOptions = [
  'Java Full Stack Development',
  'Project Management',
  'DevOps',
  'AI / AI-Driven Solutions',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.name || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">

      {/* ── Page Hero ── */}
      <section className="bg-[#0B1F3A] pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="container relative z-10">
          <Reveal>
            <span className="section-label-light mb-5 block">Contact Us</span>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="text-white mb-5"
              style={{
                fontFamily: SYSTEM_FONT,
                fontWeight: 600,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                maxWidth: '32rem',
              }}
            >
              Let's start a conversation
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p
              className="text-white/55 leading-relaxed"
              style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6, maxWidth: '36rem' }}
            >
              Whether you have a specific challenge in mind or just want to explore what's possible, we're here to help. No sales pressure — just honest dialogue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Main Contact Section — Split Layout ── */}
      <section className="bg-white py-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[700px]">

            {/* Left: Contact details — dark panel */}
            <div className="lg:col-span-2 bg-[#0B1F3A] rounded-sm lg:rounded-none p-10 lg:p-12 my-8 lg:my-0 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative z-10 h-full flex flex-col">
                <Reveal>
                  <h2
                    className="text-white mb-3"
                    style={{
                      fontFamily: SYSTEM_FONT,
                      fontWeight: 600,
                      fontSize: '1.5rem',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                    }}
                  >
                    Contact Information
                  </h2>
                  <p
                    className="text-white/45 text-sm leading-relaxed mb-10"
                    style={{ fontFamily: BODY_FONT }}
                  >
                    Fill in the form and a senior consultant will respond within one business day.
                  </p>
                </Reveal>

                {/* Contact items — plain text, non-clickable */}
                <div className="flex flex-col gap-7 mb-12">
                  {/* Email — plain text */}
                  <Reveal delay={80}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-white/8 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-[#2ECC71]" />
                      </div>
                      <div>
                        <div
                          className="text-white/40 text-xs mb-0.5 uppercase tracking-widest"
                          style={{ fontFamily: BODY_FONT, letterSpacing: '0.08em' }}
                        >
                          Email
                        </div>
                        <div
                          className="text-white text-sm font-medium mb-0.5 select-text"
                          style={{ fontFamily: BODY_FONT }}
                        >
                          hello@cologic.tech
                        </div>
                        <div
                          className="text-white/35 text-xs"
                          style={{ fontFamily: BODY_FONT }}
                        >
                          We respond within 24 hours
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  {/* Phone — static placeholder, non-clickable */}
                  <Reveal delay={100}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-white/8 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Phone size={16} className="text-[#2ECC71]" />
                      </div>
                      <div>
                        <div
                          className="text-white/40 text-xs mb-0.5 uppercase tracking-widest"
                          style={{ fontFamily: BODY_FONT, letterSpacing: '0.08em' }}
                        >
                          Phone
                        </div>
                        <div
                          className="text-white text-sm font-medium mb-0.5 select-text"
                          style={{ fontFamily: BODY_FONT }}
                        >
                          +1 (XXX) XXX-XXXX
                        </div>
                        <div
                          className="text-white/35 text-xs"
                          style={{ fontFamily: BODY_FONT }}
                        >
                          Mon–Fri, 9am–6pm EST
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  {/* Location — plain text */}
                  <Reveal delay={120}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-white/8 rounded-sm flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-[#2ECC71]" />
                      </div>
                      <div>
                        <div
                          className="text-white/40 text-xs mb-0.5 uppercase tracking-widest"
                          style={{ fontFamily: BODY_FONT, letterSpacing: '0.08em' }}
                        >
                          Location
                        </div>
                        <div
                          className="text-white text-sm font-medium mb-0.5"
                          style={{ fontFamily: BODY_FONT }}
                        >
                          Remote-first
                        </div>
                        <div
                          className="text-white/35 text-xs"
                          style={{ fontFamily: BODY_FONT }}
                        >
                          Available globally
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  {/* Office hours — plain text */}
                  <Reveal delay={160}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-white/8 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Clock size={16} className="text-[#2ECC71]" />
                      </div>
                      <div>
                        <div
                          className="text-white/40 text-xs mb-0.5 uppercase tracking-widest"
                          style={{ fontFamily: BODY_FONT, letterSpacing: '0.08em' }}
                        >
                          Office Hours
                        </div>
                        <div
                          className="text-white text-sm font-medium mb-0.5"
                          style={{ fontFamily: BODY_FONT }}
                        >
                          Monday – Friday
                        </div>
                        <div
                          className="text-white/35 text-xs"
                          style={{ fontFamily: BODY_FONT }}
                        >
                          9:00 AM – 6:00 PM EST
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-8" />

                {/* What to expect */}
                <Reveal delay={200}>
                  <div>
                    <p
                      className="text-white/40 text-xs mb-4 tracking-widest uppercase"
                      style={{ fontFamily: BODY_FONT }}
                    >
                      What to Expect
                    </p>
                    <div className="flex flex-col gap-3">
                      {[
                        'Response within one business day',
                        '45-minute complimentary strategy session',
                        'No obligation, no sales pressure',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 size={14} className="text-[#2ECC71] flex-shrink-0" />
                          <span
                            className="text-white/55 text-xs"
                            style={{ fontFamily: BODY_FONT }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 py-12 lg:py-16 lg:pl-16">
              {submitted ? (
                <Reveal>
                  <div className="flex flex-col items-start justify-center h-full min-h-[400px]">
                    <div className="w-14 h-14 bg-[#2ECC71]/10 rounded-sm flex items-center justify-center mb-6">
                      <CheckCircle2 size={28} className="text-[#2ECC71]" />
                    </div>
                    <h3
                      className="text-[#0B1F3A] mb-3"
                      style={{
                        fontFamily: SYSTEM_FONT,
                        fontWeight: 600,
                        fontSize: '1.75rem',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                      }}
                    >
                      Message received.
                    </h3>
                    <p
                      className="text-[#64748B] leading-relaxed mb-6 max-w-sm"
                      style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
                    >
                      Thank you for reaching out. A senior consultant will review your inquiry and respond within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#2ECC71] text-sm font-medium hover:underline"
                      style={{ fontFamily: BODY_FONT }}
                    >
                      Send another message →
                    </button>
                  </div>
                </Reveal>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <Reveal>
                    <h2
                      className="text-[#0B1F3A] mb-2"
                      style={{
                        fontFamily: SYSTEM_FONT,
                        fontWeight: 600,
                        fontSize: '1.75rem',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                      }}
                    >
                      Tell us about your challenge
                    </h2>
                    <p
                      className="text-[#94A3B8] text-sm mb-8"
                      style={{ fontFamily: BODY_FONT }}
                    >
                      Fields marked with * are required.
                    </p>
                  </Reveal>

                  {/* 1. Name */}
                  <Reveal delay={80}>
                    <div className="mb-4">
                      <label
                        className="block text-[#0B1F3A] text-xs font-semibold mb-2 tracking-wide"
                        style={{ fontFamily: BODY_FONT, letterSpacing: '0.06em' }}
                      >
                        NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="form-input"
                      />
                    </div>
                  </Reveal>

                  {/* 2. Email */}
                  <Reveal delay={120}>
                    <div className="mb-4">
                      <label
                        className="block text-[#0B1F3A] text-xs font-semibold mb-2 tracking-wide"
                        style={{ fontFamily: BODY_FONT, letterSpacing: '0.06em' }}
                      >
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="form-input"
                      />
                    </div>
                  </Reveal>

                  {/* 3. Contact Number */}
                  <Reveal delay={160}>
                    <div className="mb-4">
                      <label
                        className="block text-[#0B1F3A] text-xs font-semibold mb-2 tracking-wide"
                        style={{ fontFamily: BODY_FONT, letterSpacing: '0.06em' }}
                      >
                        CONTACT NUMBER
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="form-input"
                      />
                    </div>
                  </Reveal>

                  {/* Message */}
                  <Reveal delay={200}>
                    <div className="mb-8">
                      <label
                        className="block text-[#0B1F3A] text-xs font-semibold mb-2 tracking-wide"
                        style={{ fontFamily: BODY_FONT, letterSpacing: '0.06em' }}
                      >
                        YOUR MESSAGE *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your challenge or what you're hoping to achieve. The more context you provide, the more useful our initial response will be."
                        required
                        rows={5}
                        className="form-input resize-none"
                      />
                    </div>
                  </Reveal>

                  {/* Submit */}
                  <Reveal delay={240}>
                    <div className="flex items-center gap-6">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[#0B1F3A]/30 border-t-[#0B1F3A] rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <span>→</span>
                          </>
                        )}
                      </button>
                      <p
                        className="text-[#94A3B8] text-xs"
                        style={{ fontFamily: BODY_FONT }}
                      >
                        We respect your privacy and will never share your information.
                      </p>
                    </div>
                  </Reveal>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
