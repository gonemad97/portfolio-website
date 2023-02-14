import React from 'react'
import './work.css'
import proj1 from '../../assets/proj1.jpg'


import {DiReact,DiAngularSimple, DiCss3, DiHtml5, DiJavascript1, DiMongodb, DiHeroku} from 'react-icons/di'
import {BsGithub} from 'react-icons/bs'
import {MdOutlineOpenInNew} from 'react-icons/md'
import {SiTypescript, SiFigma} from 'react-icons/si'

const Work = () => {
  return (
    <section id="work" className='container'>
      <h1><mark className='pink__highlight'>Portfolio</mark></h1>
      <h3>Projects I've Worked On.</h3>

      <div className='portfolio__container'>

        <article className='box1'>
           <img className='card__img__jpg' src={proj1} alt="Project 1" />
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

        <article className='card__right box3'>
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

        <article className='box4'>
          <img className='card__img__jpg' src={proj1} alt="Project 2" />
        </article>

        <article className='box5'>
          <img className='card__img__jpg' src={proj1} alt="Project 3" />
        </article>

        <article className='card box6'>
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