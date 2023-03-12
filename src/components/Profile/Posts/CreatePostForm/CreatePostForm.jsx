import React from 'react'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import c from './CreatePostForm.module.scss'
import {Field, reduxForm} from "redux-form";
import buttonStyles from "../../../UI/Button/Button.module.scss";


const PostForm = (props) => {
  return <form className={c.formWrapper} onSubmit={props.handleSubmit}>
    <div>
      <Field name={"postText"}
             type={"text"}
             state={"success"}
             placeholder={"Введите сообщение"}
             fit={'fitcontent'}
             component={Input}/>
    </div>
    <button className={buttonStyles.button + " " + buttonStyles["secondary"] + " " + buttonStyles["fitcontent"]}>Добавить пост
    </button>
  </form>;
}

const ReduxPostForm = reduxForm({form: 'postForm'})(PostForm)

const CreatePostForm = (props) => {

  const onAddPost = (formData) => {
    props.addPost(formData.postText)
  }

  return (
    <ReduxPostForm onSubmit={onAddPost}/>
  )
}

export default CreatePostForm