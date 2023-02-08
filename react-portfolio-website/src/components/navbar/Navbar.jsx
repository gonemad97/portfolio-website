import React, {useState} from 'react'
import './navbar.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineMail, AiOutlineBook} from 'react-icons/ai'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <div className='label__icons'>
        <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <p>Home</p>
      </div>
      <div className='label__icons'>
        <a href="#work" onClick={() => setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}><AiOutlineBook/></a>
        <p>Work</p>
      </div>
      <div className='label__icons'>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <p>About Me</p>
      </div>
      <div className='label__icons'>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail/></a>
        <p>Contact</p>
      </div>
    </nav>
  )
}

export default Navbar