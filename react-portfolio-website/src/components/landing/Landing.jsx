import React from 'react'
import './landing.css'
import CTA from './CTA'
import me from '../../assets/me1.jpg'
import {BsChevronRight} from 'react-icons/bs'
import Socials from './Socials'

const Landing = () => {
  return (
    <header id="home" className='container'>
        <div id="background-wrap">
            <div className="x1">
              <div className="cloud"></div>
            </div>

            <div class="x2">
              <div class="cloud"></div>
            </div>

            <div class="x3">
                <div class="cloud"></div>
            </div>

            <div class="x4">
                <div class="cloud"></div>
            </div>

            <div class="x5">
                <div class="cloud"></div>
            </div>
          </div>
      <div className="header__container">
        <div className='animate__block1'>
          <h3 style={{fontSize:'4rem', display:'inline'}}> Hey there! I'm </h3>
          <h1 style={{fontSize: '6rem', display:'inline'}}><b>Madhuri.</b></h1>
        </div>
        <h3 className='animate__block2' style={{fontSize: '2rem',paddingTop: '1rem'}}>A Fullstack Engineer who loves all things <mark className="green__highlight">Web</mark>, <mark className="pink__highlight">Design</mark>, and <mark className="blue__highlight">Docs</mark>.</h3>
        <CTA/>
      </div>

      {/* <div className="img__container animate__block1">
        <div>
          <img src={me} alt="My Picture" />
        </div>
      </div> */}

      {/* <div>
        <a href="#work" className="scrolldown__work">Scroll Down</a>
      </div> */}
    </header>
  )
}

export default Landing