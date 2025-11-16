import React from 'react'
import { motion } from 'framer-motion'

const nav = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' }
]

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <h1>Killian Marquet</h1>
          <motion.div className="typing" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}}>
            <span>Étudiant en Informatique</span>
          </motion.div>
        </div>

        <nav>
          <ul className="nav-menu">
            {nav.map(item => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
