import React, {useState} from "react";
import Preloader from "../../UI/Preloader/Preloader";
import c from "./ProfileInfo.module.scss";
import Button from "../../UI/Button/Button";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({savePhoto, saveProfile, ...props}) => {
    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>;
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onProfileDataChanged = (formData) => {
        saveProfile(formData)
        setEditMode(false)
    }


    return (
        <div>
            <div className={c.profile}>
                <div>
                    <img
                        className={c.avatar}
                        src={
                            props.profile.photos.large
                                ? props.profile.photos.large
                                : "https://sun9-57.userapi.com/impg/KtbsG2bjwdV4-4ihTCF52zo-rP6W7HKX1qHNKg/eVFopKEUYqk.jpg?size=510x510&quality=95&sign=9779954ff44ed3e24da9be688d5ee769&type=album"
                        }
                        alt="ava"
                    />
                    {props.isOwner && <div>
                        <input onChange={onAvatarSelected} type="file"/>
                    </div>}
                </div>
                {editMode
                    ? <ProfileDataForm onSubmit={onProfileDataChanged} initialValues={props.profile} isOwner={props.isOwner} profile={props.profile}/>
                    : <ProfileData goToEditMode={() => setEditMode(true)} profile={props.profile} isOwner={props.isOwner}/>}

            </div>
        </div>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <p>{contactTitle}: {contactValue}</p>
    )
}

const ProfileData = ({isOwner, goToEditMode, ...props}) => {
    return (
        <div className={c.nameAndDescription}>
            {isOwner && <Button type={'third'} onClick={goToEditMode}>Редактировать</Button>}
            <p className={c.profileName}>{props.profile.fullName}</p>
            <p className={c.profileDescription}>
                {props.profile.aboutMe}
            </p>
            <p>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</p>
            {
                props.profile.lookingForAJob && <p>
                    My skillz: {props.profile.lookingForAJobDescription}
                </p>
            }
            <div>
                Contacts:
                <div className={c.contacts}>
                    {Object.keys(props.profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>)}
                </div>
            </div>

        </div>
    )
}



export default ProfileInfo;
