import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

const data = [
  {
    id:7,
    image: IMG1,
    title:'Whaleverse.cc, site vitrine pour un client ayant comme thème la vente de NFT (Non-fungible token).',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/sdsqdsq'
  },
  {
    id:6,
    image: IMG1,
    title:'Ancien portfolio mis-à-jour sous la version actuelle.',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/sdqsdq',
  },
  {
    id:5,
    image: IMG1,
    title:'HONG KONG, projet personnel sur la photographie lors de mon séjour à Hong Kong.',
    github: 'https://github.com',
    demo: 'https://hongkong.mezianesofiane.com',
  },
  {
    id:4,
    image: IMG1,
    title:"Billet simple pour l'alaska, livre en ligne sous forme d'article posté par l'écrivain.",
    github: 'https://github.com',
    demo: 'https://alaskaproject.mezianesofiane.com',
  },
  {
    id:3,
    image: IMG1,
    title: "BIKESSELS, application web permettant la réservation d'un vélo à Bruxelles.",
    github: 'https://github.com',
    demo: 'https://bikessels.mezianesofiane.com',
  },
  {
    id:2,
    image: IMG2,
    title: "Projet effectué ayant comme thème l'office de tourisme de Strasbourg.",
    github: "https://github.com",
    demo: 'https://agence-strasbourg.mezianesofiane.com/',
  },
  {
    id:1,
    image: IMG1,
    title: "Premier prototype d'un passage d'une maquette au web (intégration web).",
    github: "https://github.com",
    demo: "https://webagency.mezianesofiane.com/",
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
             <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
               </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio