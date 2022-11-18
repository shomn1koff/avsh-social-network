import React from 'react'
import c from './Input.module.scss'

const Input = ({placeholder, state, ...props}) => {
  return (
    <div className={c.input}>
        <input type="text" placeholder={placeholder} className={`${c.control} ${c[state]}`}/>
    </div>
  )
}

export default Input