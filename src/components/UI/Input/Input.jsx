import React from 'react'
import c from './Input.module.scss'

const Input = ({placeholder, state, reference, ...props}) => {
  return (
    <div className={c.input}>
        <input type="text" placeholder={placeholder} className={`${c.control} ${c[state]}`} ref={reference}/>
    </div>
  )
}

export default Input