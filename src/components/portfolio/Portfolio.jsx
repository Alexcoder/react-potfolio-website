import React from 'react';
import './Portfolio.css'
import FIELDCEMENTING from '../../assets/FieldCementingPic.PNG'
import QUIZ from '../../assets/quiz.svg'


const data = [
  {
    id:1,
    image:FIELDCEMENTING,
    title: 'Field WellBore Cementing App',
    github: 'https://github.com/Alexcoder?tab=repositories',
    demo:'https://cementing-app.netlify.app/'
  },
  {
    id:2,
    image:QUIZ,
    title: 'Inventory-check app',
    github: 'https://github.com/Alexcoder?tab=repositories',
    demo:'https://inventory-check.netlify.app'
  },
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
 



