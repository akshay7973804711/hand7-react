import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id="Navbar">
            {/* <div><Link to='/' className='link'>Home</Link></div>
              <div><Link to='/student' className='link'>Student</Link></div>
              <div><Link to='/contact' className='link'>Contact US</Link></div> */}
            <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "notactive")}>Home</NavLink>
            <NavLink to='/Students' className={({ isActive }) => (isActive ? "active" : "notactive")}>Students</NavLink>
            <NavLink to='/ContactUs' className={({ isActive }) => (isActive ? "active" : "notactive")}>ContactUs</NavLink>
        </div>
    )
}

export default Navbar