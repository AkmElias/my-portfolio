import { useState } from 'react'
import { Monitor, Puzzle, Smartphone, Wrench, FileText, Send, Calendar } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SubmitRequirementsModal from './SubmitRequirementsModal'
import BookCallModal from './BookCallModal'

const services = [
  {
    icon: Monitor,
    title: 'Web Applications',
    description:
      'Full-stack web apps built with React, Vue, Node.js, and modern frameworks. From SaaS platforms to dashboards — scalable, tested, and deployed.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'Cross-platform mobile apps with React Native or Flutter. Native feel, smooth performance, and real device testing before every release.',
  },
  {
    icon: Puzzle,
    title: 'WordPress Plugins',
    description:
      'Custom WordPress plugins and themes engineered with clean architecture, proper hooks, security best practices, and thorough testing.',
  },
  {
    icon: Wrench,
    title: 'Custom Software & Tools',
    description:
      'Automation scripts, CLI tools, APIs, browser extensions — any software solution tailored to your workflow. Properly engineered, not just AI-generated.',
  },
]

export default function Services() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const [activeModal, setActiveModal] = useState<'requirements' | 'call' | null>(null)

  return (
    <section
      ref={sectionRef}
      id="services"
      className="reveal-fade-up px-5 lg:px-20 py-[60px] lg:py-[100px] flex flex-col gap-8 lg:gap-12"
    >
      <div className="flex flex-col gap-2 lg:gap-3">
        <span className="font-mono text-[11px] lg:text-xs font-semibold text-portfolio-accent tracking-[2px]">
          05 — SERVICES
        </span>
        <h2 className="font-sans text-[28px] lg:text-[42px] font-bold italic text-portfolio-text">
          What I can build for you.
        </h2>
      </div>

      <p className="font-sans text-sm lg:text-base text-portfolio-text-secondary leading-[1.7]">
        I'm a senior software engineer who leverages AI as a productivity multiplier — not a
        replacement for engineering rigor. Every project I deliver is architected, tested, and
        production-ready. No copy-paste AI code, no shortcuts.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-3 lg:gap-4 p-6 lg:p-7 rounded-xl lg:rounded-2xl bg-portfolio-surface border border-portfolio-border shadow-[0_8px_32px_rgba(255,132,0,0.09)]"
          >
            <service.icon size={28} className="text-portfolio-accent lg:w-8 lg:h-8" />
            <h3 className="font-mono text-base lg:text-lg font-semibold text-portfolio-text">
              {service.title}
            </h3>
            <p className="font-sans text-[13px] lg:text-sm text-portfolio-text-secondary leading-[1.6]">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="flex flex-col gap-5 lg:gap-6 p-6 lg:p-8 rounded-xl lg:rounded-2xl bg-portfolio-surface border border-portfolio-border border-l-[3px] border-l-portfolio-accent">
          <FileText size={32} className="text-portfolio-accent lg:w-10 lg:h-10" />
          <h3 className="font-mono text-base lg:text-xl font-bold text-portfolio-text">
            Submit Project Requirements
          </h3>
          <p className="font-sans text-[13px] lg:text-sm text-portfolio-text-secondary leading-[1.6]">
            Have a project in mind? Share the details — scope, timeline, budget — and I'll get back
            to you within 24 hours with a proposal.
          </p>
          <button
            onClick={() => setActiveModal('requirements')}
            className="inline-flex items-center gap-2 w-fit px-6 lg:px-7 py-3 lg:py-3.5 rounded-lg bg-portfolio-accent font-mono text-[13px] lg:text-sm font-semibold text-portfolio-accent-fg hover:opacity-90 transition-opacity"
          >
            <Send size={14} className="lg:w-4 lg:h-4" />
            Submit Requirements
          </button>
        </div>

        <div className="flex flex-col gap-5 lg:gap-6 p-6 lg:p-8 rounded-xl lg:rounded-2xl bg-portfolio-surface border border-portfolio-border">
          <Calendar size={32} className="text-portfolio-accent lg:w-10 lg:h-10" />
          <h3 className="font-mono text-base lg:text-xl font-bold text-portfolio-text">
            Book a Call
          </h3>
          <p className="font-sans text-[13px] lg:text-sm text-portfolio-text-secondary leading-[1.6]">
            Prefer to talk it through? Pick a time that works for you and let's discuss your project
            on a quick 30-minute call.
          </p>
          <button
            onClick={() => setActiveModal('call')}
            className="inline-flex items-center gap-2 w-fit px-6 lg:px-7 py-3 lg:py-3.5 rounded-lg border-2 border-portfolio-accent font-mono text-[13px] lg:text-sm font-semibold text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-accent-fg transition-colors"
          >
            <Calendar size={14} className="lg:w-4 lg:h-4" />
            Schedule a Call
          </button>
        </div>
      </div>

      <SubmitRequirementsModal
        isOpen={activeModal === 'requirements'}
        onClose={() => setActiveModal(null)}
      />
      <BookCallModal
        isOpen={activeModal === 'call'}
        onClose={() => setActiveModal(null)}
      />
    </section>
  )
}
