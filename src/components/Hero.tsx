import { ArrowDown, Mail, Github, Linkedin, Twitter, Facebook } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface HeroProps {
  isDark: boolean
}

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/AkmElias' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/akm-elias/' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/EliasAkm' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/akm.elias/' },
]

export default function Hero({ isDark }: HeroProps) {
  const heroPhoto = isDark ? '/my_picture_dark.png' : '/my_picture_light.png'
  const textRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => textRef.current?.classList.add('revealed'), 200)
    setTimeout(() => photoRef.current?.classList.add('revealed'), 500)
  }, [])

  return (
    <section id="hero" className="relative min-h-[400px] lg:h-[700px] overflow-hidden">
      {/* Mobile layout: stacked / Desktop: side by side */}
      <div className="flex flex-col lg:block px-5 lg:px-20 py-10 lg:py-0">
        {/* Hero Photo - mobile: centered circle */}
        <div className="lg:hidden flex justify-center mb-6">
          <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-2 border-portfolio-accent">
            <img src={heroPhoto} alt="AKM Elias" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Hero Text */}
        <div ref={textRef} className="reveal-fade-up lg:absolute lg:left-20 lg:top-[120px] flex flex-col items-center lg:items-start gap-4 lg:gap-6 max-w-[680px]">
          <span className="font-mono text-sm tracking-[2px] text-portfolio-text-secondary border border-portfolio-border rounded-full px-4 py-1.5">
            Senior Software Engineer — Sylhet, Bangladesh
          </span>
          <h1 className="font-mono text-4xl lg:text-[64px] font-bold text-portfolio-text leading-tight text-center lg:text-left">
            AKM Elias
          </h1>
          <p className="font-sans text-[15px] lg:text-lg text-portfolio-text-secondary leading-[1.6] text-center lg:text-left">
            I build robust web applications and solve complex problems with clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full lg:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-portfolio-accent font-mono text-sm font-semibold text-portfolio-accent-fg hover:brightness-110 transition"
            >
              Get In Touch
              <Mail size={18} />
            </a>
            {/* <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-portfolio-border font-mono text-sm font-semibold text-portfolio-text hover:border-portfolio-accent transition-colors"
            >
              View Projects
              <ArrowDown size={18} />
            </a> */}
          </div>

          <div className="flex gap-4 mt-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Border Glow - desktop only */}
      <div
        ref={photoRef}
        className="reveal-fade-in hidden lg:block absolute right-[138px] top-[108px] w-[424px] h-[504px] rounded-[22px]"
        style={{
          border: '2px solid transparent',
          backgroundImage:
            'linear-gradient(var(--portfolio-bg), var(--portfolio-bg)), linear-gradient(to bottom, #FF8400, transparent 50%, #FF840066)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      />

      {/* Hero Photo - desktop */}
      <div className="hidden lg:block absolute right-[140px] top-[110px] w-[420px] h-[500px] rounded-[20px] overflow-hidden">
        <img src={heroPhoto} alt="AKM Elias" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}
