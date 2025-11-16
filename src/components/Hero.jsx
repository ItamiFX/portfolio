import React from 'react'
import { motion } from 'framer-motion'
import Particles from './Particles'

export default function Hero(){
  return (
    <section id="accueil" className="hero">
      <div className="container hero-inner" style={{position:'relative'}}>
        <Particles amount={90} />
        <motion.div className="hero-content" initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.8}} style={{position:'relative', zIndex:2}}>
          <h2>Bonjour, je suis</h2>
          <h1><span className="reveal-name">Killian Marquet</span></h1>

          <p>Étudiant en informatique — Passionné par la cybersécurité et les arts digitaux.</p>
          <a className="btn btn-primary" href="#contact">Me contacter</a>
        </motion.div>
      </div>
    </section>
  )
}
