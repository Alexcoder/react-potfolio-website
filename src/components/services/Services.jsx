import React from 'react';
import './Services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services_container">
          <article className="service">
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="service_list">
              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>

              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>

            </ul>
          </article>
          {/* END OF UI/UX */}

          <article className="service">
            <div className="service_head">
              <h3>Web Development</h3>
            </div>

            <ul className="service_list">
              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>

              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>

              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>

              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>

              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>
            </ul>
          </article>
          {/* END OF WEB DEVELOPMENT*/}

          <article className="service">
            <div className="service_head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service_list">
              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>

              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>

              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>

              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>

              <li>
                <BsCheck className='service_list_icon'/>
                <p>Wellbore cementer</p>
              </li>
            </ul>
          </article>
          {/* END OF CONTENT CREATION */}
        </div>
       </section>
  );
}

export default Services;
