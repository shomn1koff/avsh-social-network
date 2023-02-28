import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter Login'} name={'login'} component={"input"}/>
            </div>
            <div>
                <Field placeholder={'Enter Password'} name={'password'} component={"input"}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={"checkbox"}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default reduxForm({form: 'login'})(LoginForm);
