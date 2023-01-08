import React from 'react'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import DialogItem from './DialogItem/DialogItem'
import c from './Dialogs.module.scss'
import Message from './Message/Message'



const Dialogs = ({dialogsPage, addMessage, updateNewMessageBody, newMessageBody}) => {
  const dialogElements = dialogsPage.dialogs.map((dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>))
  const messageElements = dialogsPage.messages.map((msg) => <Message senderName={msg.senderName} message={msg.message} key={msg.id}/>)

  let onAddMessage = () => {
    addMessage()
  }

  const onNewMessageChange = (e) => {
    let text = e.target.value
    updateNewMessageBody(text)
  }


  return (
    <div className={c.dialogsWrapper}>
      <div className={c.dialogs}>
        {dialogElements}
      </div>
      <div className={c.messages}>
        <div className={c.messageForm}>
          <Input type="text" state={'success'} value={newMessageBody} onChange={onNewMessageChange} placeholder={'Введите сообщение!'}/>
          <Button type={'secondary'} onClick={onAddMessage}>Add message</Button>
        </div>
        {messageElements}
      </div>
    </div>
  )
}

export default Dialogs