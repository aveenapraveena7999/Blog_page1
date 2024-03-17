import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../img/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='container'>
    <div className='logo'>
    <img src={logo} alt="" />
    </div>
    <div className='links'>
      <Link className='link' to ="/?cat=a"> 
      <h6>Art</h6></Link>
      <Link className='link' to ="/?cat=a"> 
      <h6>TECHNOLOGY</h6></Link>
      <Link className='link' to ="/?cat=a"> 
      <h6>DESIGN</h6></Link>
      <Link className='link' to ="/?cat=a"> 
      <h6>FOOD</h6></Link>
      <Link className='link' to ="/?cat=a"> 
      <h6>CINEMA</h6></Link>
      <Link className='link' to ="/?cat=a"> 
      <h6>ABOUT</h6></Link>
      <span>john</span>
      <span>Logout</span>
      <span className='write'>
      <Link className='link' to="/write">Write</Link>
      </span>
    </div>
    </div>
    </div>
  )
}

export default Navbar