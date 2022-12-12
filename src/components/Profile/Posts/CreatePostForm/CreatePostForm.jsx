import React from 'react'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import c from './CreatePostForm.module.scss'

import { addNewPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/state'



const CreatePostForm = ({dispatch, newPostText}) => {

  let newPostElement = React.createRef()

  let addPost = () => {
    dispatch(addNewPostActionCreator())
    dispatch(updateNewPostTextActionCreator(''))
  }

  let updateTextInput = () => {
    let text = newPostElement.current.value
    let action = updateNewPostTextActionCreator(text)
    dispatch(action)
  }

  return (
    <div className={c.formWrapper}>
      <Input type="text" state={'success'} placeholder={'Введите сообщение'} value={newPostText} onChange={updateTextInput} reference={newPostElement}/>
      <Button type={'secondary'} onClick={addPost}>Добавить пост</Button>
    </div>
  )
}

export default CreatePostForm