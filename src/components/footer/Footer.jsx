import React from 'react';
import './footer.css';
import {FaArrowAltCircleUp} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className='scroll_up'>
        <a href="#"><FaArrowAltCircleUp id="icone-up"/></a>
        <ul className='links'>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#graduation">Graduation</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer_socials'>
          <a href="https://facebook.com"><BsFacebook/></a>
          <a href="https://instagram.com"><BsInstagram/></a>
          <a href="https://twitter.com"><BsTwitter/></a>
        </div>  

        <div className='footer_copyright'>
          <small>&copy; Handy_Desenvolvedor. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )  
}


export default Footer;