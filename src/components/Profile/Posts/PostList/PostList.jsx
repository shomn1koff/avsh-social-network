import React from "react";
import StoreContext from "../../../../storeContext";
import Post from "./Post/Post";

const PostList = () => {
	
	return (
		<StoreContext.Consumer>
       {
        (store) => {
          let postsElements = store.getState().profilePage.posts.map((el) => (
            <Post
              message={el.message}
              likesCount={el.likesCount}
              avatar={
                "https://memepedia.ru/wp-content/uploads/2018/06/unnamed-768x768.jpg"
              }
            />
          ));
          return (<div>{postsElements}</div>)
        }
       }
			
		</StoreContext.Consumer>
	);
};

export default PostList;
