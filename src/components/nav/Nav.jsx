import React from 'react';
import './nav.css';
import {FaHome} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {MdWork} from 'react-icons/md'
import {FaUserGraduate} from 'react-icons/fa'
import {AiFillContacts} from 'react-icons/ai'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><MdWork/></a>
      <a href="#graduation" onClick={() => setActiveNav('#graduation')} className={activeNav === '#graduation' ? 'active' : ''} ><FaUserGraduate/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><AiFillContacts/></a>
    </nav>
  )  
}


export default Nav;