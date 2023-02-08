import React from 'react'
import resume from '../../assets/resume.pdf'
import {BsDownload} from 'react-icons/bs'

const CTA = () => {
  return (
    <div className="cta">
        <a href={resume} download className='btn'>Download Resume <BsDownload></BsDownload></a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA