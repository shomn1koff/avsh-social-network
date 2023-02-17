import {connect} from "react-redux";
import {
    setCurrentPage,
    getUsers, follow, unfollow
} from "../../../redux/usersPageReducer";

import React from "react";

import Users from "./Users";
import Preloader from "../../UI/Preloader/Preloader";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

class UserListAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                    isFollowing={this.props.isFollowing}
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
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
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

const UserListContainer = withAuthRedirect(connect(
    mapStateToProps,
    {
        setCurrentPage,
        getUsers, follow, unfollow
    }
)(UserListAPIContainer));
export default UserListContainer;
