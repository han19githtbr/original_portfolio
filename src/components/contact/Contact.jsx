import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='title-contact'>Entre em contato</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <AiOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>milliance23@gmail.com</h5>
            <a href="mailto:milliance23@gmail.com" target="_blank">Envie uma mensagem</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>handyclaude</h5>
            <a href="https://m.me/handyclaudemarie.milliance" target="_blank">Envie uma mensagem</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/>
            <h4>WhatsApp</h4>
            <h5>+5521972141165</h5>
            <a href="https://api.whatsapp.com/send?phone=21972141165" target="_blank">Envie uma mensagem</a>
          </article>
        </div>
        {/*<form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>*/}
      </div>
    </section>
  )  
}


export default Contact;