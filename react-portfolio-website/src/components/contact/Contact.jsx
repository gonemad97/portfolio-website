import React from 'react'
import './contact.css'
import { useRef } from 'react';
// import emailjs from '@emailjs-com';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sch95ec', 'template_tmbwig4', form.current, 'W67kX7Y_9ohBPGIRd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h1 style={{fontSize: '4rem'}}>Contact Me</h1>
      <h3 >Let's Chat.</h3>

      <div className='container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Enter your name' required></input>
          <input type="email" name="email" placeholder='Enter your email id' required></input>
          <textarea name="message" rows={7} placeholder='Enter your message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact