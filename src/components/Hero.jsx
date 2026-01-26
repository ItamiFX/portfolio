import React from 'react'
import { motion } from 'framer-motion'
import Particles from './Particles'
import { useAnimations } from '../contexts/animations'

export default function Hero(){
  const { animationsEnabled } = useAnimations()
  
  const HeroContent = animationsEnabled ? motion.div : 'div'
  const contentProps = animationsEnabled 
    ? { initial: {y:30, opacity:0}, animate: {y:0, opacity:1}, transition: {duration:0.8} }
    : {}
  
  return (
    <section id="accueil" className="hero">
      <div className="container hero-inner" style={{position:'relative'}}>
        {animationsEnabled && <Particles amount={90} />}
        <HeroContent className="hero-content" {...contentProps} style={{position:'relative', zIndex:2}}>
          <h2>Bonjour, je suis</h2>
          <h1><span className="reveal-name">Killian Marquet</span></h1>

          <p>Étudiant en informatique — Développeur Full-Stack avec un intérêt pour la cybersécurité et les arts digitaux.</p>
          <a className="btn btn-primary" href="#contact">Me contacter</a>
        </HeroContent>
      </div>
    </section>
  )
}
