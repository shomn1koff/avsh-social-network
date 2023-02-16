import React from "react";
import Button from "../../../UI/Button/Button";
import c from "./UserItem.module.scss";
import {NavLink} from 'react-router-dom'



class UserItem extends React.Component {
    render() {
        return (
            <div className={c.userWrapper}>
                <div className={c.userInfo}>
                    <NavLink to={'/profile/' + this.props.id}>
                        <img
                            src={
                                this.props.photos.large
                                    ? this.props.photos.large
                                    : "https://sun1-25.userapi.com/impg/2ftoZ_gXsOiqrGRoDrmuixDQZlJiuek3mONHCA/w3_sx9Ol8nM.jpg?size=1619x2160&quality=95&sign=93f4cc785d2f7c4b8123b04a561d43b5&type=album"
                            }
                            alt="avatar"
                        />
                    </NavLink>
                    <Button
                        type={this.props.followed ? 'secondary' : 'primary'}
                        disabled={this.props.isFollowing.some(id => id === this.props.id)}
                        onClick={() => {
                            this.props.followed
                                ? this.props.unfollow(this.props.id)
                                : this.props.follow(this.props.id)
                        }}
                        fit={"fitcontent"}
                    >
                        {this.props.followed ? `Отписаться` : `Подписаться`}
                    </Button>

                </div>
                <div className={c.userDescription}>
                    <div className={c.nameAndStatus}>
                        <div>{this.props.name}</div>
                        <div>{this.props.status}</div>
                    </div>
                    <div className={c.userLocation}>SAMPLE TEXT</div>
                </div>
            </div>
        );
    }
}

export default UserItem;
