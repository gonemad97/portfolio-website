import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

const Socials = () => {
  return (
    <div className="socials">
        <a className='social__icon' href="https://www.linkedin.com/in/madhurikp/" target="_blank"><FaLinkedin/></a>
        <a className='social__icon' href="https://github.com/gonemad97" target="_blank"><FaGithub/></a>
        <a className='social__icon' href="mailto: madhuripalanivelu@gmail.com" target="_blank"><AiOutlineMail/></a>
    </div>
  )
}

export default Socials