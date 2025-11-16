import React from 'react'
import { motion } from 'framer-motion'
import imgAngular from '../assets/logos/angular.png'
import imgBash from '../assets/logos/bash.svg'
import imgC from '../assets/logos/c.svg'
import imgCsharp from '../assets/logos/csharp.svg'
import imgCss3 from '../assets/logos/css3.svg'
import imgGit from '../assets/logos/git.svg'
import imgHtml5 from '../assets/logos/html5.svg'
import imgJava from '../assets/logos/java.png'
import imgJavafx from '../assets/logos/javafx.png'
import imgJs from '../assets/logos/javascript.svg'
import imgJunit from '../assets/logos/junit.png'
import imgLinux from '../assets/logos/linux.svg'
import imgMariadb from '../assets/logos/mariadb.png'
import imgMysql from '../assets/logos/mysql.png'
import imgNetbeans from '../assets/logos/netbeans.png'
import imgPhp from '../assets/logos/php.svg'
import imgPostgres from '../assets/logos/postgresql.png'
import imgPython from '../assets/logos/python.svg'
import imgReact from '../assets/logos/react.svg'
import imgSymfony from '../assets/logos/symfony.svg'
import imgVS from '../assets/logos/visual-studio.svg'
import imgVmware from '../assets/logos/vmware.svg'
import imgVSCode from '../assets/logos/vs-code.svg'
import imgWindows from '../assets/logos/windows.svg'

const langLogos = [
  { name: 'java', url: imgJava },
  { name: 'csharp', url: imgCsharp },
  { name: 'c', url: imgC },
  { name: 'php', url: imgPhp },
  { name: 'javascript', url: imgJs },
  { name: 'react', url: imgReact },
  { name: 'python', url: imgPython },
  { name: 'bash', url: imgBash },
  { name: 'html5', url: imgHtml5 },
  { name: 'css3', url: imgCss3 },
  { name: 'angular', url: imgAngular }
]

const toolLogos = [
  { name: 'git', url: imgGit },
  { name: 'netbeans', url: imgNetbeans },
  { name: 'vmware', url: imgVmware },
  { name: 'linux', url: imgLinux },
  { name: 'windows', url: imgWindows },
  { name: 'vs-code', url: imgVSCode },
  { name: 'visual-studio', url: imgVS },
  { name: 'symfony', url: imgSymfony },
  { name: 'junit', url: imgJunit },
  { name: 'javafx', url: imgJavafx },
  { name: 'mysql', url: imgMysql },
  { name: 'postgresql', url: imgPostgres },
  { name: 'mariadb', url: imgMariadb }
]

const skills = [
  { title: 'Langages', logos: langLogos },
  { title: 'Outils & technologies', logos: toolLogos },
  { title: 'Développement', text: 'Algorithmique, POO, automatisation, modélisation (UML, MCD).' }
]

export default function Skills(){
  return (
    <section id="competences" className="skills">
      <div className="container">
        <h2 className="section-title">Mes compétences</h2>
        <div className="skills-grid">
          {skills.map((s,i) => (
            <motion.div className="skill-card" key={s.title} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.4}} viewport={{once:true}}>
              <h3>{s.title}</h3>

              {s.logos && s.logos.length > 0 ? (
                <div className="logo-marquee" aria-label={`${s.title} logos`}>
                  <div className="marquee-track" role="list">
                    {s.logos.map((L, idx) => (
                      <img key={`${L.name}-${idx}`} src={L.url} alt={L.name} className="skill-logo" role="listitem" title={L.name} />
                    ))}
                    {s.logos.map((L, idx) => (
                      <img key={`${L.name}-dup-${idx}`} src={L.url} alt={L.name} className="skill-logo" role="listitem" title={L.name} />
                    ))}
                  </div>
                </div>
              ) : (
                <p>{s.text}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
