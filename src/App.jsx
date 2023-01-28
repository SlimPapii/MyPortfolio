import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Porfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App