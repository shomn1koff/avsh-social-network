import React from "react";
import UserItem from "./UserItem/UserItem";
import axios from "axios";
import UserItemC from "./UserItem/UserItemC";

class UserListC extends React.Component {
	constructor(props) {
		super(props);
		axios
			.get("https://social-network.samuraijs.com/api/1.0/users")
			.then((response) => {
				console.log(response.data);
			});
	}

	getUsers = () => {};

	render() {
		let userItems = this.props.users.map((u) => {
			return (
				<UserItemC
					userID={u.id}
					avatarImage={u.avatarImage}
					userName={u.userName}
					status={u.status}
					followed={u.followed}
					country={u.country}
					city={u.city}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			);
		});

		return <div>{userItems}</div>;
	}
}

export default UserListC