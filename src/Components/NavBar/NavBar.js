import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <a href='/' className='logo'>Maaloum Blog</a>
      </div>
      <ul className='navbar__links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/newblog'>New Blog</Link>
        </li>
      </ul>

    </nav>
  )
}
