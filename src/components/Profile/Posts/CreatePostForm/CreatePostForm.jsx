import React from 'react'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import c from './CreatePostForm.module.scss'

const CreatePostForm = ({addNewPost}) => {

  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
    addNewPost(text)
    newPostElement.current.value = ''
  }

  return (
    <form className={c.formWrapper}>
      <Input type="text" state={'success'} placeholder={'Введите сообщение'} reference={newPostElement}/>
      <Button type={'secondary'} onClick={addPost}>Добавить пост</Button>
    </form>
  )
}

export default CreatePostForm