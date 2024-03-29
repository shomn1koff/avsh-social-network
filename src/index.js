import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/reduxState";
import {Provider} from "react-redux";

setInterval(() => {
	store.dispatch({type: 'FAKE'})
}, 1000)

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderAllTree = (store) => {
	root.render(
		// <React.StrictMode>
			<Provider store={store}>
				<App/>
			</Provider>
		// </React.StrictMode>
	);
};
rerenderAllTree(store);

store.subscribe(() => {
	rerenderAllTree(store);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
