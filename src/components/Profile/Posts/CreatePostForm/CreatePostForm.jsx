import React from 'react'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import c from './CreatePostForm.module.scss'

import { addNewPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profilePageReducer'



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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate')
      addPost()
    }
  }

  return (
    <div className={c.formWrapper}>
      <Input type="text" state={'success'} placeholder={'Введите сообщение'} value={newPostText} onChange={updateTextInput} onKeyDown={handleKeyDown} reference={newPostElement}/>
      <Button type={'secondary'} onClick={addPost}>Добавить пост</Button>
    </div>
  )
}

export default CreatePostForm