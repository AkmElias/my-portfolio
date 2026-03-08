import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactCards = [
  { icon: Mail, title: 'Email', value: 'akmelias11@gmail.com' },
  { icon: Phone, title: 'Phone', value: '+8801746065555' },
  { icon: MapPin, title: 'Location', value: 'Sylhet, Bangladesh' },
]

const socials = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Globe, label: 'Website', href: '#' },
]

export default function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="contact" className="reveal-fade-up px-5 lg:px-20 py-[60px] lg:py-[100px] flex flex-col items-center gap-6 lg:gap-12">
      <div className="flex flex-col items-center gap-2 lg:gap-3">
        <span className="font-mono text-[11px] lg:text-xs font-semibold text-portfolio-accent tracking-[2px]">
          05 — CONTACT
        </span>
        <h2 className="font-sans text-[28px] lg:text-[42px] font-bold italic text-portfolio-text text-center">
          Let's work together.
        </h2>
      </div>

      <p className="font-sans text-[15px] lg:text-lg text-portfolio-text-secondary leading-[1.6] text-center max-w-[600px]">
        Have a project in mind or just want to say hello? I'd love to hear from you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-6 w-full max-w-[900px]">
        {contactCards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-center gap-3 lg:gap-4 p-6 lg:p-7 rounded-2xl bg-portfolio-surface border border-portfolio-border shadow-[0_8px_32px_rgba(255,132,0,0.09)]"
          >
            <card.icon size={28} className="text-portfolio-accent lg:w-8 lg:h-8" />
            <span className="font-mono text-sm lg:text-base font-semibold text-portfolio-text">
              {card.title}
            </span>
            <span className="font-sans text-[13px] lg:text-sm text-portfolio-text-secondary text-center break-all sm:break-normal">
              {card.value}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-3 lg:gap-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-portfolio-surface border border-portfolio-border hover:border-portfolio-accent hover:text-portfolio-accent transition-colors"
          >
            <social.icon size={20} className="text-portfolio-text lg:w-[22px] lg:h-[22px]" />
          </a>
        ))}
      </div>
    </section>
  )
}
