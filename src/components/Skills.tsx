import { useScrollReveal } from '../hooks/useScrollReveal'

const skills = [
  'JavaScript',
  'Node.js',
  'Vue.js',
  'React',
  'PHP',
  'MySQL',
  'MongoDB',
  'GraphQL',
  'HTML',
  'CSS',
  'Git',
  'REST APIs',
  'C++',
]

export default function Skills() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="skills" className="reveal-fade-up px-5 lg:px-20 py-[60px] lg:py-[100px] flex flex-col gap-8 lg:gap-12">
      <div className="flex flex-col gap-2 lg:gap-3">
        <span className="font-mono text-[11px] lg:text-xs font-semibold text-portfolio-accent tracking-[2px]">
          03 — SKILLS
        </span>
        <h2 className="font-sans text-[28px] lg:text-[42px] font-bold italic text-portfolio-text">
          Technologies I work with.
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 lg:gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-mono text-xs lg:text-sm font-medium text-portfolio-text bg-portfolio-surface border border-portfolio-border hover:border-portfolio-accent hover:text-portfolio-accent transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
