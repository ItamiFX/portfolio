import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projectsData } from '../data/projectsData'
import ProjectModal from './ProjectModal'

export default function Projects(){
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projets" className="projects">
      <div className="container">
        <h2 className="section-title">Mes projets</h2>

        <div className="projects-grid">
          {projectsData.map((p,i) => (
            <motion.article
              key={p.id}
              className="project-card"
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1,y:0}}
              transition={{delay: i*0.08}}
              viewport={{once:true}}
              onClick={() => setSelectedProject(p)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedProject(p)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Ouvrir les détails de ${p.title}`}
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

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  )
}
