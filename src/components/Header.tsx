import { Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  isDark: boolean
  onToggleTheme: () => void
}

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    // { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 h-[60px] lg:h-[72px] flex items-center justify-between px-6 lg:px-20 bg-portfolio-bg lg:bg-portfolio-nav-bg lg:backdrop-blur-md">
        <span className="font-mono text-lg lg:text-xl font-bold text-portfolio-accent">
          AKM Elias
        </span>

        <div className="flex items-center gap-3 lg:gap-8">
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm font-medium text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={onToggleTheme}
            className="w-11 h-11 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-portfolio-surface border border-portfolio-border hover:border-portfolio-accent transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={18} className="text-portfolio-accent" />
            ) : (
              <Moon size={18} className="text-portfolio-accent" />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center bg-portfolio-surface border border-portfolio-border"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={20} className="text-portfolio-text" />
            ) : (
              <Menu size={20} className="text-portfolio-text" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-portfolio-bg lg:hidden flex flex-col">
          {/* Nav header */}
          <div className="h-[60px] flex items-center justify-between px-6 flex-shrink-0">
            <span className="font-mono text-lg font-bold text-portfolio-accent">AKM Elias</span>
            <div className="flex items-center gap-3">
              <button
                onClick={onToggleTheme}
                className="w-11 h-11 rounded-full flex items-center justify-center bg-portfolio-surface border border-portfolio-border"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun size={18} className="text-portfolio-accent" />
                ) : (
                  <Moon size={18} className="text-portfolio-accent" />
                )}
              </button>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 rounded-full flex items-center justify-center bg-portfolio-surface border border-portfolio-border"
                aria-label="Close menu"
              >
                <X size={20} className="text-portfolio-text" />
              </button>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col pt-2">
            <div className="h-px bg-portfolio-border" />
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-5 font-sans text-lg text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
                >
                  {link.label}
                </a>
                <div className="h-px bg-portfolio-border" />
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
