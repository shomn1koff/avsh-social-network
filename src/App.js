import './App.scss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
            <Route path="/dialogs/*" element={<DialogsContainer store={store}/>} />
            <Route path="/profile" element={<Profile store={store}/>} />
          </Routes>
        </div>
        {/* <Profile/> */}
      </div>
    </Router>

  );
}

export default App;
