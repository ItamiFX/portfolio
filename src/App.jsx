import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import StageTBMCore from './components/StageTBMCore'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import { AnimationProvider } from './contexts/animations'

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('main section > .container')
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    targets.forEach(target => observer.observe(target))
    return () => observer.disconnect()
  }, [])
  return (
    <AnimationProvider>
      <div className="app-root">
        <Header />
        <main>
          <AnimatePresence>
            <Hero key="hero" />
            <Projects key="projects" />
            <About key="about" />
            <Skills key="skills" />
            <StageTBMCore key="stage-tbmcore" />
            <Contact key="contact" />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  )
}
