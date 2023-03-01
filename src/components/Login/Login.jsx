import React from 'react';
import LoginForm from "./LoginForm";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;