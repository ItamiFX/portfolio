import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    
    document.addEventListener('keydown', handleEscape)
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Fermer">
            ✕
          </button>

          {project.images && project.images.length > 0 && (
            <div className="modal-images">
              {project.images.map((img, idx) => (
                <img key={idx} src={img.src} alt={img.alt} className="modal-image" />
              ))}
            </div>
          )}

          <div className="modal-body">
            <h2>{project.title}</h2>
            
            {project.description && (
              <div className="modal-section">
                {project.description.map((text, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
              </div>
            )}

            {project.objectives && (
              <div className="modal-section">
                <h3>Objectifs</h3>
                <ul>
                  {project.objectives.map((obj, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: obj }} />
                  ))}
                </ul>
              </div>
            )}

            {project.features && (
              <div className="modal-section">
                <h3>Fonctionnalités développées</h3>
                <ul>
                  {project.features.map((feat, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: feat }} />
                  ))}
                </ul>
              </div>
            )}

            {project.skills && (
              <div className="modal-section">
                <h3>Compétences mobilisées</h3>
                <ul>
                  {project.skills.map((skill, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: skill }} />
                  ))}
                </ul>
              </div>
            )}

            {project.tech && (
              <div className="modal-section">
                <h3>Technologies</h3>
                <p>{project.tech}</p>
              </div>
            )}

            {project.demoUrl && (
              <div className="modal-actions">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
                  Voir la démo
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
