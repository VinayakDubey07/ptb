
import React from 'react'
import "./Navbar.css"

const NavBar = () => {
  return (
    
        <nav className='nav'>
            <a href='/' className='title' >BRAND.  </a>
            <ul>
                <li>
                <a href='/Pricing'>Pricing</a>
                </li><li>
                <a href='/About'>About</a>
                </li>
                
            </ul>

        </nav>

    
  )
}

export default NavBar