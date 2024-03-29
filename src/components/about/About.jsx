import React from 'react'
import './about.css'
import me from '../../assets/me2.jpg'
import {BsEmojiSmile} from 'react-icons/bs'
import {SiTypescript, SiFigma} from 'react-icons/si'
import {DiReact,DiAngularSimple, DiCss3, DiHtml5, DiJavascript1, DiMongodb, DiHeroku} from 'react-icons/di'
import {BsGithub} from 'react-icons/bs'


const About = () => {
  return (
    <section id="about" className='container__bg__about container_'>
      <h1><mark className='green__highlight'>About Me</mark></h1>
      <h3>Hey There.</h3>
      
      <div className="about__container">
        <div className="about__img__container">
          <div>
            <img className='about__img' src={me} alt="My Picture" />
          </div>
        </div>

        <article className='about__card'>
          <h3 style={{fontSize:'1.5rem'}}>Skills</h3>
          <div className='skills__container__about'>
            <div className='skill__box'><DiReact /> React</div><div className='skill__box'><DiAngularSimple /> Angular</div><div className='skill__box'><DiJavascript1 /> Javascript</div>
            <div className='skill__box'><SiTypescript /> Typescript</div><div className='skill__box'><DiHtml5 />HTML</div><div className='skill__box'><DiCss3 />CSS</div><div className='skill__box'><BsGithub /> Git</div>
            <div className='skill__box'><SiFigma /> Figma</div><div className='skill__box'><DiMongodb /> MongoDB</div><div className='skill__box'><DiHeroku /> Heroku</div>
          </div>
        
            <h4 className='about__para'>Hey, I'm Madhuri! I'm currently working as a <mark className='about__descr__hightlight'>Software Engineer II at Goldman Sachs</mark>.</h4>
            <h4>Throughout my journey to becoming an SDE, I’ve dabbled in all kinds of niches to find what felt right - Tech Writing, UX Design, etc. I finally learned that as much as I enjoyed coming up with Backend logic for applications, I absolutely loved the creativity, color, and copy that Frontend development required.
            That is how I learned that Full Stack development was for me!</h4> 
             <h4 className='about__para'>Besides my technical interests, I love writing, binging sitcoms (or weeping to them), playing video games, and hanging out with friends. I'm also trying to be a more active person -
              as you can see, I forced a smile while hiking. <BsEmojiSmile/></h4>
        </article>

      </div>

    </section>
  )
}

export default About