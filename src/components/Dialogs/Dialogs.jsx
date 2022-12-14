import React from 'react'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import DialogItem from './DialogItem/DialogItem'
import c from './Dialogs.module.scss'
import Message from './Message/Message'

import { addNewMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogsPageReducer'




const Dialogs = ({dialogsPage, dispatch}) => {
  const dialogElements = dialogsPage.dialogs.map((dialog => <DialogItem id={dialog.id} name={dialog.name}/>))
  const messageElements = dialogsPage.messages.map((msg) => <Message senderName={msg.senderName} message={msg.message}/>)

  let newMessageBody = dialogsPage.newMessageBody

  let addMessage = () => {
    dispatch(addNewMessageActionCreator())
  }

  const onNewMessageChange = (e) => {
    let text = e.target.value
    dispatch(updateNewMessageBodyActionCreator(text))
    console.log(text)
  }


  return (
    <div className={c.dialogsWrapper}>
      <div className={c.dialogs}>
        {dialogElements}
      </div>
      <div className={c.messages}>
        <div className={c.messageForm}>
          <Input type="text" state={'success'} value={newMessageBody} onChange={onNewMessageChange} placeholder={'Введите сообщение!'}/>
          <Button type={'secondary'} onClick={addMessage}>Add message</Button>
        </div>
        {messageElements}
      </div>
    </div>
  )
}

export default Dialogs