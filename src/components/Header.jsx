import React, { useEffect, useState } from 'react'
import { useAnimations } from '../contexts/animations'

const nav = [['#projets', 'Projets'], ['#a-propos', 'À propos'], ['#competences', 'Compétences'], ['#stage-tbmcore', 'Expérience']]

function ParticleLogo({ active }) {
  return <svg className={active ? 'particle-logo is-active' : 'particle-logo'} viewBox="0 0 32 32" aria-hidden="true">
    <path className="particle-logo-lines" d="M7 10.5 15.5 6 25 11.5 22 22 12 26 7 19.5Z M7 10.5 12 26 M15.5 6 22 22 M25 11.5 12 26" />
    <circle cx="7" cy="10.5" r="2.2" />
    <circle cx="15.5" cy="6" r="2.2" />
    <circle cx="25" cy="11.5" r="2.2" />
    <circle cx="22" cy="22" r="2.2" />
    <circle cx="12" cy="26" r="2.2" />
  </svg>
}

function ThemeLogo({ dark }) {
  return dark
    ? <svg className="theme-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" /></svg>
    : <svg className="theme-logo" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])
  const { animationsEnabled, toggleAnimations } = useAnimations()
  return <header className="site-header"><div className="container header-inner">
    <a className="wordmark" href="#accueil" aria-label="Killian Marquet, accueil">km<span>®</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav">{open ? 'Fermer −' : 'Menu +'}</button>
    <nav id="main-nav" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navigation principale"><ul className="nav-menu">
      {nav.map(([href, label]) => <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>)}
      <li><button onClick={toggleAnimations} className="animation-toggle-btn header-icon-button" aria-pressed={animationsEnabled} aria-label={animationsEnabled ? 'Désactiver les animations' : 'Activer les animations'}><ParticleLogo active={animationsEnabled} /></button></li>
      <li><button className="theme-toggle header-icon-button" onClick={() => setDark(!dark)} aria-pressed={dark} aria-label={dark ? 'Activer le mode jour' : 'Activer le mode nuit'}><ThemeLogo dark={dark} /></button></li>
      <li><a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Discutons</a></li>
    </ul></nav>
  </div></header>
}
