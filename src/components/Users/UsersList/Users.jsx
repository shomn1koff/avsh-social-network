import React from "react";
import Button from "../../UI/Button/Button";
import UserItem from "./UserItem/UserItem";
import c from './UserList.module.scss'
import Paginator from "./Paginator";

const Users = (props) => {
	let pages = [];
	let pagesCount = Math.ceil(
		props.totalUsersCount / props.pageSize
	);

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let userItems = props.users.map((u) => {
		return (
			<UserItem
				name={u.name}
				id={u.id}
				photos={u.photos}
				status={u.status}
				followed={u.followed}
				isFollowing={props.isFollowing}
				follow={props.follow}
				unfollow={props.unfollow}
				key={u.id}
			/>
		);
	});

	return (
		<div>
			<Paginator pages={pages}
					   onPageChanged={props.onPageChanged}
					   currentPage={props.currentPage} pagesCount={pagesCount}/>
			{userItems}
		</div>
	);
};

export default Users;
