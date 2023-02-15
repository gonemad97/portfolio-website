import React from 'react'
import resume from '../../assets/resume.pdf'
import {BsDownload} from 'react-icons/bs'
import Socials from './Socials'


const CTA = () => {
  return (
    <div className="cta animate__block2">
        <a href={resume} download className='btn btn-primary'>Download Resume <BsDownload></BsDownload></a>
        {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}
        <Socials/>
    </div>
  )
}

export default CTA