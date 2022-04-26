import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <acticle className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>prosmezds@gmail.com</h5>
            <a href="mailto:prosmezds@gmail.com">Send a message</a>
          </acticle>
          <acticle className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Soso</h5>
            <a href="https://m.me/soso">Send a message</a>
          </acticle>
          <acticle className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="mailto:prosmezds@gmail.com">Send a message</a>
          </acticle>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action=""></form> 
      </div>
    </section>

  )
}

export default Contact