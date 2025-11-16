import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <AnimatePresence>
          <Hero key="hero" />
          <About key="about" />
          <Skills key="skills" />
          <Projects key="projects" />
          <Contact key="contact" />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
