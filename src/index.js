import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import state from './redux/state'
import { addNewPost, addNewMessage, updateNewPostText, subscribe } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderAllTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addNewMessage={addNewMessage} addNewPost={addNewPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
  )
}
rerenderAllTree(state)

subscribe(rerenderAllTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
