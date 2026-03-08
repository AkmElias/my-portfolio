import { Briefcase, MapPin, GraduationCap, Code } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const facts = [
  { icon: Briefcase, value: '6+ Years', label: 'Professional Experience' },
  { icon: MapPin, value: 'Sylhet, BD', label: 'Based in' },
  { icon: GraduationCap, value: 'B.Sc. in CSE', label: 'Computer Science' },
  { icon: Code, value: 'CP Enthusiast', label: 'Competitive Programming' },
]

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="about" className="reveal-fade-up px-5 lg:px-20 py-[60px] lg:py-[100px] flex flex-col gap-8 lg:gap-12">
      <div className="flex flex-col gap-2 lg:gap-3">
        <span className="font-mono text-[11px] lg:text-xs font-semibold text-portfolio-accent tracking-[2px]">
          01 — ABOUT ME
        </span>
        <h2 className="font-sans text-[28px] lg:text-[42px] font-bold italic text-portfolio-text">
          Get to know me.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px]">
        <div className="flex-1 flex flex-col gap-4 lg:gap-5">
          <p className="font-sans text-sm lg:text-base text-portfolio-text-secondary leading-[1.7]">
            Hi, I'm Elias — a Senior Software Engineer with over six years of professional
            experience shipping production software. I started my career writing API docs and fixing
            bugs, and today I architect features, integrate third-party systems, and lead technical
            decisions on market-leading products.
          </p>
          <p className="font-sans text-sm lg:text-base text-portfolio-text-secondary leading-[1.7]">
            My background in competitive programming gives me a strong foundation in data structures,
            algorithms, and analytical thinking.
          </p>
          <p className="hidden lg:block font-sans text-base text-portfolio-text-secondary leading-[1.7]">
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source, or mentoring fellow developers.
          </p>
        </div>

        <div className="w-full lg:w-[340px] grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
          {facts.map((fact) => (
            <div
              key={fact.value}
              className="flex items-center gap-3 lg:gap-4 p-4 lg:p-5 lg:px-6 rounded-xl bg-portfolio-surface border border-portfolio-border"
            >
              <fact.icon size={20} className="text-portfolio-accent flex-shrink-0 lg:w-6 lg:h-6" />
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[13px] lg:text-base font-bold text-portfolio-text">
                  {fact.value}
                </span>
                <span className="font-sans text-[11px] lg:text-[13px] text-portfolio-text-muted">
                  {fact.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
