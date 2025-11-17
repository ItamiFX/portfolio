import React from 'react'
import { motion } from 'framer-motion'

const listVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 24 } }
}

export default function Contact(){
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Me contacter</h2>
        <div className="contact-content">
          <motion.div className="contact-short" initial={{opacity:0, y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <p>Pour toute opportunité de stage :</p>

            <motion.ul className="contact-list" aria-label="Coordonnées" variants={listVariants} initial="hidden" whileInView="show" viewport={{once:true}}>
              <motion.li className="contact-item" variants={itemVariants}>
                <motion.a className="contact-link" href="mailto:marquetkillian71@gmail.com" whileHover={{scale:1.03}} whileTap={{scale:0.98}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 8.5L12 13 3 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="contact-label">marquetkillian71@gmail.com</span>
                </motion.a>
              </motion.li>

              <motion.li className="contact-item" variants={itemVariants}>
                <motion.a className="contact-link" href="http://www.linkedin.com/in/killian-marquet-b2797238b" target="_blank" rel="noreferrer" whileHover={{scale:1.03}} whileTap={{scale:0.98}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 1 0-4 0v6h-4v-12h4v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="8" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor"/>
                  </svg>
                  <span className="contact-label">Profil LinkedIn</span>
                </motion.a>
              </motion.li>

              <motion.li className="contact-item" variants={itemVariants}>
                <motion.a className="contact-link" href="tel:+330000000000" whileHover={{scale:1.03}} whileTap={{scale:0.98}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.38 1.76.76 2.57a2 2 0 0 1-.45 2.11L8.91 9.91a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.11-.45c.81.38 1.67.64 2.57.76A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="contact-label">+33 6 52 53 17 68</span>
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
