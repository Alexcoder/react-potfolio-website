import React from 'react';
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const data=[
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'She is very presentable as well'
  },
  {
    avatar: AVTR2,
    name: 'Alex Dino',
    review: 'She is very presentable as well'
  },
  {
    avatar: AVTR3,
    name: 'Sherin Zidane',
    review: 'She is very presentable as well'
  },
  {
    avatar: AVTR4,
    name: 'Manchala',
    review: 'She is very presentable as well'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
       >
        {
          data.map(({avatar, name, review, index})=>{
              return(
                <SwiperSlide className="testimonial"  key={index}>
                <div className="client_avatar" target="">
                  <img src={avatar} alt="" />
                     </div>
                       <h5 className='client_name'>{name}</h5>
                       <small className="client_review">
                          {review}
                       </small>
               </SwiperSlide>
              )
          })
        }
      
      </Swiper>
    </section>
  );
}

export default Testimonials;
