import React from 'react';
import './header.css';
import CTA from './CTA'
import EU from '../../assets/Handy_Mar.png'
import HeaderSocials from './HeaderSocials';
import {FaArrowAltCircleDown} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h4>Olá, eu sou</h4>
        <h1>Handy Claude Marie Milliance</h1>
        <h4 className='text-light'>Desenvolvedor FullStack</h4>
        <CTA />
        <HeaderSocials />

        <div className='eu'>
          <img src={EU} alt="eu" />
        </div>
              
        <div className='scroll_down'>
          <a href="#contact"><FaArrowAltCircleDown id="icone-down"/></a>
        </div>
      </div>
    </header>
  )  
}


export default Header;