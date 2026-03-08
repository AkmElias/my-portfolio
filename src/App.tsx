import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
// import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DotNavigation from './components/DotNavigation'

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <main>
        <Hero isDark={isDark} />
        <About />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
      <DotNavigation activeSection={activeSection} />
    </div>
  )
}
