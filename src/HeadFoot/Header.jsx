import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"


const Header = () => {
  return (
    <>
    <div id='header-flex'>
        <div className='header-link'><Link to="/">Home</Link></div>
        <div className='header-link'><Link to="/student">Student</Link></div>
        <div className='header-link'><Link to="/contactus">About us</Link></div>
    </div>   
    </>
  )
}

export default Header