import React from 'react'
import './work.css'
import proj1 from '../../assets/proj1.jpg'
import {BsGithub} from 'react-icons/bs'

const Work = () => {
  return (
    <section id="work" className='container__bg container'>
      <h1><mark className='pink__highlight'>Portfolio</mark></h1>
      <h3>Projects I've Worked On.</h3>

      <div className='portfolio__container'>

        <article className='box1'>
           <img className='card__img__jpg' src={proj1} alt="Project 1" />
        </article>

        <article className='card box2'>
          <h2>Masterchef</h2>
          <h4>Website that allows users to search and get recipe recommendations based on the ingredients they have readily available at home </h4>
          {/* icons for skills */}
          <div className='skills__container'>
            <div className='skill__box'>React</div><div className='skill__box'>Javascript</div>
            <div className='skill__box'>HTML/CSS</div><div className='skill__box'>Git</div><div className='skill__box'>MongoDB</div>
          </div>
          <div className='cta'>
            <a href="https://github.com/gonemad97/MasterChef" target='__blank' className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
            {/* <a href="https://github.com/gonemad97" target='__blank' className='btn'><MdOutlineOpenInNew style={{fontSize: '1.3rem'}}/></a> */}
          </div>
        </article>

        <article className='card__right box3'>
          <h2>ChoreChaser</h2>
          <h4>App design for interactive website that gamifies allocating and tracking chores amongst co-habitants of a home</h4>
          {/* icons for skills */}
          <div className='skills__container'>
            <div className='skill__box'>React</div><div className='skill__box'>Javascript</div>
            <div className='skill__box'>HTML/CSS</div><div className='skill__box'>Git</div><div className='skill__box'>Prototyping</div>
            <div className='skill__box'>Redux</div>
          </div>
          <div className='cta'>
            <a href="https://github.com/BrennanBeeler/CS5340_ChoreChasers" target='__blank' className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
            {/* <a href="https://github.com/gonemad97" target='__blank' className='btn'><MdOutlineOpenInNew style={{fontSize: '1.3rem'}}/></a> */}
          </div>
        </article>

        <article className='box4'>
          <img className='card__img__jpg' src={proj1} alt="Project 2" />
        </article>

        <article className='box5'>
          <img className='card__img__jpg' src={proj1} alt="Project 3" />
        </article>

        {/* <article className='card box6'>
          <h2>BarHopper</h2>
          <h4>App design for a menu and payment app for bars/pubs</h4>
          <div className='skills__container'>
            <div className='skill__box'>React</div><div className='skill__box'>Javascript</div>
            <div className='skill__box'>HTML/CSS</div><div className='skill__box'>Git</div><div className='skill__box'>RESTful APIs</div>
            <div className='skill__box'>Figma</div>
          </div>
          <div className='cta'>
            <a href="https://github.com/gonemad97" target='__blank' className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
          </div>
        </article> */}
        

      </div>
    </section>
    )
}

export default Work