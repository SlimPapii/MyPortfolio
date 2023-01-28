import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className="footer_logo">ABIODUN</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com/olonade.abiodun"><FaFacebook /></a>
        <a href="https://instagram.com/slimpapichuloo/"><FiInstagram /></a>
        <a href="https://twitter.com/Abiodunn_Emma"><IoLogoTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; ABIODUN. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer