import './App.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import {
  BrowserRouter as Router,

  Routes,
  Route,
} from "react-router-dom";

function App({store}) {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs dialogs={store.getState().dialogsPage.dialogs} messages={store.getState().dialogsPage.messages} dispatch={store.dispatch.bind(store)}/>} />
            <Route path="/profile" element={<Profile profilePage={store.getState().profilePage} dispatch={store.dispatch.bind(store)}/>} />
          </Routes>
        </div>
        {/* <Profile/> */}
      </div>
    </Router>

  );
}

export default App;
