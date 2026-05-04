/**
 * Blog Page — CoLogic Technologies
 * Design: Structured Modernism
 * Typography: Apple system font stack
 * Status: Placeholder — no articles, no fake cards, no loading states
 * Shows a clean "Insights coming soon" message
 */

import { Link } from 'wouter';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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

export default function Blog() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <Reveal>
                <span className="section-label-light mb-5 block">Insights &amp; Perspectives</span>
              </Reveal>
              <Reveal delay={100}>
                <h1
                  className="text-white"
                  style={{
                    fontFamily: SYSTEM_FONT,
                    fontWeight: 600,
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                  }}
                >
                  Technology thinking from the field
                </h1>
              </Reveal>
            </div>
            <div>
              <Reveal delay={200}>
                <p
                  className="text-white/55 leading-relaxed"
                  style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
                >
                  Practical perspectives on software delivery, DevOps, AI, and project management — written by practitioners.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coming Soon State ── */}
      <section className="bg-white py-32">
        <div className="container">
          <div className="max-w-xl">
            <Reveal>
              <div className="w-12 h-12 bg-[#F5F7FA] rounded-sm flex items-center justify-center mb-8">
                <BookOpen size={22} className="text-[#0B1F3A]" />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-[#0B1F3A] mb-4 leading-tight"
                style={{
                  fontFamily: SYSTEM_FONT,
                  fontWeight: 600,
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Insights coming soon
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p
                className="text-[#64748B] leading-relaxed mb-10"
                style={{ fontFamily: BODY_FONT, fontSize: '16px', lineHeight: 1.7 }}
              >
                Articles and perspectives from the CoLogic team will be published here. Check back soon.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex items-center gap-3 text-[#94A3B8] text-sm" style={{ fontFamily: BODY_FONT }}>
                <div className="w-4 h-px bg-[#2ECC71]" />
                Content will cover Java development, DevOps practices, AI integration, and project delivery
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#F5F7FA] py-16 border-t border-[#E8ECF2]">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="text-[#0B1F3A] font-semibold mb-1"
                style={{ fontFamily: SYSTEM_FONT, fontWeight: 600 }}
              >
                Have a technology question?
              </p>
              <p
                className="text-[#64748B] text-sm"
                style={{ fontFamily: BODY_FONT }}
              >
                Reach out directly — we&apos;re happy to discuss your challenges.
              </p>
            </div>
            <Link href="/contact">
              <span className="btn-ghost-dark whitespace-nowrap">
                Contact Us
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
