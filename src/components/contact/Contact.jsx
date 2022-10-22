import React from 'react';
import './Contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {AiOutlinePhone} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


// TO SEND MAIL WE NEED E-MAILJS.COM then reactemailjs then install emailjs : npm install emailjs-com  save
const Contact = () => {
  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8aztx1h', 'template_i38l3qq', form.current, 'BFcZqP8qLuj7q7rBT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

       e.target.reset()  //to clear input after submission
  };

  return (
   <section id='contact'>
               <h5>Get In Touch</h5>
               <h2>Contact Me</h2>

       <div className="container contact_container">
       <div className="contact_options">
             {/* First */}
             <article className='contact_option'>
                 <MdOutlineMail className='contact_option_icon'/>
                  <h4>Email</h4>
                  <h5>agboalez@gmail.com</h5>
                  <a href="mailto:agboalez@gmail.com" >Send a message</a>
              </article>
             {/* Second */}
              <article className='contact_option'>
                 <AiOutlinePhone className='contact_option_icon'/>
                  <h4>Telephone</h4>
                  {/* <h5>IfeanyiTutorials</h5> */}
                  <a href='tel: +234 7037513234'>+234 70375 13234</a>

              </article>
             {/* Third */}
              <article className='contact_option'>
                 <BsWhatsapp className='contact_option_icon'/>
                  <h4>WhatsApp</h4>
                  <a href='https://api.whatsapp.com/send?phone=+2347037513234'>Send a message</a>
              </article>
            {/* END */}
           </div>
            <form ref={form} onSubmit={sendEmail} className="hideOnSmallDevice">
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type="email" name='email' placeholder='Your email' required/>
              <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'> Send Message </button>
            </form>
           </div>

   </section>
  );
}

export default Contact;
