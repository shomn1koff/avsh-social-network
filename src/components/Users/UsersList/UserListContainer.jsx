import { connect } from "react-redux";
import {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
    toggleIsFetching
} from "../../../redux/usersPageReducer";
//import UserList from "./UserList";
import preloader from '../../../assets/images/preloader.svg'

import React from "react";
import axios from "axios";
// import UserItem from "./UserItem/UserItem";
// import Button from "../../UI/Button/Button";
// import c from "./UserList.module.scss";
import Users from "./Users";
import Preloader from "../../UI/Preloader/Preloader";

class UserListAPIContainer extends React.Component {
	componentDidMount() {
        this.props.toggleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((response) => {
				console.log(response);
				//console.log()
                this.props.toggleIsFetching(false)
				this.props.setTotalUsersCount(response.data.totalCount);
				this.props.setUsers(response.data.items);
			});
	}

	onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
		this.props.setCurrentPage(pageNumber);
		console.log(this.props.currentPage);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
			)
			.then((response) => {
				console.log(response);
				//console.log()
                this.props.toggleIsFetching(false)
				this.props.setTotalUsersCount(response.data.totalCount);
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		return (
			<>
            {this.props.isFetching ? 
            <Preloader/>
            : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalUsersCount: state.usersPage.totalUsersCount,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		follow: (userID) => {
// 			dispatch(followAC(userID));
// 		},
// 		unfollow: (userID) => {
// 			dispatch(unfollowAC(userID));
// 		},
// 		setCurrentPage: (page) => {
// 			dispatch(setCurrentPageAC(page));
// 		},
// 		setTotalUsersCount: (totalUsersCount) => {
// 			dispatch(setTotalUsersCountAC(totalUsersCount));
// 		},
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
// 	};
// };

const UserListContainer = connect(
	mapStateToProps,
	{setUsers, follow, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching}
)(UserListAPIContainer);
export default UserListContainer;
