import React from 'react'
import c from './Button.module.scss'

const Button = ({ children, type, ...props}) => {
  return <button {...props} className={`${c.button} ${c[type]}`}>{children}</button>
}

export default Button
