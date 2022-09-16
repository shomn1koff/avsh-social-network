import React from 'react'
import c from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={c.navbar}>
      <ul>
        <li><div className={c.navLink}><NavLink to='/profile' className={({isActive}) => isActive ? c.activeLink : undefined}>Profile</NavLink></div></li>
        <li><div className={c.navLink}><NavLink to='/dialogs' className={({isActive}) => isActive ? c.activeLink : undefined}>Messages</NavLink></div></li>
        <li><div className={c.navLink}><NavLink to='/news' className={({isActive}) => isActive ? c.activeLink : undefined}>News</NavLink></div></li>
        <li><div className={c.navLink}><NavLink to='/music' className={({isActive}) => isActive ? c.activeLink : undefined}>Music</NavLink></div></li>
        <li><div className={c.navLink}><NavLink to='/settings' className={({isActive}) => isActive ? c.activeLink : undefined}>Settings</NavLink></div></li>

      </ul>
     </div>
  )
}

export default Navbar