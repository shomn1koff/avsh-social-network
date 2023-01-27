import React from "react";
import Button from "../../../UI/Button/Button";
import c from "./UserItem.module.scss";

const UserItem = ({
    name,
    id,
    status,
    followed,
    follow,
    unfollow,
    ...props
}) => {
	//{ id: 1, avatarImage: '', status: '', followed: false, country: 'Russia', city: 'Podolsk' },

    const fl = () => {
        follow(id)
    }
    const unfl = () => {
        unfollow(id)
    }

	return (
		<div className={c.userWrapper}>
			<div className={c.userInfo}>
				<img src={props.photos.small} alt="avatar" />
                {
                    followed ? 
                    <Button type={'secondary'} onClick={unfl} fit={'fitcontent'}>Отписаться</Button> 
                    : <Button type={'primary'} onClick={fl} fit={'fitcontent'}>Подписаться</Button>
                }
			</div>
            <div className={c.userDescription}>
                <div className={c.nameAndStatus}>
                    <div>{name}</div>
                    <div>{status}</div>
                </div>
                <div className={c.userLocation}>
                    ieieie
                </div>
            </div>
		</div>
	);
};

export default UserItem;

