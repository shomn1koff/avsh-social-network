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

function App() {
  
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </div>
        {/* <Profile/> */}
      </div>
    </Router>

  );
}

export default App;
