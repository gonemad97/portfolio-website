import React from 'react'
import './landing.css'
import CTA from './CTA'

const Landing = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Madhuri Palanivelu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Landing