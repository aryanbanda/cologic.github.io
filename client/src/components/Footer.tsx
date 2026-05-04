/**
 * Footer — CoLogic Technologies
 * Design: Structured Modernism
 * Typography: Apple system font stack
 * - Dark navy background
 * - Four-column layout: brand / services / company / contact
 * - Social links: LinkedIn, Twitter/X (non-clickable placeholders until real URLs confirmed)
 * - Newsletter placeholder (disabled, coming soon)
 * - No fabricated stats or proof
 * - Contact info displayed as plain text (non-clickable)
 */

import { Link } from 'wouter';
import { Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react';

const SYSTEM_FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif";
const BODY_FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif";

const servicesLinks = [
  { label: 'Java Full Stack Development', href: '/services' },
  { label: 'Project Management', href: '/services' },
  { label: 'DevOps', href: '/services' },
  { label: 'AI / AI-Driven Solutions', href: '/services' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'Twitter / X', icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="bg-[#071428] text-white">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Main footer grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand + description + social */}
          <div className="lg:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2.5 mb-5 group w-fit">
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="2" width="6" height="6" fill="#2ECC71" />
                    <rect x="10" y="2" width="6" height="6" fill="white" opacity="0.7" />
                    <rect x="2" y="10" width="6" height="6" fill="white" opacity="0.7" />
                    <rect x="10" y="10" width="6" height="6" fill="#2ECC71" opacity="0.5" />
                  </svg>
                </div>
                <div>
                  <span style={{ fontFamily: SYSTEM_FONT, fontWeight: 600, fontSize: '1rem', color: 'white', lineHeight: 1 }}>
                    CoLogic
                  </span>
                  <span style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1, marginLeft: '0.25rem' }}>
                    Technologies
                  </span>
                </div>
              </div>
            </Link>
            <p
              className="text-white/70 text-sm leading-relaxed mb-6"
              style={{ fontFamily: BODY_FONT }}
            >
              Strategic technology consulting for mid-market and enterprise organizations. We deliver outcomes, not just recommendations.
            </p>

            {/* Social links — non-clickable placeholders until real URLs are confirmed */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <div
                    key={social.label}
                    aria-label={social.label}
                    title={`${social.label} — coming soon`}
                    className="w-9 h-9 rounded-sm flex items-center justify-center"
                    style={{ color: 'rgba(255,255,255,0.50)', border: '1px solid rgba(255,255,255,0.15)', cursor: 'default' }}
                  >
                    <Icon size={16} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4
              className="text-white text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: BODY_FONT, fontWeight: 500, letterSpacing: '0.12em' }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span
                      className="text-white/65 text-sm hover:text-white transition-colors duration-200 cursor-pointer"
                      style={{ fontFamily: BODY_FONT }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4
              className="text-white text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: BODY_FONT, fontWeight: 500, letterSpacing: '0.12em' }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span
                      className="text-white/65 text-sm hover:text-white transition-colors duration-200 cursor-pointer"
                      style={{ fontFamily: BODY_FONT }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info (plain text) + newsletter placeholder */}
          <div>
            <h4
              className="text-white text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: BODY_FONT, fontWeight: 500, letterSpacing: '0.12em' }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-4 mb-8">
              {/* Email — plain text, non-clickable */}
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-[#2ECC71] mt-0.5 flex-shrink-0" />
                <span
                  className="text-white/80 text-sm leading-relaxed select-text"
                  style={{ fontFamily: BODY_FONT }}
                >
                  hello@cologic.tech
                </span>
              </div>
              {/* Phone — static placeholder, non-clickable */}
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#2ECC71] mt-0.5 flex-shrink-0" />
                <span
                  className="text-white/80 text-sm leading-relaxed select-text"
                  style={{ fontFamily: BODY_FONT }}
                >
                  +1 (XXX) XXX-XXXX
                </span>
              </div>
              {/* Location — plain text, non-clickable */}
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#2ECC71] mt-0.5 flex-shrink-0" />
                <span
                  className="text-white/80 text-sm leading-relaxed"
                  style={{ fontFamily: BODY_FONT }}
                >
                  Remote-first · Available globally
                </span>
              </div>
            </div>

            {/* Newsletter placeholder — disabled */}
            <div>
              <p
                className="text-white/30 text-xs mb-3"
                style={{ fontFamily: BODY_FONT }}
              >
                Newsletter coming soon
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  disabled
                  className="flex-1 px-3 py-2 text-sm rounded-sm bg-white/5 border border-white/10 text-white/30 placeholder:text-white/20 outline-none"
                  style={{ fontFamily: BODY_FONT, cursor: 'not-allowed' }}
                />
                <button
                  disabled
                  className="px-4 py-2 text-sm rounded-sm bg-[#2ECC71]/20 text-white/25 flex-shrink-0"
                  style={{ fontFamily: BODY_FONT, cursor: 'not-allowed' }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p
              className="text-white/30 text-xs"
              style={{ fontFamily: BODY_FONT }}
            >
              &copy; {new Date().getFullYear()} CoLogic Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <span
                  key={item}
                  className="text-white/30 text-xs hover:text-white/60 transition-colors duration-200 cursor-pointer"
                  style={{ fontFamily: BODY_FONT }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
