import React from "react";
import { connect } from "react-redux";
import PostList from "./PostList"

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

let mapDispatchToProps = (dispatch) => {

}

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListContainer