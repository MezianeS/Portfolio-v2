import React from 'react'

import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Contact />
      <Portfolio />
      <Experience />
      <Services />
      <Footer />
    </>
  )
}

export default App