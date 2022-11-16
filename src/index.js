import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from './redux/state';

const dialogs = [
  {id: 1, name: 'Alexey Shichko'},
  {id: 2, name: 'Alexey Shichko'},
  {id: 3, name: 'Alexey Shichko'},
  {id: 4, name: 'Alexey Shichko'},
  {id: 5, name: 'Alexey Shichko'},
]

const messages = [
  {senderName: 'Viktor', message: 'aksdfoasdfjoaisdjfoaisjdfoiajsdofijasdof'},
  {senderName: 'Korneplod', message: 'aksdfoasdfjoaisdjfoaisjdfoiajsdofijasdof'},
  {senderName: 'Славянин', message: 'aksdfoasdfjoaisdjfoaisjdfoiajsdofijasdof'},
  {senderName: 'Кек', message: 'aksdfoasdfjoaisdjfoaisjdfoiajsdofijasdof'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
