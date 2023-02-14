import React from "react";
import Button from "../../../UI/Button/Button";
import c from "./UserItem.module.scss";
import {NavLink} from 'react-router-dom'
import axios from "axios";


class UserItem extends React.Component {
	fl = () => {
		this.props.follow(this.props.id);
	};

	unfl = () => {
		this.props.unfollow(this.props.id);
	};

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
					{this.props.followed ? (
						<Button
							type={"secondary"}
							onClick={() => {
								axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.id}`, {
									withCredentials: true,
									headers: {
										"API-KEY": "3f87fb6e-94cc-4916-a953-0b6cf7e934ed"
									}
								}).then(response => {
									if (response.data.resultCode === 0) {
										this.props.unfollow(this.props.id)
									}
								})
							}}
							fit={"fitcontent"}
						>
							Отписаться
						</Button>
					) : (
						<Button
							type={"primary"}
							onClick={() => {
								axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.id}`, {}, {
									withCredentials: true,
									headers: {
										"API-KEY": "3f87fb6e-94cc-4916-a953-0b6cf7e934ed"
									}
								}).then(response => {
									if (response.data.resultCode === 0) {
										this.props.follow(this.props.id)
									}
								})
							}}
							fit={"fitcontent"}
						>
							Подписаться
						</Button>
					)}
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
