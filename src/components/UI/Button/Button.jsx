import React from 'react'
import c from './Button.module.scss'

const Button = ({ children, type, fit, ...props}) => {
  return <button {...props} className={`${c.button} ${c[type]} ${c[fit]}`}>{children}</button>
}

export default Button
