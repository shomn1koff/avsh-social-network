import React from "react";
import Button from "../../../UI/Button/Button";
import c from "./UserItem.module.scss";

class UserItemC extends React.Component {

    fl = () => {
        this.props.follow(this.props.userID)
    }

    unfl = () => {
        this.props.unfollow(this.props.userID)
    }

    render() {
        return (
            <div className={c.userWrapper}>
                <div className={c.userInfo}>
                    <img src={this.props.avatarImage} alt="avatar" />
                    {
                        this.props.followed ? 
                        <Button type={'secondary'} onClick={() => this.props.unfollow(this.props.userID)} fit={'fitcontent'}>Отписаться</Button> 
                        : <Button type={'primary'} onClick={() => this.props.follow(this.props.userID)} fit={'fitcontent'}>Подписаться</Button>
                    }
                </div>
                <div className={c.userDescription}>
                    <div className={c.nameAndStatus}>
                        <div>{this.props.userName}</div>
                        <div>{this.props.status}</div>
                    </div>
                    <div className={c.userLocation}><span>{this.props.country}</span>, <span>{this.props.city}</span></div>
                </div>
            </div>
        );
    }
}

export default UserItemC
