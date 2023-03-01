import React from 'react';
import {Field, reduxForm} from "redux-form";
import Input, {MyInput} from "../UI/Input/Input";
import {maxLengthCreator, required} from "../../utils/validators";
import c from './LoginForm.module.scss'
import buttonStyles from '../UI/Button/Button.module.scss'
import Checkbox from "../UI/Input/Checkbox";
import Button from "../UI/Button/Button";

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {

    return (
        <form className={c.loginFormWrapper} onSubmit={props.handleSubmit}>
            <h1 className={c.formTitle}>Login</h1>
            <div>
                <div className={c.inputWrapper}>
                    <Field placeholder={'Enter Login'}
                           name={'login'}
                           type={'input'}
                           validate={[required, maxLength20]}
                           component={MyInput}/>
                </div>
                <div className={c.inputWrapper}>
                    <Field placeholder={'Enter Password'}
                           name={'password'}
                           type={'input'}
                           validate={[required, maxLength20]}
                           component={MyInput}/>
                </div>
            </div>
            <div className={c.checkboxAndButtonWrapper}>
                <Field name={'rememberMe'} title={'Remember me'} component={Checkbox} type={'checkbox'}/>
                <button className={buttonStyles.button + ' ' + buttonStyles['secondary'] + ' ' + buttonStyles['fitcontent']}>Login</button>
            </div>
        </form>
    );
};

export default reduxForm({form: 'login'})(LoginForm);
