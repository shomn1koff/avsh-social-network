import React from 'react';
import c from './Checkbox.module.scss'

const Checkbox = ({ input, meta, ...props }) => {
    return (
        <label className={c.checkbox}>
            <input {...input} {...props} type="checkbox" className={c.checkbox__input}/>
            <div className={c.checkbox__control}>
                <div className={c.checkbox__icon}>
                    <svg
                        width="15"
                        height="13"
                        viewBox="0 0 15 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.5 7.5L5 11L13 2"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div className={c.checkbox__title}>{props.title}</div>
        </label>
    );
};

export default Checkbox;
