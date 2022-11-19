import React from 'react'
import c from './Input.module.scss'

const Input = ({placeholder, state, reference, value, onChange, ...props}) => {
  return (
    <div className={c.input}>
        <input type="text" placeholder={placeholder} className={`${c.control} ${c[state]}`} ref={reference} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input