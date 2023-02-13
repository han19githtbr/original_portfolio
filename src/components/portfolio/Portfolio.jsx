import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Ecommerce.jpg'
import IMG2 from '../../assets/AgendaContatos.jpg'
import IMG3 from '../../assets/Habit_App.jpg'
import IMG4 from '../../assets/NLW_ESPORTS.jpg'
import IMG5 from '../../assets/WEBSITE_NODRIC.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Aplicacao de e-commerce',
    github: 'https://github.com',
    demo: 'https://ibb.co/dKXf5vT'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Agenda de Contatos',
    github: 'https://github.com',
    demo: 'https://ibb.co/72t9RL8'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Aplicacao de controle de hábitos',
    github: 'https://github.com',
    demo: 'https://ibb.co/pd0ny8k'
  },
  {
    id: 4,
    image: IMG4,
    title: 'NLW Esports encontre o seu duo',
    github: 'https://github.com',
    demo: 'https://ibb.co/MRJFrDd'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Site Projeto de Arquitetura',
    github: 'https://github.com',
    demo: 'https://ibb.co/CM3fdHh'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>Meus projetos</h4>
      <h2>Portfólio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
              <div className='portfolio_item_image'>
                <img src={image} alt={title} />
              </div>  
              <h3>{title}</h3>
              <div className='portfolio_item_cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )  
}


export default Portfolio;