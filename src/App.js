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

function App({state}) {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs dialogs={state.dialogs} messages={state.messages}/>} />
            <Route path="/profile" element={<Profile posts={state.posts} />} />
          </Routes>
        </div>
        {/* <Profile/> */}
      </div>
    </Router>

  );
}

export default App;
