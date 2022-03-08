import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbox">
        <div className='leftside'><h1>.IEE</h1></div>
        <div className='rightside'>
            <Link to='/signup' className='navlinks'>SIGN UP</Link>    
            <Link to='/login' className='navlinks'>LOGIN</Link>    
        </div>

    </div>
  )
}
