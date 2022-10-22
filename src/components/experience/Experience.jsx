import React from 'react';
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {} from 'react-icons/bs'
import {} from 'react-icons/bs'
import {} from 'react-icons/bs'
import {} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
        <h2>My Experience</h2>

       <div className="container experience_container">
       <div className="experience_frontend">
          <h3>Frontend Development</h3>
           <div className="experience_content">

           <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div> <h4>React JS</h4>
              <small className='text-light'>Experienced</small> </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div> <h4>Javascript</h4>
              <small className='text-light'>Experienced</small> </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div> <h4>Redux</h4>
              <small className='text-light'>Experienced</small> </div>
              </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div> <h4>HTML</h4>
              <small className='text-light'>Experienced</small> </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div> <h4>CSS</h4>
              <small className='text-light'>Experienced</small> </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div> <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small> </div>
              </article>

        </div>
       </div>
            
            {/* END OF FRONT END */}

       <div className="experience_backend">
          <h3>Backend Development</h3>
           <div className="experience_content">

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div><h4>Node JS</h4>
              <small className='text-light'>Experienced</small> </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div><h4>Express JS</h4>
              <small className='text-light'>Experienced</small> </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div><h4>MongoDB</h4>
              <small className='text-light'>Experienced</small> </div>
              </article>

       </div>
       </div>  
    </div>  
        
       
    </section>
  );
}

export default Experience;
