import React from 'react'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import c from './CreatePostForm.module.scss'


const CreatePostForm = ({newPostText, addPost, updateNewPostText}) => {
  

  const onAddPost = () => {
    addPost()
  }

  let onNewPostTextChange = (e) => {
    updateNewPostText(e)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate')
      addPost()
    }
  }

  return (
    <div className={c.formWrapper}>
      <Input type="text" state={'success'} placeholder={'Введите сообщение'} value={newPostText} onChange={onNewPostTextChange} onKeyDown={handleKeyDown}/>
      <Button type={'secondary'} onClick={onAddPost}>Добавить пост</Button>
    </div>
  )
}

export default CreatePostForm