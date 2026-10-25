import React, { useState } from 'react'
import { projectsData } from '../data/projectsData'
import ProjectModal from './ProjectModal'

const domains = [
  { number: '01', symbol: '</>', title: 'Développement web', description: 'Construire des interfaces et relier les pages aux données de l’application.', practices: 'Interfaces responsive · Utilisateurs et permissions · Bases de données', technologies: [['HTML', 'html5.svg'], ['CSS', 'css3.svg'], ['JavaScript', 'javascript.svg'], ['React', 'react.svg'], ['Angular', 'angular.png'], ['PHP', 'php.svg'], ['Symfony', 'symfony.svg']], project: 'robot-league', evidence: 'Robot League' },
  { number: '02', symbol: '{ }', title: 'Applications & données', description: 'Traduire des règles en code, manipuler des données et les rendre compréhensibles.', practices: 'Programmation objet · Algorithmique · Visualisation et automatisation', technologies: [['Java', 'java.png'], ['JavaFX', 'javafx.png'], ['Python', 'python.svg'], ['C#', 'csharp.svg'], ['C', 'c.svg'], ['MySQL', 'mysql.png'], ['PostgreSQL', 'postgresql.png'], ['MariaDB', 'mariadb.png']], project: 'visualisation-donnees', evidence: 'Visualisation de données' },
  { number: '03', symbol: '>_', title: 'Outils & méthode', description: 'Organiser le travail et préparer un environnement adapté au projet.', practices: 'Versionnement · Linux et virtualisation · UML / MCD · Scrum', technologies: [['Git', 'git.svg'], ['Linux', 'linux.svg'], ['Windows', 'windows.svg'], ['Bash', 'bash.svg'], ['VMware', 'vmware.svg'], ['JUnit', 'junit.png'], ['VS Code', 'vs-code.svg'], ['Visual Studio', 'visual-studio.svg'], ['NetBeans', 'netbeans.png']], project: 'installation-poste', evidence: 'Installation de poste' },
]

export default function Skills() {
  const [selectedProject, setSelectedProject] = useState(null)
  return <section id="competences" className="skills skills-domains skills-compact">
    <div className="container">
      <span className="eyebrow">03 / COMPÉTENCES</span>
      <h2 className="section-title">Mes compétences</h2>
      <div className="domain-grid">{domains.map(domain => <article className="domain-card" key={domain.number}>
        <div className="domain-top"><span className="domain-symbol" aria-hidden="true">{domain.symbol}</span><span className="domain-number">{domain.number}</span></div>
        <h3>{domain.title}</h3>
        <p className="domain-description">{domain.description}</p>
        <p className="domain-summary">{domain.practices}</p>
        <ul className="domain-technologies" aria-label={`Technologies : ${domain.title}`}>{domain.technologies.map(([name, file]) => <li key={name}><img loading="lazy" src={`${import.meta.env.BASE_URL}assets/logos/${file}`} alt="" /><span>{name}</span></li>)}</ul>
        <button className="domain-evidence" onClick={() => setSelectedProject(projectsData.find(project => project.id === domain.project))}><span>{domain.evidence}</span><span aria-hidden="true">+</span></button>
      </article>)}</div>
    </div>
    {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </section>
}
