import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { addNewMessage, addNewPost, updateNewPostText } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderAllTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addNewMessage={addNewMessage} addNewPost={addNewPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
  )
}
