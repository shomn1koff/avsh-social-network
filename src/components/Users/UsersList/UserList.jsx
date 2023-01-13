import React from "react";
import UserItem from "./UserItem/UserItem";
import axios from "axios";
import UserItemC from "./UserItem/UserItemC";

const UserList = ({ users, follow, unfollow, setUsers }) => {
	//   avatarImage,
	//   userName,
	// status,
	// followed,
	// country,
	// city,

	axios
		.get("https://social-network.samuraijs.com/api/1.0/users")
		.then((response) => {
      console.log(response.data)
    });
	if (users.length === 0) {
		//console.log('sss')
		//выводится в 2 раза больше пользователей (вроде как функция 2 раза вызывается (2 раз из installhook))
		//для фикса убираем в index.js React.StrictMode (чушь)
	}

	let userItems = users.map((u) => {
		return (
			<UserItem
				userID={u.id}
				avatarImage={u.avatarImage}
				userName={u.userName}
				status={u.status}
				followed={u.followed}
				country={u.country}
				city={u.city}
				follow={follow}
				unfollow={unfollow}
			/>
		);
	});

	return <div>{userItems}</div>;
};

export default UserList;


