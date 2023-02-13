import React from 'react';
import './graduation.css';
import {FaGraduationCap} from 'react-icons/fa'
import {SiGoogleclassroom} from 'react-icons/si'
import {MdWork} from 'react-icons/md'

const Graduation = () => {
  return (
    <section id='graduation'>
      <h4>Minha graduação</h4>
      <h2>UFRRJ</h2>
      <div className='container graduation_container'>
        <div className='graduation_im'>
          <h3>04/2014 - 06/2022</h3>
          <div className='graduation_content'>
            <article className='graduation_details'>
              <FaGraduationCap className='graduation_details_icon' />
              <div>
                <h4>Universidade Federal Rural do Rio de Janeiro</h4>
                <small className='text-light'>Bacharelado em Ciência da Computação</small>
              </div>
            </article>
          </div>
        </div>
        <div className='graduation_pet'>
          <h3>12/2015 - 02/2020</h3>
          <div className='pet_content'>
            <article className='pet_details'>
              <SiGoogleclassroom className='pet_details_icon' />
              <div>
                <h4>PET Conexões Baixada</h4>
                <small className='text-light'>Programa de Eduacação Tutorial</small>
              </div>
            </article>
                      
          </div>
        </div>
        <div className='graduation_internship'>
          <h3>04/2021 - 07/2022</h3>
          <div className='intern_content'>
            <article className='intern_details'>
              <MdWork className='intern_details_icon' />
              <div>
                <h4>Procuradoria Geral do Município de Nova Iguaçu</h4>
                <small className='text-light'>Estágio em Desenvolvimento Web</small>
              </div>
            </article>
                        
          </div>
        </div>
      </div>
    </section>
  )  
}


export default Graduation;