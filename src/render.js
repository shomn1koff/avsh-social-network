import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { addNewMessage, addNewPost } from './redux/state'

export let rerenderAllTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <App state={state} addNewMessage={addNewMessage} addNewPost={addNewPost} />
    </React.StrictMode>,
  )
}
