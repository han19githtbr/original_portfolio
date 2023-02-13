import React from 'react';
import './experience.css';
import {BsCheck2Square} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h4>Mercado de trabalho</h4>
      <h2>Minhas experiências</h2>
      
      <div className='container experience_container'>
                     
          <div className='experience_frontend'>
          <h3>Desenvolvimento Front-end</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsCheck2Square className='experience_details_icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Square className='experience_details_icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Square className='experience_details_icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Square className='experience_details_icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Square className='experience_details_icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Iniciante</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Square className='experience_details_icon' />
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsCheck2Square className='experience_details_icon' />
              <div>
                <h4>Node.JS</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Square className='experience_details_icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Square className='experience_details_icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Square className='experience_details_icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheck2Square className='experience_details_icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )  
}


export default Experience;