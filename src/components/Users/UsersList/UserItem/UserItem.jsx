import React from "react";
import Button from "../../../UI/Button/Button";
import c from "./UserItem.module.scss";

const UserItem = ({
    userID,
	avatarImage,
    userName,
	status,
	followed,
	country,
	city,
    follow,
    unfollow,
	...props
}) => {
	//{ id: 1, avatarImage: '', status: '', followed: false, country: 'Russia', city: 'Podolsk' },

    const fl = () => {
        follow(userID)
    }
    const unfl = () => {
        
        unfollow(userID)
    }

	return (
		<div className={c.userWrapper}>
			<div className={c.userInfo}>
				<img src={avatarImage} alt="avatar" />
                {
                    followed ? 
                    <Button type={'secondary'} onClick={unfl} fit={'fitcontent'}>Отписаться</Button> 
                    : <Button type={'primary'} onClick={fl} fit={'fitcontent'}>Подписаться</Button>
                }
			</div>
            <div className={c.userDescription}>
                <div className={c.nameAndStatus}>
                    <div>{userName}</div>
                    <div>{status}</div>
                </div>
                <div className={c.userLocation}><span>{country}</span>, <span>{city}</span></div>
            </div>
		</div>
	);
};

export default UserItem;

