import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className="socials">
        <a className='social__icon' href="https://www.linkedin.com/in/madhurikp/" target="_blank"><FaLinkedin/></a>
        <a className='social__icon' href="https://github.com/gonemad97" target="_blank"><FaGithub/></a>
        <a className='social__icon' href="https://www.instagram.com/madhuripalanivelu/?hl=en" target="_blank"><FaInstagram/></a>
    </div>
  )
}

export default Socials