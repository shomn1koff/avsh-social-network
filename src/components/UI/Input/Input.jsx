import React from 'react'
import c from './Input.module.scss'

export default function({state, reference, fit, input, meta, ...props}) {

    const hasError = meta && meta.touched && meta.error

    return (
        <>
            <div className={c.input}>
                <input {...input} {...props}  className={`${c.input__control} ${c[state]} ` + (hasError ? c.input__control_invalid : '') + c[fit]} ref={reference}/>
                <div className={c.input__stateIcon}></div>
            </div>
            <div className={hasError ? c.warningLabel : c.noWarningLabel}>{hasError || 'noError'}</div>
        </>
    )
}
