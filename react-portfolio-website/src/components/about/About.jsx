import React from 'react'
import './about.css'
import me from '../../assets/me2.jpg'
import {BsEmojiSmile} from 'react-icons/bs'


const About = () => {
  return (
    <section id="about">
      <h1>About Me</h1><br/>
      <div className="container about__container">
        <div className="about__img__container">
          <div>
            <img className='about__img' src={me} alt="My Picture" />
          </div>
        </div>

        <article className='about__card'>
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