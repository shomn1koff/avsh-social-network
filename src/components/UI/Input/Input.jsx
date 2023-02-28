import React from 'react'
import c from './Input.module.scss'

const Input = ({placeholder, state, onBlur ,reference, value, onChange, onKeyDown, ...props}) => {
  return (
    <div className={c.input}>
        <input {...props} type="text" onBlur={onBlur} placeholder={placeholder} className={`${c.control} ${c[state]}`} ref={reference} value={value} onChange={onChange} onKeyDown={onKeyDown}/>
    </div>
  )
}

export const MyInput = ({state, reference, input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={c.input}>
            <input {...input} {...props}  className={`${c.control} ${c[state]} ` + (hasError ? c.invalid : '')} ref={reference}/>
            <span>{meta.error}</span>
        </div>
    )
}

export default Input