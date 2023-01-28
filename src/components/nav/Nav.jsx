import React, {useState} from 'react'
import './nav.css'
import Logo from './Logo'
import {FaUser} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'
import {AiFillMessage} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
const Nav = () => {
  const [showLinks, setShowLinks] = useState(false)
  const [openToggle, setOpenToggle] = useState(true)
  const [closeToggle, setCloseToggle] = useState(true)

  const handleOpen = () => {
    setShowLinks(true)
    setOpenToggle(false)
    setCloseToggle(false)
  }
  const handleClose = () => {
    setShowLinks(false)
    setOpenToggle(true)
    setCloseToggle(true)
  }
  return (
    <main className='nav_container'>
      <nav className={showLinks ? 'nav_show' : ""}>
        <Logo />
        <div className='nav_content'>
          <a href="#about"><FaUser /> About</a>
          <a href="#portfolio"><FaFolderOpen /> Portfolio</a>
          <a href="#contact"><AiFillMessage /> Contact</a>
        </div>
        <div className='nav_toggle'>
          <GiHamburgerMenu className={openToggle ? 'open' : "N_open"} onClick={handleOpen} />
          <FaTimes className={openToggle ? 'close' : "N_close"} onClick={handleClose}/>
        </div>
      </nav>
    </main>
  )
}

export default Nav