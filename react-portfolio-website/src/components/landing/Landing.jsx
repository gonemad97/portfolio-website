import React from 'react'
import './landing.css'
import CTA from './CTA'
import me from '../../assets/me1.jpg'
import {BsChevronRight} from 'react-icons/bs'

const Landing = () => {
  return (
    <header id="home" className='container'>
      <div className="header__container">
        <h3> Hey there! I'm, </h3>
        <h1 style={{fontSize: '3rem'}}><b>Madhuri Palanivelu</b></h1>
        <h3 style={{paddingTop: '1rem'}}>Fullstack Engineer who loves all things <mark id="web__highlight">Web</mark>, <mark id="design__highlight">Design</mark>, and <mark id="docs__highlight">Docs</mark>.</h3>
        <CTA />
      </div>

      <div className="img__container">
        <div className="me__image">
          <img src={me} alt="My Picture" />
        </div>
      </div>

      {/* <div>
        <a href="#work" className="scrolldown__work">Scroll Down</a>
      </div> */}
    </header>
  )
}

export default Landing