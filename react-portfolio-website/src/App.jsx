import React from 'react'
import Navbar from './components/navbar/Navbar'
import Contact from './components/contact/Contact'
import Landing from './components/landing/Landing'
import Work from './components/work/Work'
import About from './components/about/About'
import Footer from './components/footer/Footer'


const App = () => {
  return ( 
  <>
    <Navbar />
    <Landing />
    <Work />
    <About />
    <Contact />
    <Footer />
  </>
  )
}

export default App