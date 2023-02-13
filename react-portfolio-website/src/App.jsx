import React from 'react'
import Navbar from './components/navbar/Navbar'
import Contact from './components/contact/Contact'
import Landing from './components/landing/Landing'
import Work from './components/work/Work'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import NavbarTop from './components/navbar/NavbarTop'


const App = () => {
  return ( 
  <>
    <NavbarTop />
    <Landing />
    <About />
    <Work />
    <Contact />
    <Footer />
  </>
  )
}

export default App