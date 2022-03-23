import React from 'react'
import { Link } from "react-router-dom";
import './Components.sass';

const NavBar = () => {
  return (
    <nav className='nav'>
      <h1><Link to='/'>Home</Link></h1>
      <h1><Link to='/films'>Films</Link></h1>
      <h1><Link to='/people'>People</Link></h1>
      <h1><Link to='/planets'>Planets</Link></h1>
    </nav>
  )
}

export default NavBar