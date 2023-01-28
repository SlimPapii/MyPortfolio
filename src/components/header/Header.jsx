import React from 'react'
import './header.css'
import ME from '../../medias&files/gradMe.jpeg'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>I am</h5>
        <h1>Abiodun Olonade</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <HeaderLeft />
        <div className="me">
          <img src={ME} className="img" alt="me" />
        </div>
        <HeaderRight />
      </div>
    </header>
  )
}

export default Header