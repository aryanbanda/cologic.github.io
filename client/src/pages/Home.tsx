/**
 * Home Page — CoLogic Technologies
 * Design: Structured Modernism
 * Typography: Apple system font stack (-apple-system, SF Pro)
 * Sections:
 *   1. Hero — split layout, dark navy, circuit visual, dual CTA
 *   2. What We Do — left text + right accent block, white bg
 *   3. Services — structured capability panels, neutral bg
 *   4. How We Work — horizontal process flow, dark navy bg
 *   5. Why Choose Us — asymmetric layout, white bg
 *   6. CTA — dark bg, centered, strong button
 */

import { Link } from 'wouter';
import { ArrowRight, ChevronRight, Code2, ClipboardList, GitBranch, BrainCircuit, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SYSTEM_FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif";
const BODY_FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif";

// ── Reveal wrapper ──────────────────────────────────────────

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
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── Services data ────────────────────────────────────────────

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Java Full Stack Development',
    description:
      'End-to-end application development using Java-based backend frameworks and modern frontend technologies, covering the full delivery lifecycle.',
    tags: ['Spring Boot', 'REST APIs', 'React', 'Microservices'],
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Project Management',
    description:
      'Structured delivery support for technology programs, managing scope, timelines, and stakeholder expectations throughout the engagement.',
    tags: ['Agile', 'Roadmapping', 'Risk Management', 'Reporting'],
  },
  {
    icon: GitBranch,
    number: '03',
    title: 'DevOps',
    description:
      'Adoption of DevOps practices that improve deployment frequency, reduce lead time, and increase operational stability across environments.',
    tags: ['CI/CD', 'Kubernetes', 'Terraform', 'Observability'],
  },
  {
    icon: BrainCircuit,
    number: '04',
    title: 'AI / AI-Driven Solutions',
    description:
      'Practical AI integration for business workflows, from use case identification through model development and deployment into existing systems.',
    tags: ['Machine Learning', 'NLP', 'LLM Integration', 'Automation'],
  },
];

// ── Process steps ────────────────────────────────────────────

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Deep-dive assessment of your current technology landscape, business objectives, and constraints.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We develop a precise roadmap with clear milestones, risk mitigation, and measurable outcomes.',
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'Hands-on implementation with embedded consultants who work alongside your team.',
  },
  {
    number: '04',
    title: 'Optimization',
    description:
      'Continuous monitoring, refinement, and knowledge transfer to ensure lasting results.',
  },
];

// ── Why CoLogic reasons ─────────────────────────────────────

const whyReasons = [
  'Vendor-agnostic recommendations, always in your interest',
  'Fixed-scope engagements — no scope creep, no surprises',
  'Embedded delivery model: we work as part of your team',
  'Post-engagement support and knowledge transfer included',
  'Business-first approach: technology decisions tied to outcomes',
  'Clear accountability at every stage of the engagement',
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════════
          1. HERO SECTION
          Desktop: 50/50 split layout (commercial left, government right)
          Mobile: Stacked vertically (commercial top, government bottom)
          ═══════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          paddingTop: '6rem',
          paddingBottom: '5rem',
          background: '#F5F7FA',
        }}
      >
        {/* DESKTOP: LEFT 50% - Commercial background image (reduced intensity) */}
        <div
          className="hidden lg:block absolute inset-0 left-0 right-1/2 opacity-[0.35]"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663465411994/7GfjQqVjdQATxjupdFvdQS/934e6f8c0bec015b7dd28ef4bf74839d_87e991fa.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center left',
            filter: 'blur(0.08px) brightness(0.92) contrast(0.95) saturate(0.90)',
          }}
        />
        {/* DESKTOP: RIGHT 50% - Government background image (reduced intensity) */}
        <div
          className="hidden lg:block absolute inset-0 left-1/2 right-0 opacity-[0.38]"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663465411994/7GfjQqVjdQATxjupdFvdQS/nils-huenerfuerst-bCYl_Bh-XPc-unsplash_584ec716.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            filter: 'blur(0.08px) brightness(0.95) contrast(1.00) saturate(0.92)',
          }}
        />

        {/* DESKTOP: Subtle soft gradient transition at center (2-5% width) */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(245,247,250,0) 0%, rgba(245,247,250,0) 47%, rgba(245,247,250,0.04) 50%, rgba(245,247,250,0) 53%, rgba(245,247,250,0) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* DESKTOP: Stronger left-side overlay for text readability (35-40% zone) */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(245,247,250,0.32) 0%, rgba(245,247,250,0.28) 35%, rgba(245,247,250,0.12) 50%, rgba(245,247,250,0.04) 100%)',
          }}
        />

         {/* MOBILE: TOP SECTION - Commercial background image (reduced intensity) */}
        <div
          className="lg:hidden absolute top-0 left-0 right-0 h-1/2 opacity-[0.35]"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663465411994/7GfjQqVjdQATxjupdFvdQS/934e6f8c0bec015b7dd28ef4bf74839d_87e991fa.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(0.08px) brightness(0.92) contrast(0.95) saturate(0.90)',
          }}
        />
        {/* MOBILE: BOTTOM SECTION - Government background image (reduced intensity) */}
        <div
          className="lg:hidden absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.38]"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663465411994/7GfjQqVjdQATxjupdFvdQS/nils-huenerfuerst-bCYl_Bh-XPc-unsplash_584ec716.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(0.08px) brightness(0.95) contrast(1.00) saturate(0.92)',
          }}
        />

        {/* MOBILE: Vertical gradient transition at center (5-10% height) */}
        <div
          className="lg:hidden absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(245,247,250,0) 0%, rgba(245,247,250,0) 45%, rgba(245,247,250,0.06) 50%, rgba(245,247,250,0) 55%, rgba(245,247,250,0) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* MOBILE: Stronger overlay for text readability on mobile */}
        <div
          className="lg:hidden absolute inset-0 top-0 h-1/2"
          style={{
            background: 'linear-gradient(to bottom, rgba(245,247,250,0.28), rgba(245,247,250,0.12))',
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="animate-fade-up" style={{ animationDelay: '0ms', opacity: 0 }}>
              <span className="section-label mb-5 block" style={{ color: '#0B1F3A', fontWeight: 500, opacity: 0.85 }}>
                Strategic Technology Partners
              </span>
            </div>

            {/* Headline */}
            <div className="animate-fade-up" style={{ animationDelay: '100ms', opacity: 0 }}>
              <h1
                className="mb-6"
                style={{
                  color: '#0B1F3A',
                  fontFamily: SYSTEM_FONT,
                  fontWeight: 700,
                  fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  textShadow: '0 1px 3px rgba(255,255,255,0.3)',
                }}
              >
                Technology Strategy
                <br />
                That Drives{' '}
                <span className="text-[#2ECC71]">Business Results</span>
              </h1>
            </div>

            {/* Subtext */}
            <div className="animate-fade-up" style={{ animationDelay: '200ms', opacity: 0 }}>
              <p
                className="mb-10 max-w-xl"
                style={{ color: '#0B1F3A', fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6, opacity: 0.90 }}
              >
                We partner with mid-market and enterprise organizations to architect, implement, and optimize technology solutions that create measurable competitive advantage.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '300ms', opacity: 0 }}
            >
              <Link href="/contact">
                <span className="btn-primary">
                  Schedule a Consultation
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/services">
                <span className="btn-ghost" style={{ borderColor: '#0B1F3A', color: '#0B1F3A', fontWeight: 600 }}>
                  Explore Services
                  <ChevronRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* ═══════════════════════════════════════════════════════
          2. WHAT WE DO
          Split layout: left text / right accent block
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: text */}
            <div>
              <Reveal>
                <span className="section-label mb-5 block">What We Do</span>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  className="text-[#0B1F3A] mb-6"
                  style={{
                    fontFamily: SYSTEM_FONT,
                    fontWeight: 600,
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                  }}
                >
                  We solve complex technology problems with strategic clarity
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p
                  className="text-[#64748B] mb-6"
                  style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
                >
                  CoLogic Technologies bridges the gap between business ambition and technology execution. We don't just advise — we embed with your team to architect and deliver solutions that work in the real world.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p
                  className="text-[#64748B] mb-10"
                  style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
                >
                  Our consultants bring deep domain expertise across cloud, security, data, and digital transformation — combined with the business acumen to translate technical decisions into competitive advantage.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <Link href="/about">
                  <span className="btn-ghost-dark">
                    Our Approach
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </Reveal>
            </div>

            {/* Right: accent block */}
            <div className="relative">
              <Reveal delay={150}>
                <div className="bg-[#F5F7FA] rounded-sm p-10 relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-5"
                    style={{
                      background: 'radial-gradient(circle, #0B1F3A 0%, transparent 70%)',
                    }}
                  />
                  <div className="flex flex-col gap-6">
                    {[
                      {
                        title: 'Technology Strategy',
                        desc: 'Roadmaps aligned to business outcomes, not technology trends.',
                      },
                      {
                        title: 'Architecture & Engineering',
                        desc: 'Scalable, secure, and maintainable systems designed for longevity.',
                      },
                      {
                        title: 'Transformation Delivery',
                        desc: 'Hands-on execution with embedded consultants and clear accountability.',
                      },
                    ].map((item, i) => (
                      <div key={i} className="accent-bar">
                        <h4
                          className="text-[#0B1F3A] mb-1.5"
                          style={{ fontFamily: SYSTEM_FONT, fontWeight: 600, fontSize: '1rem' }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-[#64748B] text-sm leading-relaxed"
                          style={{ fontFamily: BODY_FONT }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. SERVICES — Capability panels
          ═══════════════════════════════════════════════════════ */}
      <section
        className="section-neutral py-28 relative overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663465411994/7GfjQqVjdQATxjupdFvdQS/services-bg-DgkKEbABFjmcS4mWXz7s3g.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <Reveal>
                <span className="section-label mb-5 block">Core Capabilities</span>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  className="text-[#0B1F3A]"
                  style={{
                    fontFamily: SYSTEM_FONT,
                    fontWeight: 600,
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                    maxWidth: '28rem',
                  }}
                >
                  Four disciplines, one integrated practice
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <Link href="/services">
                <span className="btn-ghost-dark whitespace-nowrap">
                  All Services
                  <ArrowRight size={16} />
                </span>
              </Link>
            </Reveal>
          </div>

          {/* Capability blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.number} delay={i * 80}>
                  <div className="capability-block h-full">
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="text-[#E8ECF2] select-none"
                        style={{
                          fontFamily: SYSTEM_FONT,
                          fontWeight: 600,
                          fontSize: '3.5rem',
                          lineHeight: 1,
                          letterSpacing: '-0.04em',
                        }}
                      >
                        {service.number}
                      </span>
                      <div className="w-10 h-10 bg-[#F5F7FA] rounded-sm flex items-center justify-center">
                        <Icon size={20} className="text-[#0B1F3A]" />
                      </div>
                    </div>
                    <h3
                      className="text-[#0B1F3A] mb-3"
                      style={{
                        fontFamily: SYSTEM_FONT,
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-[#64748B] leading-relaxed mb-6 text-sm"
                      style={{ fontFamily: BODY_FONT }}
                    >
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 bg-[#F5F7FA] text-[#64748B] rounded-sm"
                          style={{ fontFamily: BODY_FONT, fontWeight: 500 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. HOW WE WORK — Horizontal process flow
          ═══════════════════════════════════════════════════════ */}
      <section className="section-navy py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(46,204,113,0.08) 0%, transparent 60%)',
          }}
        />
        <div className="container relative z-10">
          <div className="mb-16">
            <Reveal>
              <span className="section-label-light mb-5 block">Our Process</span>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="text-white"
                style={{
                  fontFamily: SYSTEM_FONT,
                  fontWeight: 600,
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  maxWidth: '32rem',
                }}
              >
                How we deliver results, every time
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 100}>
                <div className="relative pr-8 lg:pr-12 pb-8 lg:pb-0">
                  {i < processSteps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-[calc(100%-1.5rem)] w-full h-px z-10"
                      style={{
                        background: 'linear-gradient(to right, rgba(46,204,113,0.4), rgba(255,255,255,0.1))',
                      }}
                    />
                  )}
                  <div className="process-step-number mb-4">{step.number}</div>
                  <div className="w-2 h-2 bg-[#2ECC71] rounded-full mb-5" />
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontFamily: SYSTEM_FONT,
                      fontWeight: 600,
                      fontSize: '1.125rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/50 text-sm leading-relaxed"
                    style={{ fontFamily: BODY_FONT }}
                  >
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. WHY COLOGIC — Asymmetric layout
          White background, text-forward, no fabricated proof
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: heading + intro */}
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <span className="section-label mb-5 block">Why CoLogic</span>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  className="text-[#0B1F3A] mb-6"
                  style={{
                    fontFamily: SYSTEM_FONT,
                    fontWeight: 600,
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                  }}
                >
                  The difference between advice and accountability
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p
                  className="text-[#64748B] mb-8"
                  style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
                >
                  Most consulting firms deliver recommendations. We deliver outcomes. Our embedded model means our consultants are measured by the same metrics as your team.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="bg-[#F5F7FA] rounded-sm p-8 border-l-4 border-[#2ECC71]">
                  <p
                    className="text-[#0B1F3A] text-base leading-relaxed mb-4"
                    style={{ fontFamily: BODY_FONT, fontWeight: 500 }}
                  >
                    We believe technology consulting should be measured by business outcomes, not deliverables. Every engagement we take on is scoped around what success looks like for your organization.
                  </p>
                  <p
                    className="text-[#64748B] text-sm"
                    style={{ fontFamily: BODY_FONT }}
                  >
                    — CoLogic Technologies
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right: reasons list */}
            <div className="flex flex-col gap-5">
              {whyReasons.map((reason, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex items-start gap-4 p-5 rounded-sm hover:bg-[#F5F7FA] transition-colors duration-200 group">
                    <CheckCircle2
                      size={20}
                      className="text-[#2ECC71] flex-shrink-0 mt-0.5"
                    />
                    <p
                      className="text-[#0B1F3A] leading-relaxed"
                      style={{ fontFamily: BODY_FONT, fontWeight: 500 }}
                    >
                      {reason}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. CTA SECTION
          ═══════════════════════════════════════════════════════ */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663465411994/7GfjQqVjdQATxjupdFvdQS/cta-bg-gmVTakxuGjEQuVkda5ei6Z.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/85" />

        <div className="container relative z-10 text-center">
          <Reveal>
            <span className="section-label-light mb-6 inline-flex">
              Ready to Start?
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="text-white mb-6 mx-auto"
              style={{
                fontFamily: SYSTEM_FONT,
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                maxWidth: '42rem',
              }}
            >
              Let's build your technology advantage together
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p
              className="text-white/55 mb-10 mx-auto"
              style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6, maxWidth: '36rem' }}
            >
              Schedule a complimentary strategy session with a senior consultant. No sales pitch — just honest analysis of your technology landscape.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <span className="btn-primary text-base px-8 py-4">
                  Book a Strategy Session
                  <ArrowRight size={18} />
                </span>
              </Link>
              <Link href="/services">
                <span className="btn-ghost text-base px-8 py-4">
                  View Our Services
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
