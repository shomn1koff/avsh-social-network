import React from 'react'
import c from './Message.module.scss'

const Message = ({senderName, message}) => {
    return (
      <div className={c.message}>
        <h3>{senderName}</h3>
        <p>{message}</p>
      </div>
    )
}

export default Message