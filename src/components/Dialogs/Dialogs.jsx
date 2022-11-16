import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import c from './Dialogs.module.scss'
import Message from './Message/Message'




const Dialogs = ({dialogs, messages}) => {
  const dialogElements = dialogs.map((dialog => <DialogItem id={dialog.id} name={dialog.name}/>))
  const messageElements = messages.map((msg) => <Message senderName={msg.senderName} message={msg.message}/>)

  let newPostElement = React.createRef()
  let addPost = () => {
    let text = newPostElement.current.value
    alert(text)
  }

  return (
    <div className={c.dialogsWrapper}>
      <div className={c.dialogs}>
        {dialogElements}
      </div>
      <div className={c.messages}>
        <div className="input">
          <input type="text" ref={newPostElement}/>
          <button onClick={addPost}>Add message</button>
        </div>
        {messageElements}
      </div>
    </div>
  )
}

export default Dialogs