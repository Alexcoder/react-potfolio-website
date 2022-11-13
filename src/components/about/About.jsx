import React from 'react';
import './About.css'
import MAINPIC from '../../assets/pic2022.jpg'
import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'

const About = () => {
  return (
   <section id='about'>
       <h5>Get to Know</h5>
       <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
           <div className="about_me_image">
             <img src={MAINPIC} alt='About Imge'/>
           </div>
        </div>

        <div className="about_content">
           <div className="about_cards">
              <article className='about_card' >
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small> 2+ Years of Experience</small>
              </article>

              <article className='about_card' >
                <VscFolderOpened className='about_icon'/>
                <h5>Projects</h5>
                <small> 8+ Completed</small>
              </article>
           </div>
          
           <p>
             Full stack well developer with extensive knowledge and <br/>
             hands-on-project experience in
             React.js, Node.js, Express.js and MongoDB <br/>
           </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
     </section>
  );
}

export default About;
