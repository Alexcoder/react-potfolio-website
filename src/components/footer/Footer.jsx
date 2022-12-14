import React from 'react';
import './Footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='smallDeviceHeightReduce'>
        <a href='#home' className='footer_logo'>ALEX</a>

        <ul className='permalinks'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className="footer_socials">
          <a href='https://www.github.com'><AiOutlineGithub/></a>
          <a href='https://www.linkedin.com/in/ifeanyi-agbo-00a649153'><AiFillLinkedin/></a>
        </div>

        <div className="footer_copyright">
          <small> &copy; lexwares. All rights reserved.</small>
        </div>
    </footer>
  );
}

export default Footer;
