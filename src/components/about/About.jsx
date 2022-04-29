import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="../../sds.png" alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
                <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 months working</small>
            </article>
            <article className="about__card">
                <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>
            <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>

          <p>
            Jeune diplomé en développement web et vivant actuellement à Hong-Kong, je vis dans un monde aux possibilités infinies, préférant voir les choses non pas telles qu'elles sont mais telles qu'elles pourraient être.
            Prêt à construire le monde de demain en façonnant le web à ma façon.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About