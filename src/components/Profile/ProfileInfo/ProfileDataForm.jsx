import React from "react";
import {Field, reduxForm} from "redux-form";
import c from "./ProfileInfo.module.scss";
import Button from "../../UI/Button/Button";
import {required} from "../../../utils/validators";
import Input from "../../UI/Input/Input";
import buttonStyles from "../../UI/Button/Button.module.scss";
import Checkbox from "../../UI/Input/Checkbox";

const createField = (placeholder, name, validators, component, props={}, text="") => {
    return  <Field placeholder={placeholder}
                   name={name}
                   validate={validators}
                   component={component}
                   {...props}/>
}
const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={c.nameAndDescription}>
            <button className={buttonStyles.button + ' ' + buttonStyles['secondary'] + ' ' + buttonStyles['fitcontent']}>Сохранить</button>
            {createField('Введите имя', 'fullName', [], Input)}
            <div className={c.profileDescription}>
                {createField('Введите инфу о себе', 'aboutMe', [], Input)}
            </div>
            {createField('', 'lookingForAJob', [], Checkbox)}
            {createField('Введите скиллы', 'lookingForAJobDescription', [], Input)}

            <div>
                Contacts:
                <div className={c.contacts}>
                    {/*{Object.keys(props.profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>)}*/}
                </div>
            </div>

        </form>
    )
}

export default reduxForm({form: 'profileData'})(ProfileDataForm)