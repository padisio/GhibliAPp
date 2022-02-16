import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='container'>
    <nav className="nav">
    <h3 className='logo'>Ghibli App</h3>
    <Link className="nav-link menuLink" to='/'>Películas</Link>
    {/* <Link className="nav-link menuLink" to='/film'>Film</Link> */}
    <Link className="nav-link menuLink" to='/especies'>Especies</Link>
     </nav>
    </div>
  ) 
}
