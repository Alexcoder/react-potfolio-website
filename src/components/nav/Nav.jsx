import React from 'react';
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalBookmark} from 'react-icons/bs'
import {BsBagCheck} from 'react-icons/bs'
import {BiMessageAlt} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <nav>
        <a href='#home' onClick={()=> setActiveNav('#')}  className={activeNav==='#home' ? 'active': ''}> <AiOutlineHome/></a>
        <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active': ''} > <AiOutlineUser/></a>
        <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active': ''} > <BsJournalBookmark/></a>
        <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active': ''} > <BsBagCheck/></a>
        <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}  > <BiMessageAlt/></a>
    </nav>
  );
}

export default Nav;
