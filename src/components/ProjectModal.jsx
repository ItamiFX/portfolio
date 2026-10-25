import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useState } from 'react'

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const [imageIndex, setImageIndex] = useState(0)
  useEffect(() => {
    const previousFocus = document.activeElement
    dialogRef.current?.focus()
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const items = dialogRef.current?.querySelectorAll('button, a[href], [tabindex="0"]')
        if (!items?.length) return
        const first = items[0], last = items[items.length - 1]
        if (e.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && (document.activeElement === last || document.activeElement === dialogRef.current)) { e.preventDefault(); first.focus() }
      }
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
      previousFocus?.focus()
    }
  }, [])
  const images = project.images || []
  return createPortal(
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-content" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" tabIndex={-1}>
        <div className="modal-toolbar"><span>PROJET / {project.title}</span><button className="modal-close" onClick={onClose} aria-label="Fermer">−</button></div>
        {images.length > 0 && <div className="project-gallery">
          <img className="gallery-main" src={images[imageIndex].src} alt={images[imageIndex].alt} />
          {images.length > 1 && <div className="gallery-controls"><button onClick={() => setImageIndex((imageIndex + images.length - 1) % images.length)} aria-label="Image précédente">−</button><span aria-live="polite">{imageIndex + 1} / {images.length}</span><button onClick={() => setImageIndex((imageIndex + 1) % images.length)} aria-label="Image suivante">+</button></div>}
        </div>}
          <div className="modal-body">
            <h2 id="project-dialog-title">{project.title}</h2>
            
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
        </div>
      </div>, document.body
  )
}
