import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {SiCodingame} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>My Portfolio</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/"><BsGithub /></a>
        <a href="https://linkedin.com/"><BsLinkedin /></a>
        <a href="https://codingame.com/"><SiCodingame /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Soso MyPortfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer