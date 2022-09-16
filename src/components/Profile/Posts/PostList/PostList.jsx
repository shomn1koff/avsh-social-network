import React from 'react'
import Post from './Post/Post'

const PostList = () => {
  return (
    <div>
        <Post avatar='https://memepedia.ru/wp-content/uploads/2018/06/unnamed-768x768.jpg' likesCount='228' title='hi'/>
        <Post avatar='https://memepedia.ru/wp-content/uploads/2018/06/unnamed-768x768.jpg' likesCount='1488' title='random post'/>
        <Post avatar='https://memepedia.ru/wp-content/uploads/2018/06/unnamed-768x768.jpg' likesCount='188' title='samurai'/>
        <Post avatar='https://memepedia.ru/wp-content/uploads/2018/06/unnamed-768x768.jpg' likesCount='134' title='zov'/>
    </div>
  )
}

export default PostList