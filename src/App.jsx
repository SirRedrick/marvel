import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import './App.css';

function App({ state, dispatch }) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              posts={state.profilePage.posts}
              postInput={state.profilePage.postInput}
              dispatch={dispatch}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              dialogs={state.dialogsPage.dialogs}
              messages={state.dialogsPage.messages}
              messageInput={state.dialogsPage.messageInput}
              dispatch={dispatch}
            />
          )}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

App.propTypes = {
  state: PropTypes.shape({
    dialogsPage: PropTypes.shape({
      dialogs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })),
      messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        message: PropTypes.string,
      })),
      messageInput: PropTypes.string,
    }).isRequired,
    profilePage: PropTypes.shape({
      posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        message: PropTypes.string,
        likesCount: PropTypes.number,
      })),
      postInput: PropTypes.string,
    }).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default App;
