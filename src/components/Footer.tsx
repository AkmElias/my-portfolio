export default function Footer() {
  const navLinks = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

  return (
    <footer className="px-5 lg:px-20 py-8 lg:py-10 bg-portfolio-surface border-t border-portfolio-border flex flex-col items-center gap-4 lg:gap-5">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 w-full">
        <span className="font-mono text-sm lg:text-base font-bold text-portfolio-accent">AKM Elias</span>
        <nav className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-sans text-xs lg:text-[13px] text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        <span className="hidden lg:block font-sans text-[13px] text-portfolio-text-muted">
          Designed & Built by AKM Elias
        </span>
      </div>

      <div className="h-px w-full bg-portfolio-border" />

      <span className="font-sans text-[11px] lg:text-xs text-portfolio-text-muted">
        © 2026 AKM Elias. All rights reserved.
      </span>
    </footer>
  )
}
