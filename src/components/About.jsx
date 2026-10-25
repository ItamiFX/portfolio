import React from 'react'

export default function About() {
  return (
    <section id="a-propos" className="about">
      <div className="container about-layout">
        <div className="about-intro">
          <span className="eyebrow">02 / À PROPOS</span>
          <h2 className="section-title">Moi, c’est<br /><em>Killian.</em></h2>
          <p className="about-location">Étudiant en BUT Informatique<br />IUT de Bordeaux</p>
          <div className="about-interests" aria-label="Centres d’intérêt">
            <span>Cybersécurité</span><span>Graphisme</span><span>Entrepreneuriat</span>
          </div>
        </div>
        <div className="about-content">
          <div className="about-opportunity">
            <span className="opportunity-label"><i /> MON PROCHAIN OBJECTIF</span>
            <p>Actuellement en <strong>3ᵉ année de BUT Informatique</strong>, je suis à la recherche d’un <strong>stage de 14 semaines à partir du 29 mars 2027</strong>.</p>
            <p>Passionné par le développement informatique, je m’intéresse aussi bien au <strong>front-end</strong> qu’au <strong>back-end</strong>, avec un intérêt particulier pour le <strong>développement full-stack</strong>.</p>
            <p>Je souhaite mettre mes compétences en pratique, découvrir de nouveaux environnements techniques et contribuer à des projets concrets.</p>
            <a href="#contact">Échangeons <span aria-hidden="true">+</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
