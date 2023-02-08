import React from 'react'
import './work.css'

import {DiReact,DiAngularSimple, DiCss3, DiHtml5, DiJavascript1, DiMongodb, DiHeroku} from 'react-icons/di'
import {BsGithub} from 'react-icons/bs'
import {MdOutlineOpenInNew} from 'react-icons/md'
import {SiTypescript, SiFigma} from 'react-icons/si'

const Work = () => {
  return (
    <section id="work">
      <h1>Portfolio</h1>
      <h3>Projects I've Worked On</h3>

      <div className='container portfolio__container'>
        <article style={{border: '5px solid #a6c1a2'}} className='card'>
          <h2>Masterchef</h2>
          <h4>App to help users select ingredients and make recipes</h4>
          <div className='skills__icons'>
            <DiReact/><DiCss3/><DiHtml5/><DiJavascript1/><DiMongodb/><DiHeroku/>
          </div>
          <div>
            <a href="https://github.com/gonemad97/MasterChef" className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
            <a href="https://github.com/gonemad97/MasterChef" className='btn'><MdOutlineOpenInNew style={{fontSize: '1.3rem'}}/></a>
          </div>
          
        </article>

        <article style={{border: '5px solid #f89b9b'}} className='card'>
          <h2>Portfolio Website</h2>
          <h4>My personal website that you're viewing here!</h4>
          <div className='skills__icons'>
            <DiReact/><DiCss3/><DiHtml5/><DiJavascript1/><DiHeroku/>
          </div>
          <div>
            <a href="https://github.com/gonemad97/portfolio-website" className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
          </div>
        </article>

        <article style={{border: '5px solid #75bde0'}} className='card'>
          <h2>Fourier UI</h2>
          <h4>UI to help storage team perform, increase, decomm requests for the rest of the firm</h4>
          {/* icons for skills */}
          <div className='skills__icons'>
            <DiAngularSimple/><DiCss3/><DiHtml5/><SiTypescript/>
          </div>
          <div>
            <a href="https://github.com/gonemad97" className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
            {/* <a href="https://github.com/gonemad97" className='btn'><MdOutlineOpenInNew style={{fontSize: '1.3rem'}}/></a> */}
          </div>
        </article>

        <article style={{border: '5px solid #a6c1a2'}} className='card'>
          <h2>BarHopper</h2>
          <h4>App design for a menu and payment app for bars/pubs</h4>
          {/* icons for skills */}
          <div className='skills__icons'>
            <SiFigma/>
          </div>
          <div>
            <a href="https://github.com/gonemad97" className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
            <a href="https://github.com/gonemad97" className='btn'><MdOutlineOpenInNew style={{fontSize: '1.3rem'}}/></a>
          </div>
        </article>

      </div>
    </section>
    )
}

export default Work