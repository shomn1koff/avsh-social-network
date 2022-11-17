import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import c from './Dialogs.module.scss'
import Message from './Message/Message'




const Dialogs = ({dialogs, messages, addNewMessage}) => {
  const dialogElements = dialogs.map((dialog => <DialogItem id={dialog.id} name={dialog.name}/>))
  const messageElements = messages.map((msg) => <Message senderName={msg.senderName} message={msg.message}/>)

  let newMessageElement = React.createRef()
  let addMessage = () => {
    let text = newMessageElement.current.value
    addNewMessage(text)
    newMessageElement.current.value = ''
  }


  return (
    <div className={c.dialogsWrapper}>
      <div className={c.dialogs}>
        {dialogElements}
      </div>
      <div className={c.messages}>
        <div className="input">
          <input type="text" ref={newMessageElement}/>
          <button onClick={addMessage}>Add message</button>
        </div>
        {messageElements}
      </div>
    </div>
  )
}

export default Dialogs