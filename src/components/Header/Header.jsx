import React from 'react'
import c from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <div className={c.header}>
        <h1>FaceNote</h1>
        {props.isAuth
        ? <h1>Hello, {props.login}</h1>
        : <NavLink to={'/login'}>Sign in</NavLink>}

    </div>
  )
}

export default Header