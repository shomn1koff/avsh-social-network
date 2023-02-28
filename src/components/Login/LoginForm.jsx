import React from 'react';
import {Field, reduxForm} from "redux-form";
import Input, {MyInput} from "../UI/Input/Input";
import {maxLengthCreator, required} from "../../utils/validators";

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter Login'}
                       name={'login'}
                       type={'input'}
                       validate={[required, maxLength20]}
                       component={MyInput}/>
                <Field placeholder={'Enter Password'}
                       name={'password'}
                       type={'input'}
                       component={MyInput}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={"input"} type={'checkbox'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default reduxForm({form: 'login'})(LoginForm);
