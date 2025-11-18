import React from 'react'
import { motion } from 'framer-motion'

import imgVm from '/assets/vm.png'
import imgGraphes from '/assets/graphes.png'
import imgIHM from '/assets/IHM.png'
import imgLowatem from '/assets/lowatem-gui.png'
import imgTresor from '/assets/tresor.png'
import imgLaby from '/assets/labyri3.png'
import imgOdomo from '/assets/odomo.png'
import imgBD from '/assets/mcd.png'
import imgSCH from '/assets/sch.png'
import imgVinted from '/assets/botv.png'


const projects = [
  { title: 'Interface graphique de jeu', desc: 'Interface graphique pour jeu de plateau — UI, animations et menus', link: 'projects/interface-graphique-jeu.html', image: imgIHM },
  { title: "Jeu de plateau", desc: 'Implémentation des niveaux d’un jeu en Java', link: 'projects/jeu-ia.html', image: imgLowatem },
  { title: 'Visualisation de données', desc: 'Visualisation de CSV sous forme de graphes, comparatifs de données, superpositions...', link: 'projects/visualisation-de-donnees.html', image: imgSCH },
  { title: 'Visualisation de graphes', desc: 'Application Java de visualisation', link: 'projects/visualisation-graphes.html', image: imgGraphes },
  { title: 'Installation de poste', desc: 'Installation de poste virtuel léger en suivant un cahier des charges', link: 'projects/installation-poste.html', image: imgVm },
  { title: 'Bot Discord - Vinted', desc: 'Scraping & automation via Discord', link: 'projects/bot-discord.html', image: imgVinted },
  { title: 'Pixel War', desc: 'Jeu front-end en HTML/CSS/JS', link: 'projects/pixel-war.html', image: imgTresor },
  { title: 'Labyrinthe', desc: "Prototype d'un labyrinthe interactif — génération & IA", link: 'projects/labyrinthe.html', image: imgLaby }
]

export default function Projects(){
  return (
    <section id="projets" className="projects">
      <div className="container">
        <h2 className="section-title">Mes projets</h2>

        <div className="projects-grid">
          {projects.map((p,i) => (
            <motion.article
              key={p.title}
              className="project-card"
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1,y:0}}
              transition={{delay: i*0.08}}
              viewport={{once:true}}
              onClick={() => {
                if (!p.link) return
                const href = p.link.startsWith('/') ? p.link : `/${p.link}`
                window.location.href = href
              }}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && p.link) {
                  const href = p.link.startsWith('/') ? p.link : `/${p.link}`
                  window.location.href = href
                }
              }}
              tabIndex={0}
              role="link"
            >
              <div className="project-image">
                <div
                  className="placeholder-image"
                  style={ p.image ? { ['--project-image']: `url('${p.image}')` } : {} }
                  aria-label={p.title}
                >{!p.image && p.title.split(' ')[0]}</div>
              </div>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
