import React from 'react'
import './header.css'
import CTA from './CTA'


function Header() {
  return (
    <div className="container header__title">
      <h2>Hello I'm</h2>
      <h1>Sofiane Meziane</h1>
      <h4 className='text-light'>Fullstack Developer</h4>
      <CTA />
    </div>
  )
}

export default Header