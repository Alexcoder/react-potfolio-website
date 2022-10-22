import React from 'react';
import './Portfolio.css'
import FIELDCEMENTING from '../../assets/FieldCementingPic.PNG'
import IMG1 from '../../assets/FieldCementingPic.PNG'
// import QUIZ from '../../assets/quiz.svg'
import IMG4 from '../../assets/FieldCementingPic.PNG'
// import IMG6 from '../../assets/FieldCementingPic.PNG'


const data = [
  {
    id:3,
    image:FIELDCEMENTING,
    title: 'Field WellBore Cementing App',
    github: 'https://github.com/Alexcoder/mobile-app',
    demo:'https://cementing-app.netlify.app/'
  },
  // {
  //   id:2,
  //   image:QUIZ,
  //   title: 'Quiz App',
  //   github: 'https://github.com',
  //   demo:'https://github.com'
  // },
  {
    id:1,
    image:IMG1,
    title: 'Expense Tracker Powered By Speechly',
    github: 'https://github.com/Alexcoder/Expense-Tracker-With-Speechly',
    demo:'https://github.com'
  },
  {
    id:4,
    image:IMG4,
    title: 'Memories App',
    github: 'https://github.com/Alexcoder/SocialMedia',
    demo:'https://github.com'
  },
  // {
  //   id:6,
  //   image:IMG6,
  //   title: 'Booking App',
  //   github: 'https://github.com',
  //   demo:'https://github.com'
  // },
]


 
 const Portfolio = () => {

   return (
      <section id='portfolio'>
        <h5>My Recent Work</h5>
           <h2>Portfolio</h2>
        <div className="container portfolio_container">
          {
            data.map(({id, image, title, github, demo})=>{
              return(
                <article key={id} className="portfolio_item">
                <div className="portfolio_item_image">
                  <img src={image} alt={title} style={{backgroundColor: "white"}}/>
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item_cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className="btn">Live Demo</a>
                  </div>
              </article>
        
              )
            })
          }
      
    </div>
  
  </section>

   );
 }
 
 export default Portfolio;
 



