import React from 'react'
import './about.css'
import Me from '../../medias&files/officeMe.jpeg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import CTA from './CTA'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years learning experience</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am an entry-level frontend developer with a passion for creating visually appealing and user-friendly websites. I have experience with HTML, CSS, and JavaScript and I am constantly learning new technologies to stay up-to-date in the field. I am detail-oriented and able to work efficiently in a team environment, and I am eager to apply my skills to real-world projects and continue to grow as a developer.
          </p>
          <CTA />
        </div>
      </div>
    </section>
  )
}

export default About