import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  { num: '01', name: 'Fluent Cart', 'link': 'https://fluentcart.com' },
  { num: '02', name: 'Paymattic' , 'link': 'https://paymattic.com' },
  // { num: '03', name: 'Paymattic' , 'link': 'https://paymattic.com' },
]

export default function Projects() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="projects" className="reveal-fade-up px-5 lg:px-20 py-[60px] lg:py-[100px] bg-portfolio-surface-alt flex flex-col gap-8 lg:gap-12">
      <div className="flex flex-col gap-2 lg:gap-3">
        <span className="font-mono text-[11px] lg:text-xs font-semibold text-portfolio-accent tracking-[2px]">
          04 — PROJECTS
        </span>
        <h2 className="font-sans text-[28px] lg:text-[42px] font-bold italic text-portfolio-text">
          Things I've contributed to built.
        </h2>
      </div>

      <div className="flex flex-col">
        <div className="h-px bg-portfolio-border" />
        {projects.map((project) => (
          <div key={project.num}>
            <a
              target="_blank"
              href={project.link}
              className="group flex items-center justify-between py-5 lg:py-7 hover:pl-2 transition-all"
            >
              <div className="flex items-center gap-3 lg:gap-5">
                <span className="font-sans text-[22px] lg:text-[28px] italic font-light text-portfolio-text-muted">
                  {project.num}
                </span>
                <span className="font-sans text-lg lg:text-2xl italic font-semibold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                  {project.name}
                </span>
              </div>
              <ArrowUpRight
                size={20}
                className="text-portfolio-text group-hover:text-portfolio-accent transition-colors"
              />
            </a>
            <div className="h-px bg-portfolio-border" />
          </div>
        ))}
      </div>

      <a
        href="https://github.com/AkmElias"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-medium text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
      >
        See more on GitHub
        <ArrowUpRight size={16} />
      </a>
{/* 
      <div className="flex gap-12 lg:gap-16">
        {[
          { value: '100+', label: 'Repositories' },
          { value: '15+', label: 'Followers' },
          { value: '10+', label: 'Stars' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="font-sans text-3xl lg:text-4xl italic font-light text-portfolio-text">
              {stat.value}
            </span>
            <span className="font-sans text-sm text-portfolio-text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div> */}
    </section>
  )
}
