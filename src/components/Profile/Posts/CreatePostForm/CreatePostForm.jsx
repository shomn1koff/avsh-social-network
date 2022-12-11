import React from 'react'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import c from './CreatePostForm.module.scss'

const CreatePostForm = ({dispatch, newPostText, updateNewPostText}) => {

  let newPostElement = React.createRef()

  let addPost = () => {
    dispatch({ type: 'ADD-NEW-POST', text: newPostText})
    updateNewPostText('')
  }

  let updateTextInput = () => {
    let text = newPostElement.current.value
    dispatch({type: 'UPDATE-NEW-POST-TEXT', text: text})
  }

  return (
    <div className={c.formWrapper}>
      <Input type="text" state={'success'} placeholder={'Введите сообщение'} value={newPostText} onChange={updateTextInput} reference={newPostElement}/>
      <Button type={'secondary'} onClick={addPost}>Добавить пост</Button>
    </div>
  )
}

export default CreatePostForm