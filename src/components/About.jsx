import React from 'react'
import { motion } from 'framer-motion'
import photo from '/assets/killian.jpg'

export default function About(){
  return (
    <section id="a-propos" className="about">
      <div className="container">
        
        <motion.h2 
          className="section-title" 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0} } 
          viewport={{once:true}}
        >
          À propos de moi
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-photo-frame"
            initial={{ opacity: 0, scale: 0.85, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="photo-container">
              <img src={photo} alt="Photo de Killian" />
            </div>
          </motion.div>
 
          <motion.div 
            className="about-text" 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}}
          >
            <p>Je m'appelle Killian Marquet, j'ai 19 ans et je suis en BUT Informatique à l'IUT de Bordeaux</p>
            <p>Je m'intéresse particulièrement à la cybersécurité, aux arts digitaux et à l'auto-entreprenariat</p>
            <p>Ce portfolio est une ouverture sur mes projets, mes compétences.</p>
            <p>Je suis ouvert aux opportunités de stage étant disponible du 6 avril au 12 juin.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
