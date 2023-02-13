import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <div className='linkedin_icone'>
          <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>  
        </div>
        <div className='github_icone'>
          <a href="https://github.com" target="_blank"><FaGithub/></a>
        </div>
        <div className='facebook_icone'>
          <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
        </div>
    </div>
  )
}

export default HeaderSocials