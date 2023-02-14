import React from 'react'
import './about.css'
import me from '../../assets/me2.jpg'
import {BsEmojiSmile} from 'react-icons/bs'
import {SiTypescript, SiFigma} from 'react-icons/si'
import {DiReact,DiAngularSimple, DiCss3, DiHtml5, DiJavascript1, DiMongodb, DiHeroku} from 'react-icons/di'
import {BsGithub} from 'react-icons/bs'


const About = () => {
  return (
    <section id="about" className='container__bg container'>
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
          <div className='skills__container'>
            <div className='skill__box'><DiReact style={{fontSize:'1.5rem'}}/> React</div><div className='skill__box'><DiAngularSimple style={{fontSize:'1.5rem'}}/> Angular</div><div className='skill__box'><DiJavascript1 style={{fontSize:'1.5rem'}}/> Javascript</div>
            <div className='skill__box'><SiTypescript style={{fontSize:'1.5rem'}}/> Typescript</div><div className='skill__box'><DiHtml5 style={{fontSize:'1.5rem'}}/>HTML</div><div className='skill__box'><DiCss3 style={{fontSize:'1.5rem'}}/>CSS</div><div className='skill__box'><BsGithub style={{fontSize:'1.5rem'}}/> Git</div>
            <div className='skill__box'><SiFigma style={{fontSize:'1.5rem'}}/> Figma</div><div className='skill__box'><DiMongodb style={{fontSize:'1.5rem'}}/> MongoDB</div><div className='skill__box'><DiHeroku style={{fontSize:'1.5rem'}}/> Heroku</div>
          </div><br />
        
            <h4 style={{fontSize:'1.1rem'}}>Hey, I'm Madhuri! I'm currently working as a Software Engineer at Goldman Sachs in Salt Lake City.
            I've been trying to find my niche as a Software Engineer for years and it wasn't until I took the lead on a Full Stack project at work, that I
             realized how much I enjoyed Frontend development and UX design!</h4> <br/>
             <h4 style={{fontSize:'1.1rem'}}>Besides my technical interests, I love writing, listening to Coldplay, dabbling in makeup and skin care, and playing video games! I'm trying to be a more active person,
              (as you can see, I forced a smile while hiking), but I genuinely do enjoy nature and the beauty of changing seasons. <BsEmojiSmile/></h4>
        </article>

      </div>

    </section>
  )
}

export default About