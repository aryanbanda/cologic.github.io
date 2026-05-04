/**
 * About Page — CoLogic Technologies
 * Design: Structured Modernism
 * Typography: Apple system font stack (-apple-system, SF Pro)
 * - Clean storytelling layout, mix text + visual blocks
 * - No fabricated metrics, no fake team counts, no invented history
 */

import { Link } from 'wouter';
import { ArrowRight, Target, Users, Lightbulb, Award } from 'lucide-react';
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

const values = [
  {
    icon: Target,
    title: 'Outcome-Driven',
    description:
      'Every engagement is scoped around measurable business outcomes, not hours billed. We succeed when you succeed.',
  },
  {
    icon: Users,
    title: 'Embedded Partnership',
    description:
      'We work alongside your team, not above it. Knowledge transfer is built into every engagement from day one.',
  },
  {
    icon: Lightbulb,
    title: 'Vendor-Agnostic',
    description:
      'We have no preferred vendors or technology partnerships that could bias our recommendations. Only your interests matter.',
  },
  {
    icon: Award,
    title: 'Senior-Led Delivery',
    description:
      'No bait-and-switch. The consultants who engage with your business are the consultants who deliver it.',
  },
];

export default function About() {
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
                <span className="section-label-light mb-5 block">About CoLogic</span>
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
                  Built by practitioners, for practitioners
                </h1>
              </Reveal>
            </div>
            <div>
              <Reveal delay={200}>
                <p
                  className="text-white/55 leading-relaxed"
                  style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
                >
                  CoLogic was founded by technology leaders who had spent careers on the client side — and were frustrated by the gap between consulting recommendations and operational reality. We built the firm we wished existed.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story — narrative section ── */}
      <section className="bg-white py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: visual block */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative">
                  <div
                    className="rounded-sm overflow-hidden"
                    style={{ aspectRatio: '4/3' }}
                  >
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465411994/7GfjQqVjdQATxjupdFvdQS/about-visual-FkdbbiFKrmcazjGT8ZzwS3.webp"
                      alt="CoLogic Technologies — Technology Architecture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative accent block — no fabricated metric */}
                  <div
                    className="absolute -bottom-6 -right-6 bg-[#0B1F3A] text-white p-6 rounded-sm shadow-xl"
                    style={{ minWidth: '160px' }}
                  >
                    <div
                      className="text-[#2ECC71] mb-2"
                      style={{
                        fontFamily: SYSTEM_FONT,
                        fontWeight: 600,
                        fontSize: '1rem',
                        lineHeight: 1.3,
                      }}
                    >
                      Senior-led
                    </div>
                    <div
                      className="text-white/60 text-xs"
                      style={{ fontFamily: BODY_FONT, lineHeight: 1.5 }}
                    >
                      Every engagement
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: story text */}
            <div className="lg:col-span-7 lg:pl-8">
              <Reveal>
                <span className="section-label mb-5 block">Our Story</span>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  className="text-[#0B1F3A] mb-6"
                  style={{
                    fontFamily: SYSTEM_FONT,
                    fontWeight: 600,
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                  }}
                >
                  A different kind of technology consultancy
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p
                  className="text-[#64748B] mb-5"
                  style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
                >
                  CoLogic was founded by a group of technology executives who had grown frustrated with the traditional consulting model — firms that parachuted in senior partners to win business, then handed delivery to junior analysts who had never operated in an enterprise environment.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p
                  className="text-[#64748B] mb-5"
                  style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
                >
                  We built CoLogic on a different premise: that the best consulting comes from people who have sat in the CTO's chair, managed enterprise-scale migrations, and felt the pressure of board-level technology decisions. Our consultants are former operators, not career consultants.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <p
                  className="text-[#64748B]"
                  style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
                >
                  Today, we work with mid-market and enterprise organizations across financial services, healthcare, technology, and manufacturing — helping them navigate the complexity of modern technology with clarity and confidence.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="bg-[#F5F7FA] py-24">
        <div className="container">
          <div className="mb-14">
            <Reveal>
              <span className="section-label mb-5 block">What We Stand For</span>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="text-[#0B1F3A]"
                style={{
                  fontFamily: SYSTEM_FONT,
                  fontWeight: 600,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  maxWidth: '28rem',
                }}
              >
                Principles that guide every engagement
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 80}>
                  <div className="bg-white rounded-sm p-8 border border-[#E8ECF2] hover:shadow-[0_4px_24px_rgba(11,31,58,0.07)] transition-shadow duration-300">
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 bg-[#0B1F3A] rounded-sm flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[#2ECC71]" />
                      </div>
                      <div>
                        <h3
                          className="text-[#0B1F3A] mb-2"
                          style={{
                            fontFamily: SYSTEM_FONT,
                            fontWeight: 600,
                            fontSize: '1.0625rem',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {value.title}
                        </h3>
                        <p
                          className="text-[#64748B] text-sm leading-relaxed"
                          style={{ fontFamily: BODY_FONT }}
                        >
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Approach — replaces fabricated timeline ── */}
      <section className="bg-white py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="section-label mb-5 block">How We Work</span>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  className="text-[#0B1F3A] mb-6"
                  style={{
                    fontFamily: SYSTEM_FONT,
                    fontWeight: 600,
                    fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                  }}
                >
                  Deliberate, structured, accountable
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p
                  className="text-[#64748B] text-sm leading-relaxed"
                  style={{ fontFamily: BODY_FONT }}
                >
                  We grow our practice areas only when we can staff them with true domain experts — not generalists who learned on the job at your expense.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="relative">
                <div
                  className="absolute left-[3.25rem] top-0 bottom-0 w-px"
                  style={{ background: 'linear-gradient(to bottom, #2ECC71, #E8ECF2)' }}
                />
                <div className="flex flex-col gap-0">
                  {[
                    { label: 'Scoping', desc: 'We invest time upfront to understand your business context, constraints, and definition of success before proposing any solution.' },
                    { label: 'Transparency', desc: 'You have full visibility into our work, methodology, and progress at every stage. No black-box consulting.' },
                    { label: 'Knowledge Transfer', desc: 'We document everything and train your team as we go. The goal is to leave you more capable, not more dependent.' },
                    { label: 'Accountability', desc: 'We tie our success to yours. Engagements are scoped around outcomes, not time-and-materials billing.' },
                  ].map((item, i) => (
                    <Reveal key={item.label} delay={i * 80}>
                      <div className="flex items-start gap-6 pb-8">
                        <div
                          className="flex-shrink-0 w-24 text-right"
                          style={{
                            fontFamily: SYSTEM_FONT,
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            color: '#2ECC71',
                            paddingTop: '0.125rem',
                          }}
                        >
                          {item.label}
                        </div>
                        <div className="flex-shrink-0 w-2.5 h-2.5 bg-[#2ECC71] rounded-full mt-1.5 relative z-10" />
                        <p
                          className="text-[#0B1F3A] text-sm leading-relaxed"
                          style={{ fontFamily: BODY_FONT, fontWeight: 500 }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Coming Soon ── */}
      <section className="bg-[#0B1F3A] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <Reveal>
              <span className="section-label-light mb-5 block">Our Team</span>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="text-white mb-6"
                style={{
                  fontFamily: SYSTEM_FONT,
                  fontWeight: 600,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                }}
              >
                Senior consultants across four practice areas
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p
                className="text-white/55 mb-8"
                style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
              >
                Our consultants bring backgrounds spanning enterprise technology leadership and hands-on delivery. Full team profiles are coming soon.
              </p>
            </Reveal>

            {/* Placeholder team grid */}
            <Reveal delay={300}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-sm bg-white/5 border border-white/10 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div
                        className="w-10 h-10 bg-white/10 rounded-full mx-auto mb-2 flex items-center justify-center"
                      >
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: BODY_FONT }}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                      </div>
                      <div
                        className="text-white/20 text-xs"
                        style={{ fontFamily: BODY_FONT }}
                      >
                        Coming Soon
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center gap-3 text-white/40 text-sm" style={{ fontFamily: BODY_FONT }}>
                <div className="w-4 h-px bg-[#2ECC71]" />
                Full team profiles coming soon
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-white py-20 border-t border-[#E8ECF2]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <Reveal>
                <h2
                  className="text-[#0B1F3A] mb-3"
                  style={{
                    fontFamily: SYSTEM_FONT,
                    fontWeight: 600,
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                  }}
                >
                  Ready to work with us?
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p
                  className="text-[#64748B]"
                  style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
                >
                  Start with a no-obligation strategy conversation.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <Link href="/contact">
                <span className="btn-primary whitespace-nowrap">
                  Get in Touch
                  <ArrowRight size={16} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
