import React from 'react'
import c from './Header.module.scss'
import {NavLink} from "react-router-dom";
import Button from "../UI/Button/Button";

const Header = (props) => {
    return (
        <div className={c.header}>
            <h1>FaceNote</h1>
            {props.isAuth
                ? <div className={c.logoutWrapper}>
                    <div className={c.hello}>Hello, {props.login}</div>
                    <Button type={'secondary'} onClick={props.logout}>Logout</Button>
                </div>
                : <NavLink to={'/login'}>Sign in</NavLink>}

        </div>
    )
}

export default Header