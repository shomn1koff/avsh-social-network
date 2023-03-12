import './App.scss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Navbar from './components/Navbar/Navbar';
import UsersPage from './components/Users/UsersPage';
import LoginPage from './components/Login/Login'

import {            
  HashRouter as Router,

  Routes,
  Route,
} from "react-router-dom";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/UI/Preloader/Preloader";

class App extends Component {


  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if(!this.props.initialized) {
      return <Preloader/>
    }

    return (
        <Router>
          <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
              <Routes>
                <Route path="/" element={<ProfileContainer/>}/>
                <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                <Route path="/profile/*" element={<ProfileContainer/>}/>
                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
              </Routes>
            </div>
            {/* <Profile/> */}
          </div>
        </Router>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
    connect(mapStateToProps, {initializeApp})
)(App)
