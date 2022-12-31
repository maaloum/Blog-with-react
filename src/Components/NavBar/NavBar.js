import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <h2>Maaloum Blog</h2>
      </div>
      <ul className='navbar__links'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>New Blog</a>
        </li>
      </ul>

    </nav>
  )
}
