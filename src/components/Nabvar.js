import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar=()=>(
    <ul className='lista'>
      <NavLink to='/' className='linksito'><li>Home</li></NavLink>
      <NavLink to='/info' className='linksito'><li>Info</li></NavLink> 
      <NavLink to='/products' className='linksito'><li>Products</li></NavLink>  
      <NavLink to='/contact' className='linksito'><li>Contact</li></NavLink> 
      <NavLink to='/patient' className='linksito'><li>Patient</li></NavLink>
      </ul>
)

export default Navbar;