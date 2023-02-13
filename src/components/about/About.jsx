import React from 'react';
import './about.css'
import EU from '../../assets/Handy_Rural.jpg'
import {MdHomeWork} from 'react-icons/md'
import {GiBlackBook} from 'react-icons/gi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h4>Olá, seja bem-vindo</h4>
      <h2>Sobre mim</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={EU} alt="About Image" />
          </div>
        </div>
      
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <MdHomeWork className='about_icon'/>
              <h4>Experiência</h4>
              <small>1+ Anos de experiência</small>
            </article>
          
            <article className='about_card'>
              <GiBlackBook className='about_icon'/>
              <h4>Habilidades técnicas</h4>
              <small>xxxxxx</small>
            </article>
          
            <article className='about_card'>
              <AiFillFolderOpen className='about_icon'/>
              <h4>Projetos</h4>
              <small>xxxxxx</small>
            </article>
          </div>
        
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error, totam. Nobis quis culpa asperiores magni aliquam!
            Neque omnis autem dolorem vero inventore, sunt repellendus
            explicabo corrupti, temporibus voluptate, quia ad.
          </p>
        
          <a href="#contact" className='btn btn-primary'>Fala comigo</a>
        </div>
      </div>
    </section>
  )  
}


export default About;