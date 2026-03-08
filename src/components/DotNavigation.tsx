const sections = ['hero', 'about', 'experience', 'skills', 'contact']

interface DotNavigationProps {
  activeSection: string
}

export default function DotNavigation({ activeSection }: DotNavigationProps) {
  return (
    <nav className="hidden lg:flex fixed right-[50px] top-1/2 -translate-y-1/2 z-50 flex-col gap-4 p-3 rounded-full bg-portfolio-surface border border-portfolio-border">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          aria-label={section}
          className={`rounded-full transition-all ${
            activeSection === section
              ? 'w-2.5 h-2.5 bg-portfolio-accent'
              : 'w-2 h-2 bg-portfolio-text-muted hover:bg-portfolio-accent'
          }`}
        />
      ))}
    </nav>
  )
}
