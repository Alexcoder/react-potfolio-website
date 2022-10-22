import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {GrGithub} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/ifeanyi-agbo-00a649153' > <BsLinkedin/> </a>
        <a href='https://www.github.com' > <GrGithub/> </a>
    </div>
  );
}

export default HeaderSocials;
