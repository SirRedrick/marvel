import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => (<Profile />)} />
        <Route path="/dialogs" render={() => (<DialogsContainer />)} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  </BrowserRouter>
);

// App.propTypes = {
//   state: PropTypes.shape({
//     dialogs: PropTypes.shape({
//       contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//       })).isRequired,
//       messages: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         message: PropTypes.string.isRequired,
//       })).isRequired,
//       messageInput: PropTypes.string.isRequired,
//     }).isRequired.isRequired,
//     profile: PropTypes.shape({
//       posts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         message: PropTypes.string.isRequired,
//         likesCount: PropTypes.number.isRequired,
//       })).isRequired,
//       postInput: PropTypes.string.isRequired,
//     }).isRequired.isRequired,
//   }).isRequired.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

export default App;
