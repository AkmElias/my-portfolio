import { useScrollReveal } from '../hooks/useScrollReveal'

function RevealCard({ children, delay, className }: { children: React.ReactNode; delay: number; className: string }) {
  const ref = useScrollReveal<HTMLDivElement>(delay)
  return (
    <div ref={ref} className={`reveal-fade-up ${className}`}>
      {children}
    </div>
  )
}

const experiences = [
  {
    date: 'Sep 2024 — Present',
    company: 'Fluent-cart (AuthLab), Sylhet',
    role: 'Senior Software Engineer',
    bullets: [
      'Lead development of Fluent-cart — a high-performance e-commerce plugin for WordPress.',
      'Architect payment gateway integrations, subscriptions module, and co-implement tax module and other core modules.',
      'Build custom WordPress plugins with clean architecture, REST APIs, and Gutenberg blocks.',
      'Drive UI/UX improvements and mentor junior engineers through code reviews.',
    ],
    mobileBullets: [
      'Lead development of Fluent-cart e-commerce plugin.',
      'Architect payment integrations & checkout systems.',
    ],
    tech: ['WordPress', 'Plugins', 'Vue.js', 'PHP', 'MySQL', 'REST APIs'],
    mobileTech: ['Vue.js', 'PHP', 'MySQL'],
    featured: true,
  },
  {
    date: 'Dec 2021 — Aug 2024',
    company: 'AuthLab, Sylhet',
    role: 'Software Engineer',
    bullets: [
      'Integrated CRM apps and payment gateways into the existing product suite.',
      'Built customer-requested features and resolved bugs on a market-leading product.',
      'Redesigned and improved UI components for better usability.',
    ],
    mobileBullets: [
      'Integrated CRM apps and payment gateways.',
      'Built features and resolved bugs on market-leading product.',
    ],
    tech: ['WordPress', 'Plugins', 'Vue.js', 'PHP (OOP)', 'MySQL', 'Git'],
    mobileTech: ['Vue.js', 'PHP', 'MySQL', 'Git'],
    featured: false,
  },
  {
    date: 'Nov 2020 — Nov 2021',
    company: 'Bengal Infotech, Sylhet',
    role: 'Software Engineer',
    bullets: [
      'Built vendor-facing applications from the ground up.',
      'Owned the implementation of core business logic modules.',
      'Collaborated closely with senior engineers to establish best practices.',
    ],
    mobileBullets: null,
    tech: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
    mobileTech: null,
    featured: false,
  },
  {
    date: 'Sep 2019 — Mar 2020',
    company: 'CC LTD, Dhaka',
    role: 'Jr. Software Engineer',
    bullets: [
      'Authored comprehensive API documentation.',
      'Tested, triaged, and fixed reported issues.',
      'Contributed to front-end UI development.',
    ],
    mobileBullets: null,
    tech: ['JavaScript', 'HTML/CSS', 'Postman', 'Git'],
    mobileTech: null,
    featured: false,
  },
]

export default function Experience() {
  const headingRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="experience" className="px-5 lg:px-20 py-[60px] lg:py-[100px] bg-portfolio-surface-alt flex flex-col gap-8 lg:gap-12">
      <div ref={headingRef} className="reveal-fade-up flex flex-col gap-2 lg:gap-3">
        <span className="font-mono text-[11px] lg:text-xs font-semibold text-portfolio-accent tracking-[2px]">
          02 — EXPERIENCE
        </span>
        <h2 className="font-sans text-[28px] lg:text-[42px] font-bold italic text-portfolio-text">
          Where I've worked.
        </h2>
      </div>

      <div className="flex flex-col gap-4 lg:gap-6">
        {experiences.map((exp, i) => (
          <RevealCard
            key={exp.date}
            delay={i * 100}
            className={`flex flex-col lg:flex-row gap-3 lg:gap-8 p-5 lg:p-8 rounded-2xl bg-portfolio-surface border border-portfolio-border ${
              exp.featured
                ? 'shadow-[0_4px_20px_rgba(255,132,0,0.08)] border-l-[3px] border-l-portfolio-accent'
                : ''
            }`}
          >
            <div className="lg:w-[200px] flex-shrink-0 flex flex-col gap-1 lg:gap-2">
              <span className="font-mono text-[11px] lg:text-[13px] font-semibold text-portfolio-accent">
                {exp.date}
              </span>
              <span className="font-sans text-xs lg:text-sm text-portfolio-text-muted">
                {exp.company}
              </span>
            </div>

            <div className="flex-1 flex flex-col gap-3 lg:gap-4">
              <h3 className="font-mono text-base lg:text-[22px] font-bold text-portfolio-text">
                {exp.role}
              </h3>

              {/* Mobile bullets */}
              <div className="flex flex-col gap-1.5 lg:hidden">
                {(exp.mobileBullets ?? exp.bullets).map((bullet) => (
                  <p
                    key={bullet}
                    className="font-sans text-[13px] text-portfolio-text-secondary leading-[1.6]"
                  >
                    → {bullet}
                  </p>
                ))}
              </div>

              {/* Desktop bullets */}
              <div className="hidden lg:flex flex-col gap-2">
                {exp.bullets.map((bullet) => (
                  <p
                    key={bullet}
                    className="font-sans text-sm text-portfolio-text-secondary leading-[1.6]"
                  >
                    → {bullet}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 lg:gap-2">
                {/* Mobile tech */}
                <div className="flex flex-wrap gap-1.5 lg:hidden">
                  {(exp.mobileTech ?? exp.tech).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-[3px] rounded-full text-[10px] font-mono font-medium text-portfolio-text-secondary bg-portfolio-surface-alt border border-portfolio-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {/* Desktop tech */}
                <div className="hidden lg:flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[11px] font-mono font-medium text-portfolio-text-secondary bg-portfolio-surface-alt border border-portfolio-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  )
}
