import React from 'react'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import c from './CreatePostForm.module.scss'

const CreatePostForm = ({addNewPost, newPostText, updateNewPostText}) => {

  let newPostElement = React.createRef()

  let addPost = () => {
    addNewPost(newPostText)
    updateNewPostText('')
  }

  let updateTextInput = () => {
    let text = newPostElement.current.value
    updateNewPostText(text)
  }

  return (
    <div className={c.formWrapper}>
      <Input type="text" state={'success'} placeholder={'Введите сообщение'} value={newPostText} onChange={updateTextInput} reference={newPostElement}/>
      <Button type={'secondary'} onClick={addPost}>Добавить пост</Button>
    </div>
  )
}

export default CreatePostForm