import React, { useState } from 'react'
import { projectsData } from '../data/projectsData'
import ProjectModal from './ProjectModal'
const categories = ['Tous', 'Web', 'Java', 'Python']
const category = p => /Java,|JavaFX/.test(p.tech) ? 'Java' : /Python/.test(p.tech) ? 'Python' : /HTML|Symfony/.test(p.tech) ? 'Web' : 'Système'
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('Tous')
  const ordered = [...projectsData].sort((a,b) => (b.id === 'robot-league') - (a.id === 'robot-league'))
  return <section id="projets" className="projects"><div className="container">
    <div className="section-heading"><div><span className="eyebrow">01 / PROJETS</span><h2 className="section-title">Mes projets,<br /><em>en pratique.</em></h2></div><p>Applications web, jeux et outils de visualisation.<br />Découvrez mon travail et les technologies utilisées.</p></div>
    <div className="project-filters" role="group" aria-label="Filtrer les projets">{categories.map(c => <button key={c} aria-pressed={filter === c} onClick={() => setFilter(c)}>{c}{c === 'Tous' && <sup>{projectsData.length.toString().padStart(2,'0')}</sup>}</button>)}<span>EN SAVOIR PLUS +</span></div>
    <div className="projects-grid">{ordered.filter(p => filter === 'Tous' || category(p) === filter).map(p => <button key={p.id} className="project-card" onClick={() => setSelectedProject(p)} aria-label={`Ouvrir les détails de ${p.title}`}><div className="project-image"><img loading="lazy" src={p.image} alt={p.title} /></div><div className="project-info"><span className="project-category">{category(p)} / {p.tech.split(',').slice(0,2).join(' + ')}</span><h3>{p.title}</h3><p>{p.desc}</p><span className="project-discover">Découvrir le projet <span aria-hidden="true">+</span></span></div></button>)}</div>
  </div>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</section>
}
