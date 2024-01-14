import React from 'react'
import './work.css'

import masterchef1 from '../../assets/Masterchef1.jpg'
import masterchef2 from '../../assets/Masterchef2.jpg'
import masterchef3 from '../../assets/Masterchef3.jpg'
import masterchef4 from '../../assets/Masterchef4.jpg'
import masterchef5 from '../../assets/Masterchef5.jpg'
import masterchef6 from '../../assets/Masterchef6.jpg'


import chorechasers1 from '../../assets/Chorechasers1.jpg'
import chorechasers2 from '../../assets/Chorechasers2.jpg'
import chorechasers3 from '../../assets/Chorechasers3.jpg'



import {BsGithub} from 'react-icons/bs'
import {MdOutlineOpenInNew} from 'react-icons/md'
import Carousel from 'react-bootstrap/Carousel'


const Work = () => {
  return (
    <section id="work" className='container__bg__work container_'>
      <h1><mark className='pink__highlight'>Portfolio</mark></h1>
      <h3>Projects I've Worked On.</h3>

      <div className='portfolio__container'>

        <article className='box1_'>
          <Carousel>
            <Carousel.Item>
              <img className='card__img__jpg d-block w-100' src={masterchef1} alt="Masterchef 1" />
            </Carousel.Item>

            <Carousel.Item>
              <img className='card__img__jpg d-block w-100' src={masterchef2} alt="Masterchef 2" />
            </Carousel.Item>

            <Carousel.Item>
              <img className='card__img__jpg d-block w-100' src={masterchef3} alt="Masterchef 3" />
            </Carousel.Item>

            <Carousel.Item>
              <img className='card__img__jpg d-block w-100' src={masterchef4} alt="Masterchef 4" />
            </Carousel.Item>

            <Carousel.Item>
              <img className='card__img__jpg d-block w-100' src={masterchef5} alt="Masterchef 5" />
            </Carousel.Item>

            <Carousel.Item>
              <img className='card__img__jpg d-block w-100' src={masterchef6} alt="Masterchef 6" />
            </Carousel.Item>
          </Carousel>
        </article>

        <article className='card_ box2_'>
          <h2>Masterchef</h2>
          <h4>Website that allows users to search and get recipe recommendations based on the ingredients they have readily available at home </h4>
          {/* icons for skills */}
          <div className='skills__container'>
            <div className='skill__box'>React</div><div className='skill__box'>Javascript</div>
            <div className='skill__box'>HTML/CSS</div><div className='skill__box'>Git</div><div className='skill__box'>MongoDB</div>
          </div>
          <div className='cta'>
            <a href="https://github.com/gonemad97/_masterchef" target='__blank' className='btn'><BsGithub style={{fontSize: '1.3rem'}}/></a>
            <a href="https://masterchef.herokuapp.com/" target='__blank' className='btn'><MdOutlineOpenInNew style={{fontSize: '1.3rem'}}/></a>
          </div>
        </article>

        <article className='card__right box3_'>
          <h2>ChoreChaser</h2>
          <h4>App design for an interactive website that gamifies allocating and tracking chores amongst co-habitants</h4>
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

        <article className='box4_'>
        <Carousel>
            <Carousel.Item>
              <img className='card__img__jpg d-block w-100' src={chorechasers1} alt="Chosechasers 1"/>
            </Carousel.Item>

            <Carousel.Item>
            <img className='card__img__jpg d-block w-100' src={chorechasers2} alt="Chosechasers 2"/>
            </Carousel.Item>

            <Carousel.Item>
            <img className='card__img__jpg d-block w-100' src={chorechasers3} alt="Chosechasers 3"/>
            </Carousel.Item>
          </Carousel>
        </article>

        {/* <article className='box5_'>
          <img className='card__img__jpg' src={proj1} alt="Project 3" />
        </article> */}

        {/* <article className='card_ box6_'>
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