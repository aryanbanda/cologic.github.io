/**
 * Services Page — CoLogic Technologies
 * Design: Structured Modernism
 * Typography: Apple system font stack
 * Services: EXACTLY the four provided capabilities
 *   01 — Java Full Stack Development
 *   02 — Project Management
 *   03 — DevOps
 *   04 — AI / AI-Driven Solutions
 * No invented sub-services. Descriptions: 1–2 lines, neutral, no metrics.
 */

import { Link } from 'wouter';
import { Code2, ClipboardList, GitBranch, BrainCircuit, ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SYSTEM_FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif";
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

const mainServices = [
  {
    icon: Code2,
    number: '01',
    title: 'Java Full Stack Development',
    tagline: 'End-to-end application development on the Java ecosystem',
    description:
      'We build and maintain full stack web applications using Java-based backend frameworks alongside modern frontend technologies. Our team covers the full delivery lifecycle from architecture to deployment.',
    capabilities: [
      'Backend development with Spring Boot and Java EE',
      'RESTful API and microservices design',
      'Frontend integration with React, Angular, or Vue',
      'Database design and ORM implementation',
      'Code review, refactoring, and technical debt reduction',
      'Application testing and quality assurance',
    ],
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Project Management',
    tagline: 'Structured delivery for technology initiatives',
    description:
      'We provide project management support for technology programs, ensuring scope, timelines, and stakeholder expectations are managed throughout the engagement.',
    capabilities: [
      'Project scoping, planning, and roadmap development',
      'Agile and hybrid delivery framework implementation',
      'Risk identification and mitigation planning',
      'Stakeholder communication and reporting',
      'Resource coordination and workstream management',
      'Post-delivery review and lessons learned',
    ],
  },
  {
    icon: GitBranch,
    number: '03',
    title: 'DevOps',
    tagline: 'Reliable pipelines and consistent delivery practices',
    description:
      'We help teams adopt DevOps practices that improve deployment frequency, reduce lead time, and increase operational stability across environments.',
    capabilities: [
      'CI/CD pipeline design and implementation',
      'Infrastructure as Code with Terraform or Ansible',
      'Container orchestration with Docker and Kubernetes',
      'Monitoring, alerting, and observability setup',
      'Environment management and configuration control',
      'DevOps maturity assessment and improvement planning',
    ],
  },
  {
    icon: BrainCircuit,
    number: '04',
    title: 'AI / AI-Driven Solutions',
    tagline: 'Practical AI integration for business workflows',
    description:
      'We help organizations identify where AI can add value and implement solutions that integrate with existing systems and processes.',
    capabilities: [
      'AI use case identification and feasibility assessment',
      'Machine learning model development and integration',
      'Natural language processing and document automation',
      'AI-assisted workflow and process optimization',
      'LLM integration and prompt engineering',
      'Model monitoring and performance evaluation',
    ],
  },
];

export default function Services() {
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
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(46,204,113,0.3), transparent)' }}
        />
        <div className="container relative z-10">
          <Reveal>
            <span className="section-label-light mb-5 block">Our Services</span>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="text-white leading-tight mb-6"
              style={{
                fontFamily: SYSTEM_FONT,
                fontWeight: 600,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                letterSpacing: '-0.02em',
                maxWidth: '36rem',
                lineHeight: 1.05,
              }}
            >
              Four focused capabilities
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p
              className="text-white/55 leading-relaxed"
              style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6, maxWidth: '42rem' }}
            >
              CoLogic delivers across four core practice areas. Each engagement is staffed with practitioners who work directly on your problem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Main Services — alternating split layouts ── */}
      {mainServices.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={service.number}
            className={`py-24 ${isEven ? 'bg-white' : 'bg-[#F5F7FA]'}`}
          >
            <div className="container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start`}>
                {/* Text side */}
                <div className={isEven ? '' : 'lg:order-2'}>
                  {/* Number + icon */}
                  <Reveal>
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="text-[#E8ECF2] select-none"
                        style={{
                          fontFamily: SYSTEM_FONT,
                          fontWeight: 700,
                          fontSize: '3rem',
                          lineHeight: 1,
                          letterSpacing: '-0.04em',
                        }}
                      >
                        {service.number}
                      </span>
                      <div className="w-10 h-10 bg-[#0B1F3A] rounded-sm flex items-center justify-center">
                        <Icon size={20} className="text-[#2ECC71]" />
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={80}>
                    <h2
                      className="text-[#0B1F3A] mb-3 leading-tight"
                      style={{
                        fontFamily: SYSTEM_FONT,
                        fontWeight: 600,
                        fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {service.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={120}>
                    <p
                      className="text-[#2ECC71] text-sm font-medium mb-5 tracking-wide"
                      style={{ fontFamily: BODY_FONT }}
                    >
                      {service.tagline}
                    </p>
                  </Reveal>
                  <Reveal delay={160}>
                    <p
                      className="text-[#64748B] leading-relaxed mb-8"
                      style={{ fontFamily: BODY_FONT, fontSize: '16px', lineHeight: 1.7 }}
                    >
                      {service.description}
                    </p>
                  </Reveal>
                  <Reveal delay={200}>
                    <Link href="/contact">
                      <span className="btn-ghost-dark">
                        Discuss This Service
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>
                  </Reveal>
                </div>

                {/* Capabilities side */}
                <div className={isEven ? '' : 'lg:order-1'}>
                  <Reveal delay={100}>
                    <div className="bg-white border border-[#E8ECF2] rounded-sm p-8 shadow-[0_4px_24px_rgba(11,31,58,0.06)]">
                      <h4
                        className="text-[#0B1F3A] text-xs font-semibold mb-6 tracking-widest uppercase"
                        style={{ fontFamily: BODY_FONT, letterSpacing: '0.1em' }}
                      >
                        What&apos;s Included
                      </h4>
                      <ul className="flex flex-col gap-4">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-3">
                            <CheckCircle2
                              size={16}
                              className="text-[#2ECC71] flex-shrink-0 mt-0.5"
                            />
                            <span
                              className="text-[#0B1F3A] text-sm leading-relaxed"
                              style={{ fontFamily: BODY_FONT }}
                            >
                              {cap}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Bottom CTA ── */}
      <section className="bg-white py-20 border-t border-[#E8ECF2]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal>
              <h2
                className="text-[#0B1F3A] mb-5 leading-tight"
                style={{
                  fontFamily: SYSTEM_FONT,
                  fontWeight: 600,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Not sure which service fits your challenge?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p
                className="text-[#64748B] leading-relaxed mb-8"
                style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.6 }}
              >
                Most engagements span more than one area. Let&apos;s start with a conversation about your goals and work out the right approach together.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link href="/contact">
                <span className="btn-primary">
                  Start a Conversation
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
