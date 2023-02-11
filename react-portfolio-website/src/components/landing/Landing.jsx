import React from 'react'
import './landing.css'
import CTA from './CTA'
import me from '../../assets/me1.jpg'
import {BsChevronRight} from 'react-icons/bs'

const Landing = () => {
  return (
    <header id="home" className='container'>
      <div className="header__container">
        <h3 style={{fontSize:'2.5rem'}} className='animate__block1'> Hey there! I'm, </h3>
        <h1 className='animate__block1' style={{fontSize: '5rem'}}><b>Madhuri Palanivelu.</b></h1>
        <h3 className='animate__block2' style={{fontSize: '2rem',paddingTop: '1rem'}}>A Fullstack Engineer who loves all things <mark className="green__highlight">Web</mark>, <mark className="pink__highlight">Design</mark>, and <mark className="blue__highlight">Docs</mark>.</h3>
        <CTA/>
      </div>

      <div className="img__container animate__block1">
        <div>
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