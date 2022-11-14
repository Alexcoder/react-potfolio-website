import React from 'react';
import './Header.css'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
   <header>
       <div className="container header_container" id="home">
          <h5>Hello I'm</h5>
          <h1>Alex Agbo</h1>
          {/* <h5 className='text-light'>Fullstack Developer</h5> */}
          <CTA/>
          <HeaderSocials/>

          {/* <div className="me">
             <img src={MAINPIC}  alt='me' className='now'/>
          </div>
 */}
          <h1 className="description" >FULL STACK <br/> WEB DEVELOPER</h1>
          <a href='#contact' className='scroll_down'>Scroll Down</a>
       </div>
   </header>
  );
}

export default Header;
