import React from 'react'
import './work.css'

import {DiReact,DiAngularSimple, DiCss3, DiHtml5, DiJavascript1, DiMongodb, DiHeroku} from 'react-icons/di'
import {BsGithub} from 'react-icons/bs'
import {MdOutlineOpenInNew} from 'react-icons/md'
import {SiTypescript, SiFigma} from 'react-icons/si'

const Work = () => {
  return (
    <section id="work">
      <h1 style={{fontSize: '4rem'}}>Portfolio</h1>
      <h3 >Projects I've Worked On.</h3>

      <div className='container portfolio__container'>

        <article className='card box1'>
          <h2><mark className='yellow__highlight'>Portfolio Website</mark></h2>
          <h4>My personal website that you're viewing here!</h4>
          <div className='skills__icons'>
            <DiReact/><DiCss3/><DiHtml5/><DiJavascript1/><DiHeroku/>
          </div>
          <div className='cta'>
            <a href="https://github.com/gonemad97/portfolio-website" target='__blank' className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
          </div>
        </article>

        <article className='card box2'>
          <h2><mark className='yellow__highlight'>BarHopper</mark></h2>
          <h4>App design for a menu and payment app for bars/pubs</h4>
          {/* icons for skills */}
          <div className='skills__icons'>
            <SiFigma/><DiReact/><DiCss3/><DiHtml5/><DiJavascript1/>
          </div>
          <div className='cta'>
            <a href="https://github.com/gonemad97" target='__blank' className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
            {/* <a href="https://github.com/gonemad97" target='__blank' className='btn'><MdOutlineOpenInNew style={{fontSize: '1.3rem'}}/></a> */}
          </div>
        </article>

        <article className='card box3'>
          <h2><mark className='yellow__highlight'>BarHopper</mark></h2>
          <h4>App design for a menu and payment app for bars/pubs</h4>
          {/* icons for skills */}
          <div className='skills__icons'>
            <SiFigma/><DiReact/><DiCss3/><DiHtml5/><DiJavascript1/>
          </div>
          <div className='cta'>
            <a href="https://github.com/gonemad97" target='__blank' className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
            {/* <a href="https://github.com/gonemad97" target='__blank' className='btn'><MdOutlineOpenInNew style={{fontSize: '1.3rem'}}/></a> */}
          </div>
        </article>

        <article className='card box4'>
          <h2><mark className='yellow__highlight'>BarHopper</mark></h2>
          <h4>App design for a menu and payment app for bars/pubs</h4>
          {/* icons for skills */}
          <div className='skills__icons'>
            <SiFigma/><DiReact/><DiCss3/><DiHtml5/><DiJavascript1/>
          </div>
          <div className='cta'>
            <a href="https://github.com/gonemad97" target='__blank' className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
            {/* <a href="https://github.com/gonemad97" target='__blank' className='btn'><MdOutlineOpenInNew style={{fontSize: '1.3rem'}}/></a> */}
          </div>
        </article>
        

      </div>
    </section>
    )
}

export default Work