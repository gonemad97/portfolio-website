import React from 'react'
import './navbartop.css'
import me from '../../assets/me1.jpg'


import {AiOutlineMedium, AiOutlineUser, AiOutlineBook} from 'react-icons/ai'

const NavbarTop = () => {
  return (
    <nav>
        <div className='flex__container'>
            <div className='flex__container__logo'>
                <img className='logo' src={me} alt="My Picture" />
                <a className='nav-link bar-up-logo' href="#">Madhuri Palanivelu</a>
            </div>
            <ul className='navbar__items'>
                <li><a className='nav-link bar-up flex__icons' href="#about"><AiOutlineUser style={{fontSize:'1.5rem'}}/>about</a></li>
                <li><a className='nav-link bar-up flex__icons' href="#work"><AiOutlineBook style={{fontSize:'1.5rem'}}/>portfolio</a></li>
                <li><a className='nav-link bar-up flex__icons' href="https://medium.com/@palsmadhu18" target="__blank"><AiOutlineMedium style={{fontSize:'1.7rem'}}/>blog</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavbarTop