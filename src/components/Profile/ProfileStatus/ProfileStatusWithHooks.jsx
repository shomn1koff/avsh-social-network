import React, {useEffect, useState} from 'react';
import c from "./ProfileStatus.module.scss";
import Input from "../../UI/Input/Input";

function ProfileStatusWithHooks(props) {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    console.log('rendered')

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onStatusChange = (e)  => {
        setStatus(e.target.value)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (
        <div className={c.status_wrapper}>
            {!editMode && <Input onClick={activateEditMode} readOnly value={`Статус: ${props.status}`}/>}
            {editMode && <Input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} value={status} placeholder={status}/>}
        </div>
    );
}

export default ProfileStatusWithHooks;