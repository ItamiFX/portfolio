import React from 'react'
import { motion } from 'framer-motion'
import { useAnimations } from '../contexts/animations'

const nav = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' }
]

export default function Header(){
  const { animationsEnabled, toggleAnimations } = useAnimations()
  
  const TypingContainer = animationsEnabled ? motion.div : 'div'
  const typingProps = animationsEnabled 
    ? { initial: {opacity:0}, animate: {opacity:1}, transition: {delay:0.3} }
    : {}
  
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <h1>Killian Marquet</h1>
          <TypingContainer className="typing" {...typingProps}>
            <span>Étudiant en Informatique</span>
          </TypingContainer>
        </div>

        <nav>
          <ul className="nav-menu">
            {nav.map(item => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
            <li>
              <button 
                onClick={toggleAnimations}
                className="animation-toggle-btn"
                aria-label={animationsEnabled ? 'Désactiver les animations' : 'Activer les animations'}
                title={animationsEnabled ? 'Désactiver les animations' : 'Activer les animations'}
              >
                {animationsEnabled ? '▷' : '⏸'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
