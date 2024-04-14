import React from 'react'
import logo from "../assests/sitlogo.jpg"
import { Link } from 'react-router-dom';
import '../styles/navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar__left'>
            <img src={logo} alt='logo' />
        </div>

        <div className='navbar__right'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>

           
        </div>

        
      
    </div>
  )
}

export default Navbar
