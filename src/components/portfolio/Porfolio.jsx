import React from 'react'
import './portfolio.css'
import IMG1 from '../../medias&files/portfolio1.png'
import IMG2 from '../../medias&files/portfolio2.png'
import IMG3 from '../../medias&files/portfolio3.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'TransportService',
    github: 'https://github.com/SlimPapiChulo/TransportService',
    demo: 'https://transportservices.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Login-page',
    github: 'https://github.com/SlimPapiChulo/Login-page',
    demo: 'https://loginpageauth.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Ode-to-zainab',
    github: 'https://github.com/SlimPapii/ZainabsProject',
    demo: 'https://ode-to-zainab.vercel.app/'
  }
]

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo})=>{
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
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

export default Porfolio