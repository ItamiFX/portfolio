import React from 'react'
import { motion } from 'framer-motion'
import photo1 from '/assets/Accueil.jpg'
import photo2 from '/assets/stage.png'

const technologies = [
  'WordPress',
  'PHP',
  'MariaDB',
  'HTML',
  'CSS',
  'JavaScript',
  'Apache2',
  'Debian 13',
  'SSH'
]

const galleryPhotos = [
  {
    src: photo1,
    alt: 'Accueil du site TBMCore',
    label: 'Accueil du site'
  },
  {
    src: photo2,
    alt: 'Capture du projet et de l’environnement de travail TBMCore',
    label: 'Vue du projet'
  }
]

export default function StageTBMCore(){
  return (
    <section id="stage-tbmcore" className="stage-tbmcore">
      <div className="container">
        <motion.div
          className="stage-layout"
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.55}}
          viewport={{once:true}}
        >
          <div className="stage-content">
            <span className="stage-eyebrow">Expérience professionnelle</span>
            <h2 className="section-title stage-title">Stage TBMCore</h2>
            <p className="stage-subtitle">
              Refonte du site web de l'unité TBMCore, unité d'appui et de recherche liée à l'Université de Bordeaux, au CNRS et à l'INSERM.
            </p>
            <p>
              Pendant mon stage chez TBMCore, j'ai participé à la refonte complète du site web de l'unité.
              L'objectif était de remplacer un site devenu lent, difficile à maintenir et dépendant de plusieurs
              extensions payantes.
            </p>
            <p>
              J'ai travaillé sur la mise en place d'un environnement WordPress, la création de pages,
              l'intégration de fonctionnalités dynamiques, l'optimisation du site et la migration vers un
              serveur de production.
            </p>
          </div>

          <div className="stage-side">
            <motion.div
              className="stage-info-card stage-date-card"
              initial={{opacity:0, x:24}}
              whileInView={{opacity:1, x:0}}
              transition={{delay:0.12}}
              viewport={{once:true}}
            >
              <span>Dates du stage</span>
              <strong>13 avril 2026 - 5 juin 2026</strong>
            </motion.div>

            <motion.div
              className="stage-info-card"
              initial={{opacity:0, x:24}}
              whileInView={{opacity:1, x:0}}
              transition={{delay:0.22}}
              viewport={{once:true}}
            >
              <span>Technologies utilisées</span>
              <div className="stage-tech-list">
                {technologies.map(tech => (
                  <span key={tech} className="stage-tech">{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="stage-gallery"
          initial={{opacity:0, y:24}}
          whileInView={{opacity:1, y:0}}
          transition={{delay:0.16, duration:0.5}}
          viewport={{once:true}}
          aria-label="Photos du stage ou du projet TBMCore"
        >
          {galleryPhotos.map((photo, index) => (
            <div className="stage-photo-slot" key={photo.label}>
              <img src={photo.src} alt={photo.alt} className="stage-photo-image" />
              <div className="stage-photo-overlay" />
              <span className="stage-photo-index">0{index + 1}</span>
              <span className="stage-photo-caption">{photo.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
