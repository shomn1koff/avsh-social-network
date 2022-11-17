import React from 'react'
import c from './Button.module.scss'

const Button = ({ children, ...props }) => {
  return <button {...props} className={c.button}>{children}</button>
}

export default Button
