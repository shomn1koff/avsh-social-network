import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './DialogItem.module.scss'


const DialogItem = ({ id, name }) => {
    return (
      <div className={c.dialog}>
        <NavLink to={'/dialogs/' + id} className={({ isActive }) => isActive ? c.activeDialog : undefined}>{name}</NavLink>
      </div>
    )
  }

export default DialogItem