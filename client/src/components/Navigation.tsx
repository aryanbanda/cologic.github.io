/**
 * Navigation — CoLogic Technologies
 * Design: Structured Modernism
 * Typography: Apple system font stack
 * - Sticky header, minimal chrome, clear spacing
 * - Navy logo, system-font nav links with green underline on hover/active
 * - Mobile: hamburger menu with slide-down panel
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

const SYSTEM_FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif";
const BODY_FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isLight = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2.5 group">
              {/* Logomark */}
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                style={{ backgroundColor: '#0B1F3A', border: 'none' }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="6" height="6" fill="#2ECC71" />
                  <rect x="10" y="2" width="6" height="6" fill="white" opacity="0.7" />
                  <rect x="2" y="10" width="6" height="6" fill="white" opacity="0.7" />
                  <rect x="10" y="10" width="6" height="6" fill="#2ECC71" opacity="0.5" />
                </svg>
              </div>
              <div>
                <span
                  style={{ fontFamily: SYSTEM_FONT, fontWeight: 600, fontSize: '1.0625rem', color: '#0B1F3A', lineHeight: 1, letterSpacing: '-0.01em' }}
                >
                  CoLogic
                </span>
                <span
                  style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: '1.0625rem', color: 'rgba(11,31,58,0.55)', lineHeight: 1, marginLeft: '0.25rem' }}
                >
                  Technologies
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`nav-link ${location === link.href ? 'active' : ''}`}
                  style={{ color: '#0B1F3A' }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <span
                className="btn-primary text-sm py-2.5 px-5"
                style={!isLight ? { boxShadow: '0 4px 14px rgba(46,204,113,0.3)' } : {}}
              >
                Get a Consultation
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: '#0B1F3A' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#E8ECF2] pt-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block py-3 px-2 border-b border-[#F5F7FA] transition-colors hover:text-[#2ECC71] ${
                      location === link.href ? 'text-[#2ECC71]' : 'text-[#0B1F3A]'
                    }`}
                    style={{ fontFamily: BODY_FONT, fontWeight: 500, fontSize: '15px' }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="mt-4">
                <Link href="/contact">
                  <span className="btn-primary w-full justify-center text-sm">
                    Get a Consultation
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
