import React from 'react'
import './landing.css'
import CTA from './CTA'

const Landing = () => {
  return (
    <header id="home" className='container_'>
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
          <h3 id='landing__heading1'> Hey there! I'm </h3>
          <h1 id='landing__heading2'><b>Madhuri.</b></h1>
        </div>
        <h3 id='landing__heading3' className='animate__block2'>A Full Stack Engineer who loves all things <mark className="green__highlight">Web</mark>, <mark className="pink__highlight">Design</mark>, and <mark className="lemon__highlight">Docs</mark>.</h3>
        <CTA/>
      </div>

    </header>
  )
}

export default Landing