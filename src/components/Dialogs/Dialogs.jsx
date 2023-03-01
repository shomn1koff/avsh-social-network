import React from 'react'
import Button from '../UI/Button/Button'
import Input, {MyInput} from '../UI/Input/Input'
import DialogItem from './DialogItem/DialogItem'
import c from './Dialogs.module.scss'
import Message from './Message/Message'
import { Navigate } from 'react-router-dom'
import {Field, reduxForm} from "redux-form";


function MessageForm(props) {
    return <form className={c.messageForm} onSubmit={props.handleSubmit}>
        <Field placeholder={"Введите сообщение!"}
               name={"message"}
               type="text"
               component={Input}/>
        <Button type={"secondary"} onClick={props.onClick}>Add message</Button>
    </form>;
}

const MessageReduxForm = reduxForm({form: 'message'})(MessageForm)

const Dialogs = ({dialogsPage, addNewMessage, updateNewMessageBody, newMessageBody, ...props}) => {
  const dialogElements = dialogsPage.dialogs.map((dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>))
  const messageElements = dialogsPage.messages.map((msg) => <Message senderName={msg.senderName} message={msg.message} key={msg.id}/>)

  let onAddMessage = (formData) => {
    addNewMessage(formData.message)
  }


  return (
    <div className={c.dialogsWrapper}>
        <div className={c.dialogs}>
            {dialogElements}
        </div>
        <div className={c.messages}>
            <MessageReduxForm onSubmit={onAddMessage}/>
            {messageElements}
        </div>
    </div>
  )
}

export default Dialogs